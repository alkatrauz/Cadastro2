
let formulario = document.getElementById('form-cadastro');
let tbody = document.querySelector('#tabela-cadastros tbody');
formulario.querySelector('button').onclick = function() {
  // Obtém o valor dos campos de nome e email
  let nome = formulario.nome.value;
  let email = formulario.email.value;

  // Cria uma nova linha de HTML para a tabela
  tbody.innerHTML += `<tr><td>${nome}</td><td>${email}</td></tr>`;

  // Limpa os campos do formulário
  formulario.reset(); // Limpa o formulário
};
