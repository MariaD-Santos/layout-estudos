document.addEventListener('DOMContentLoaded', function() {
    const estadosSelect = document.getElementById('estados');
    const municipiosSelect = document.getElementById('municipios');

    // Função para carregar os municípios com base no estado selecionado
    estadosSelect.addEventListener('change', async function() {
        const estadoSelecionado = estadosSelect.value;
        municipiosSelect.innerHTML = '<option value="">Selecione um município</option>';
        municipiosSelect.disabled = true;

        if (estadoSelecionado) {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/distritos`);
            const municipios = await response.json();

            municipios.forEach(municipio => {
                const option = document.createElement('option');
                option.value = municipio.id;
                option.textContent = municipio.nome;
                municipiosSelect.appendChild(option);
            });

            municipiosSelect.disabled = false;
        }
    });
});