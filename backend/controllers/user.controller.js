const db = require('../models')
const User = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'O conteúdo não pode ser vazio!'
    })
    return
  }

  const user = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  }

  User.create(user)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Algum erro ocorreu ao salvar um novo usuário!'
      })
    })
}

exports.findAll = (req, res) => {
  const nome = req.query.nome
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null

  User.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Algum erro ocorreu ao buscar os usuários!'
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Tutorial with id=' + id
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Tutorial was updated successfully.'
        })
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Tutorial with id=' + id
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Tutorial was deleted successfully!'
        })
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Tutorial with id=' + id
      })
    })
}

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all tutorials.'
      })
    })
}
exports.findAllPublished = (req, res) => {
  User.findAll({ where: { published: true } })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.'
      })
    })
}
