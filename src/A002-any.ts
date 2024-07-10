// Utilize any apenas em último caso (Ele não vai dar erro, mas é preciso ser mais específico)
function showMessage(msg: any) {
  return msg;
  // O retorno dessa função será any, e se eu jogasse em uma variável ela teria o tipo inferido de any
}

console.log(showMessage('Hello world!'));
