
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}
// Modal Categoria
const openModalCat = () => document.getElementById('modalCat')
    .classList.add('active')

const closeModalCat = () => {
    clearFields()
    document.getElementById('modalCat').classList.remove('active')
}
// Modal Marca
const openModalMar = () => document.getElementById('modalMar')
    .classList.add('active')

const closeModalMar= () => {
    clearFields()
    document.getElementById('modalMar').classList.remove('active')
}



const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD - create read update delete
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

// const saveClient = () => {
//     debugger
//     if (isValidFields()) {
//         const client = {
//             nome: document.getElementById('nome').value,
//             preco: document.getElementById('preco').value,
//             peso: document.getElementById('peso').value,
//             tamanho: document.getElementById('tamanho').value,
//             marca: document.getElementById('marca').value,
//             modelo: document.getElementById('modelo').value,
//             quantia: document.getElementById('quantia').value,
//             descricao: document.getElementById('descricao').value,
//             cor: document.getElementById('cor').value,
//             segue: document.getElementById('segue').value,
//             categoria: document.getElementById('categoria').value,
//             imagem: document.getElementById('imagem').value,
//         }
//         const index = document.getElementById('nome').dataset.index
//         if (index == 'new') {
//             createClient(client)
//             updateTable()
//             closeModal()
//         } else {
//             updateClient(index, client)
//             updateTable()
//             closeModal()
//         }
//     }
// }

const createRow = (client, index) => { //Para visualizar na Tela 
    // const newRow = document.createElement('tr')
    // newRow.innerHTML = `
    //     <td>${client.nome}</td>
    //     <td>${client.preco}</td>
    //     <td>${client.peso}</td>
    //     <td>${client.tamanho}</td>
    //     <td>${client.marca}</td>
    //     <td>${client.modelo}</td>
    //     <td>${client.quantia}</td>
    //     <td>${client.descricao}</td>
    //     <td>${client.cor}</td>
    //     <td>${client.segue}</td>
    //     <td>${client.categoria}</td>
    //     <td><img style="
    //     width:100px;
    //     height:100px;
    //     margin-top: 7px;" src="${client.imagem}"></td>
    //     <td>
    //     <button type="button" class="button green"  id="edit-${index}">Editar</button>
    //     <button type="button" class="button red" id="delete-${index}">Excluir</button>
    //     </td>
    // `
    document.querySelector('#tbProduct>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbProduct>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

// const fillFields = (client) => {
//     document.getElementById('nome').value =  client.nome
//     document.getElementById('preco').value =  client.preco
//     document.getElementById('peso').value =  client.peso
//     document.getElementById('tamanho').value =  client.tamanho
//     document.getElementById('marca').value =  client.marca
//     document.getElementById('modelo').value =  client.modelo
//     document.getElementById('quantia').value =  client.quantia
//     document.getElementById('descricao').value =  client.descricao
//     document.getElementById('cor').value =  client.cor
//     document.getElementById('segue').value =  client.segue
//     document.getElementById('categoria').value =  client.categoria
//     document.getElementById('imagem').value =  client.imagem
//     document.getElementById('nome').dataset.index = client.index
// }

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o produto ${client.nome}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal) 

document.getElementById('cadastrarCategoria')
    .addEventListener('click', openModalCat)

document.getElementById('cadastrarMarca')
    .addEventListener('click', openModalMar)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('modalCloseCat')
    .addEventListener('click', closeModalCat)

document.getElementById('modalCloseMar')
    .addEventListener('click', closeModalMar)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tbProduct>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)
