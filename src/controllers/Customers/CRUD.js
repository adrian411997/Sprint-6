const { eventModel } = require("../../Models/Costumers");

const postCostumer = async (req, res) => {
  try {
    const newCostumer = new eventModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    newCostumer.password = newCostumer.hashPassword(req.body.password);

    await newCostumer.save();
    res.status(200).json(newCostumer);
  } catch (error) {
    console.error("Error al crear usuario", error);
    res
      .status(500)
      .json({ error: "Error al guardar el usuario en la base de datos" });
  }
};

module.exports = { postCostumer };
