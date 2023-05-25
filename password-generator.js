const generatePassword = require("generate-password");

function RandomPassword() {
  const password = generatePassword.generate({
    length: 15,
    numbers: true,
    symbols: true,
    strict: true,
  });
  return password;
}

const generatedPassword = RandomPassword();
console.log("Mot de passe généré est :", generatedPassword);
