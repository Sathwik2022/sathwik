const Item = require("../models/hotel");

exports.getItemById = (req, res, next, itemId) => {
    Item.findById(itemId).exec((err, item) => {
        if (err || !item) {
            return res.status(400).json({
                error: "404 item not found",
            }); 
        }
        req.item = item;
        next();
    });
};

exports.getAllItems = (req, res) => {
    Item.find()
        .sort("-createdAt")
        .exec((err, items) => {
            if (err || !items) {
                return res.status(400).json({
                    error: "something went wrong in finding all items",
                });
            }
            res.json(items);
        });
};

exports.getItem = (req, res) => {
    return res.json(req.item);
};

exports.createItem = (req, res) => {
    const item = new Item(req.body);
    item.save((err, name) => {
        if (err || !name) {
            return res.status(400).json({
            error: "something went wrong",
        });
    }
    res.json({ name });
    });
};

exports.updateItem = (req, res) => {
    const item = req.item;
    item.name = req.body.name;
    item.save((err, t) => {
        if (err || !t) {
            return res.status(400).json({
                error: "something went wrong while updating",
            });
        }
        res.json(t);
    });
};

exports.deleteItem = (req, res) => {
    const item = req.item;
    item.remove((err, name) => {
        if (err || !name) {
            return res.status(400).json({
                error: "something went wrong while deleting the menu",
            });
        }
        res.json({
            menu_deleted: name,
            message: "Name deleted successfully!",
        });
    });
};