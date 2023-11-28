const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }
  jwt.verify(token, "youtube12", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    // Decodificado con éxito, puedes acceder a la información del usuario con decoded.userId
    req.userId = decoded.userId;
    next();
  });
};
module.exports = verificarToken;
