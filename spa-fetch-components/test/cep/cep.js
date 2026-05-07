// const button = document.getElementById('botao')


// button.addEventListener('click', () => {
//     const cep = document.getElementById('cep').value
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then((response) => {

//             if (!response.ok) {
//                 throw new Error('Erro na Requisição.')
//             }
//             return response.json()
//         })
//         .then((dados) => {

//             if (dados.erro) {
//                 throw new Error('CEP inválido ou não encontrado.')
//             }
//             console.log(dados)
//         })
//         .catch((erro) => {
//             console.warn(erro.message)
//         })
// });


// async function buscarCep() {
//     let resposta = await consulta;
//     console.log(resposta)
//     let dataObj = await resposta.json();
//     console.log(dataObj);
// };

// buscarCep();
