// tests using w3schools example codes
// let anna = (num) => console.log(num * 5);


try {
    console.log(anna(5))
  

} catch (erro) {
    let text = `
    <strong>Error name:</strong> ${erro.name}<br />
    <strong>Message:</strong> ${erro.message}<br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
  `;
    document.body.innerHTML = text
};
