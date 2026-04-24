

try {
    // isActive = 0;
    // let teste = isActive == 1 ? 'Not active' : 'Active'
    // let teste2 = isActive == 0 ? 'Not active' : 'Active'
    // console.log(teste, teste2)
    isActive = 0;
    let teste = isActive == 1 ? 'Not active' : 'Active'
    console.log(teste)

    // EU SEI FAZER UM IF TERNARIO EHEHEHHHAHAHHSHAHHEHHEH XD

} catch (erro) {

    let text = `
    <strong>Error name:</strong> ${erro.name}<br />
    <strong>Message:</strong> ${erro.message}<br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
  `;
    document.body.innerHTML = text
};

