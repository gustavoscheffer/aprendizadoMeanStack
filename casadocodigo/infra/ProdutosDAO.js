// create class and methods -CONSTRUCTOR
function ProdutosDAO(connection) {
  this._connection = connection;
}

// prototyping functions
ProdutosDAO.prototype.lista = function (callback) {
  this._connection.query('select * from produtos',callback);
}

// export class when it's called
module.exports = function() {
  return ProdutosDAO;
};
