const { eventModel } = require("../../Models/Events");

const postEvent = async (req, res) => {
  try {
    const newEvent = new eventModel({
      name: req.body.name,
      category: req.body.category,
      date: req.body.date,
      description: req.body.description,
      image: req.body.image,
      place: req.body.place,
      price: req.body.price,
      capacity: req.body.capacity,
      assistance: req.body.assistance,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error al guardar el evento en la base de datos:", error);
    res
      .status(500)
      .json({ error: "Error al guardar el evento en la base de datos" });
  }
};

const deleteAnEvent = async (req, res) => {
  const eventId = req.params.id;
  try {
    const result = await eventModel.deleteOne({ _id: eventId });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Evento eliminado con exito" });
    } else {
      res.status(404).json({ message: "Evento no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el evento" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const results = await eventModel.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los eventos" });
  }
};
const getAnEvent = async (req, res) => {
  const eventId = req.params.id;
  try {
    const result = await eventModel.findOne({ _id: eventId });
    if (result.deletedCount === 1) {
      res.status(200).json({ result });
    } else {
      res.status(404).json({ message: "Evento no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al buscar el evento" });
  }
};

const updateAnEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const result = await eventModel.updateOne({ _id: eventId }, req.body);

    if (result.nModified === 1) {
      res.status(200).json({ message: "Evento actualizado con éxito" });
    } else {
      res.status(404).json({ message: "Evento no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el evento:", error);
    res.status(500).json({ error: "Error al actualizar el evento" });
  }
};
module.exports = {
  postEvent,
  deleteAnEvent,
  getAllEvents,
  getAnEvent,
  updateAnEvent,
};
