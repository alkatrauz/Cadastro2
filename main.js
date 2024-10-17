let formulario = document.getElementById('form-cadastro');
let tbody = document.querySelector('#tabela-cadastros tbody');
formulario.querySelector('button').onclick = function() {
  let linha = document.createElement('tr');
  linha.innerHTML = `<td>${formulario.nome.value}</td><td>${formulario.email.value}</td>`;
  tbody.innerHTML += linha.outerHTML;
  formulario.reset();
};
