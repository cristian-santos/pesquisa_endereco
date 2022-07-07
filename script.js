function getDadosEnderecoPorCep(cep) {
    console.log(cep)

    let url = 'https://viacep.com.br/ws/' +cep +'/json/';
    
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let jsonTexto = xmlHttp.responseText;
            let jsonObjeto = JSON.parse(jsonTexto);

            if(jsonObjeto.bairro == '') {
                document.getElementById('endereco').value = 'Não existe endereço vinculado a esse cep';
            } else {
                document.getElementById('endereco').value = jsonObjeto.logradouro;
            }

            if(jsonObjeto.bairro == '') {
                document.getElementById('bairro').value = 'Não existe bairro vinculado a esse cep';
            } else {
                document.getElementById('bairro').value = jsonObjeto.bairro;
            }
            
            document.getElementById('cidade').value = jsonObjeto.localidade;

            if(jsonObjeto.complemento == '') {
                document.getElementById('complemento').value = 'Não existe complemento no endereço informado';
            } else {
                document.getElementById('complemento').value = jsonObjeto.complemento;
            }

            document.getElementById('uf').value = jsonObjeto.uf;
            document.getElementById('ddd').value = jsonObjeto.ddd;

        }
    }

    xmlHttp.send();
}
