var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function() {

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhttp.addEventListener("load", function() {
    var resposta = this.responseText;
    pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente) {
      adicionaPacienteNaTabela(paciente);
    });

  });

  xhttp.send();
});