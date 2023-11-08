const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/sprint3";
mongoose.set("strictQuery", true);

try {
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err);
});

db.once("open", () => {
  console.log("Conexión exitosa a la base de datos");
});

module.exports = mongoose;
