const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/api/manipulacao-string", (req, res) => {
  const texto = req.body.texto;
  const palindromo = isPalindrome(texto);
  const ocorrencias = countOccurrences(texto);
  const result = {
    palindromo: palindromo,
    ocorrencias_caracteres: ocorrencias,
  };
  res.json(result);
});

function isPalindrome(texto) {
  const reversed = texto.split("").reverse().join("");
  return texto === reversed;
}

function countOccurrences(texto) {
  const ocorrencias = {};
  for (let char of texto) {
    ocorrencias[char] = (ocorrencias[char] || 0) + 1;
  }
  return ocorrencias;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

