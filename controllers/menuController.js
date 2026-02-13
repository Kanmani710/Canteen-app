const MenuItem = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching menu" });
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, price } = req.body;

  try {
    const newItem = new MenuItem({ name, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Error adding menu item" });
  }
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: "Error updating menu item" });
  }
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  try {
    await MenuItem.findByIdAndDelete(id);
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting menu item" });
  }
};
