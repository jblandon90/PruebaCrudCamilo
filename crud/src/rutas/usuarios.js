const express = require('express');
const router = express.Router();

const usuarioController = require('../controladores/usuariosControladores');

router.get('/', usuarioController.list);
router.post('/add', usuarioController.save);
router.get('/delete/:id', usuarioController.delete );
router.get('/update/:id', usuarioController.update);
router.post('/update/:id', usuarioController.edit);

module.exports = router;