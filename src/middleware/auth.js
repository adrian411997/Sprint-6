const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const { eventModel } = require("../Models/Costumers");

passport.use(
  new LocalStrategy(function (username, password, done) {
    eventModel.findOne({ username: username }, function (err, usuario) {
      if (err) {
        return done(err);
      }
      if (!usuario || !usuario.validatePassword(password)) {
        return done(null, false, {
          message: "Nombre de usuario o contraseña incorrecto",
        });
      }
      return done(null, usuario);
    });
  })
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  eventModel.findById(id, function (err, usuario) {
    done(err, usuario);
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: "Nombre de usuario o contraseña incorrecto" });
    }
    const token = jwt.sign({ userId: user._id }, "youtube12", {
      expiresIn: "2h",
    });
    // Puedes personalizar este mensaje según tus necesidades
    return res
      .status(200)
      .json({ message: "Inicio de sesión exitoso", user: user, token: token });
  })(req, res, next);
});

module.exports = router;
