// produtos.js

module.exports = function(app) {
  app.get("/produtos", function(req, res){


    //import of modules
    var connection = app.infra.connectionFactory();
    var produtosBanco = app.infra.produtosBanco;


    produtosBanco.lista( connection ,function(err, results){
      console.log('Query sql erro: '+ err);
      res.render('produtos/lista', {lista: results});

    });

    connection.end();

  });
}
