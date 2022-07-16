const express = require("express");
const router = express.Router();

const {
    createItem,
    getItemById,
    getItem,
    deleteItem,
    getAllItems,
    updateItem,
} = require("../controllers/hotel");

router.param("itemId", getItemById);
router.get("/items/", getAllItems);
router.get("/item/:itemId/", getItem);

router.post("/item/create/", createItem);

router.put("/item/:itemId/update", updateItem);

router.delete("/item/:itemId/delete", deleteItem);

module.exports = router