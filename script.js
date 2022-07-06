function getDadosEnderecoPorCep(cep) {
    console.log(cep)

    let url = 'https://viacep.com.br/ws/' +cep +'/json/';
    
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let dadosJSONtext = xmlHttp.responseText;
            let dadosJSONObj = JSON.parse(dadosJSONtext);

            

            if(dadosJSONObj.bairro == '') {
                document.getElementById('endereco').value = 'Não existe endereço vinculado a esse cep';
            } else {
                document.getElementById('endereco').value = dadosJSONObj.logradouro;
            }

            if(dadosJSONObj.bairro == '') {
                document.getElementById('bairro').value = 'Não existe bairro vinculado a esse cep';
            } else {
                document.getElementById('bairro').value = dadosJSONObj.bairro;
            }
            
            document.getElementById('cidade').value = dadosJSONObj.localidade;
            document.getElementById('uf').value = dadosJSONObj.uf;
            document.getElementById('ddd').value = dadosJSONObj.ddd;

        }
    }

    xmlHttp.send();
}
