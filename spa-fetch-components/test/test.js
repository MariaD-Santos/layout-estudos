// /* Testes com os exemplos da w3 Schools */

// /* Lançar um excessão (erro personalizado) */
// // const erroName = `<strong>Nome do erro:</strong>${erro.name}<br />`
// // const erroName = `<strong>Nome do erro:</strong>${erro.message}<br />`
// // const erroName = `<strong>Nome do erro:</strong>${erro.codigo}<br />`
// // const erroName = `<strong>Nome do erro:</strong>${erro.tipo}<br />`
// // const erroName = `<strong>Nome do erro:</strong>${erro.stack}<br />`



// try {
//     let idade = -5;
//     if (idade < 0) {
//         let erro = gerarErros('teste',1001,'teste');
//         throw erro;
//     }

// } catch (erro) {
//     let text = `
//     <strong>Nome do erro:</strong>${erro.name}<br />
//     <strong>Mensagem:</strong>${erro.message}<br />
//     <strong>Código:</strong>${erro.codigo}<br />
//     <strong>Tipo:</strong>${erro.tipo}<br />
//     <strong>Stack:</strong>${erro.stack}<br />
//     `

//     document.body.innerHTML = text;
// };

/* Criar uma função geradora de erro */

// 

/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */
// const loadComponent = async (contentPatch, container) => {
//     try{
//         const response = await fetch(contentPatch);

//         if(!response.ok){
//             throw new Error('Erro ao carregar componente')
//         }

//         const html = await response.text();
//         container.innerHTML = html;

//     } catch (erro) {
//         console.error(erro);
//     }
// };

// loadComponent('c-test.html', document.querySelector('body'))

// 'c-test.html', document.querySelector('body')

/* Criar uma requisição HTTP com fetch e .then */
const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);
console.log(consulta)
consulta.then((resposta) => {
    if(!resposta.ok){
        throw new Error('Cep Inválido.')
    }
    const resp = resposta.json()
    console.log(resp)
    return resp

})

.then((dados) => {

    console.log(dados)
})
.catch((error) => {

    console.warn(error)

})

/* Criar uma requisição HTTP com fecth e async/await */

