   const button = document.getElementById('botao')
        const cep = document.getElementById('cep')
        
        function obterCep(){
            return cep.value.trim();
        }

        button.addEventListener('click', () => {
            const cep = obterCep();
           
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => {

                    if (!response.ok) {
                        throw new Error('Erro na Requisição.')
                    }
                    return response.json()
                })
                .then((dados) => {
                    console.log("Resultado com .then")
                    if (dados.erro) {
                        throw new Error('CEP inválido ou não encontrado.')
                    }
                    console.log(dados)
                })
                .catch((erro) => {
                    console.warn(erro.message)
                })
        });