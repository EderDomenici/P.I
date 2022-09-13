'use strict';

const cleanForms = () => {
    document.getElementById('address').value = '';
    document.getElementById('neighborhood').value = '';
    document.getElementById('city').value = '';
    document.getElementById('estate').value = '';
}

    const inputForms = (address) => {
        cleanForms();
        document.getElementById('address').value = address.logradouro;
        document.getElementById('neighborhood').value = address.bairro;
        document.getElementById('city').value = address.localidade;
        document.getElementById('estate').value = address.uf;
    }
const isNumber = (number) => /^[0-9]+$/.test(number);

const addressCheck = (cep) => cep.length === 8 && isNumber(cep);


const searchAddress = async() => {
    cleanForms();

    const cep =  document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json`;

    if(addressCheck(cep)){
        const date = await fetch(url);
        const address = await date.json();

        if (address.hasOwnProperty('erro')){
            document.getElementById('address').value = 'CEP não encontrado!';
        } else {
            inputForms(address);
        }
    } else {
        document.getElementById('address').value = 'CEP incorreto';
    }


}

document.getElementById('cep')
    .addEventListener('focusout', searchAddress);