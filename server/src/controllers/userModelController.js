const UserModel = require("../models/userModel");

async function create(req, res) {
  try {
    const userData = new UserModel(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getAll(req, res) {
  try {
    const userData = await UserModel.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getOne(req, res) {
  try {
    const id = req.params.id;
    const userExist = await UserModel.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const userExist = await UserModel.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "User not found" });
    }
    const updatedData = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const userExist = await UserModel.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User not found" });
    }
    await UserModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "User delete successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = { create, getAll, getOne, update, deleteUser };
