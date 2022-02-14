const { request, response } = require("express");

const userGet = (req = request, res = response) => {
  const { key, altura } = req.query;

  res.json({
    msg: "get Api - Controlador",
    key,
    altura,
  });
};

const userPost = (req = request, res) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post Api - Controlador",
    nombre,
    edad,
  });
};

const userPut = (req = request, res) => {
  const id = req.params.id;

  res.json({
    msg: "put Api - Controlador",
    id,
  });
};

const userDelete = (req, res) => {
  res.json({
    msg: "delete Api - Controlador",
  });
};

const userPatch = (req, res) => {
  res.json({
    msg: "pacth Api - Controlador",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
  userPatch,
};
