# Cadastro2
let formulario = document.getElementById('form-cadastro');
Seleciona o formulário pelo ID para acessarmos seus campos e manipulá-lo.

let tbody = document.querySelector('#tabela-cadastros tbody');
Seleciona o <tbody> da tabela, onde adicionaremos as novas linhas.

formulario.querySelector('button').onclick = function() { ... }
Adiciona um evento de clique ao botão. A função que será executada é definida aqui.

let linha = document.createElement('tr');
Cria a variavel linha e armazena um novo elemento <tr>, linha da tabela.

linha.innerHTML = <td>${formulario.nome.value}</td><td>${formulario.email.value}</td>;
Preenche a linha com duas células (<td>), uma para o nome e outra para o email.

tbody.innerHTML += linha.outerHTML;
Converte a linha completa em HTML e adiciona ao final do <tbody>.