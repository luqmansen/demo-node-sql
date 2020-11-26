const db = require("../models");
const sequelize = require("sequelize");
const Books = db.books;
const Authors = db.authors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
      res.status(400).send({
        message: "Title can not be empty!"
      });
      return;
    }
    
    var timestamp = new Date().getTime()

    const book = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : timestamp
    };
  
    Books.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while inserting new Books."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Books.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Books."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Books.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Books with id=" + id
        });
      });
  };
//
// exports.findByIdNoORM = (customerId, result) => {
//     sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//
//         if (res.length) {
//             console.log("found customer: ", res[0]);
//             result(null, res[0]);
//             return;
//         }
//
//         // not found Customer with the id
//         result({ kind: "not_found" }, null);
//     });
// };

  exports.updateAuthorsAndBook = async (req, res) => {
      try {

          const res = await sequelize.Transaction(async (t) => {

              const author = await Authors.create({
                  firstName: 'Abraham',
                  lastName: 'Lincoln'
              }, {transaction: t});

              await Books.setAttributes({
                  title: 'Lincoln Autobiography',
                  description: 'Autobiography book',
                  published: new Date()
              }, {transaction: t});

              return author;

          });

      } catch (error) {
      }
  }

exports.update = (req, res) => {
    console.log("not yet implemented")
    return
};

exports.delete = (req, res) => {
    console.log("not yet implemented")
    return
};

exports.deleteAll = (req, res) => {
    console.log("not yet implemented")
    return
};
