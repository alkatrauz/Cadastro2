let formulario = document.getElementById('form-cadastro');
let tbody = document.querySelector('#tabela-cadastros tbody');
formulario.querySelector('button').onclick = function() {
  let nome = formulario.nome.value;
  let email = formulario.email.value;
  tbody.innerHTML += `<tr><td>${nome}</td><td>${email}</td></tr>`;
  formulario.reset();
};
