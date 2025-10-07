const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verifica se o nome está vazio 
  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome!");
    return;
  }

  // Verifica se o email está preenchido e é válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu email corretamente!");
    return;
  }

  // Verifica se o usuário foi preenchido
  if (usernameInput.value === "") {
    alert("Por favor, preencha o seu nome de usuário!");
    return;
  }

  // Verifica se a senha é válida
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos.");
    return;
  }

  // Verifica se as senhas coincidem
  if (passwordInput.value !== confirmInput.value) {
    alert("As senhas não coincidem!");
    return;
  }

  // Se tudo estiver certo, redireciona para o quiz
  window.location.href = "../quiz/index4.html"; // coloque o caminho correto do seu quiz
});

// Função que valida email
function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/;
  return emailRegex.test(email);
}

// Função que valida a senha
function validatePassword(password, minDigits) {
  return password.length >= minDigits;
}