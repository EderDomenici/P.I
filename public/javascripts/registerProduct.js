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



const getLocalStorage = () => JSON.parse(localStorage.getItem('db_product')) ?? []
const setLocalStorage = (dbProduct) => localStorage.setItem("db_product", JSON.stringify(dbProduct))

 // CRUD - create read update delete
const deleteClient = (index) => {
    const dbProduct = readProduct()
    dbProduct.splice(index, 1)
    setLocalStorage(dbProduct)
}

const updateClient = (index, product) => {
    const dbProduct = readProduct()
    dbProduct[index] = product
    setLocalStorage(dbProduct)
}

const readProduct = () => getLocalStorage()

const createClient = (product) => {
    const dbProduct = getLocalStorage()
    dbProduct.push (product)
    setLocalStorage(dbProduct)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

// Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

 const saveProducts = () => {
     debugger
     if (isValidFields()) {
         const product = {
             nome: document.getElementById('name').value,
             preco: document.getElementById('preco').value,
             peso: document.getElementById('peso').value,
             tamanho: document.getElementById('tamanho').value,
             marca: document.getElementById('marca').value,
             modelo: document.getElementById('modelo').value,
             quantia: document.getElementById('quantia').value,
             descricao: document.getElementById('descricao').value,
             cor: document.getElementById('cor').value,
             segue: document.getElementById('segue').value,
             categoria: document.getElementById('categoria').value,
             imagem: document.getElementById('imagem').value,
         }
         const index = document.getElementById('name').dataset.index
         if (index == 'new') {
             createProduct(product)
             updateTable()
             closeModal()
         } else {
             updateProduct(index, product)
             updateTable()
             closeModal()
         }
     }
 }

const createRow = (product, index) => {// Para visualizar na Tela 
     const newRow = document.createElement('tr')
     newRow.innerHTML = `
         <td>${product.nome}</td>
         <td>${product.preco}</td>
         <td>${product.peso}</td>
         <td>${product.tamanho}</td>
         <td>${product.marca}</td>
         <td>${product.modelo}</td>
         <td>${product.quantia}</td>
         <td>${product.descricao}</td>
         <td>${product.cor}</td>
         <td>${product.segue}</td>
         <td>${product.categoria}</td>
         <td><img style="
         width:100px;
         height:100px;
         margin-top: 7px;" src="${product.imagem}"></td>
         <td>
         <button type="submit" class="button green"  id="edit-${index}">Editar</button>
         <button type="submit" class="button red" id="delete-${index}">Excluir</button>
         </td>
     `
    document.querySelector('#tbProduct>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbProduct>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbProduct = readProduct()
    clearTable()
    dbProduct.forEach(createRow)
}

 const fillFields = (product) => {
     document.getElementById('nome').value =  product.nome
     document.getElementById('preco').value =  product.preco
     document.getElementById('peso').value =  product.peso
     document.getElementById('tamanho').value =  product.tamanho
     document.getElementById('marca').value =  product.marca
     document.getElementById('modelo').value =  product.modelo
     document.getElementById('quantia').value =  product.quantia
     document.getElementById('descricao').value =  product.descricao
     document.getElementById('cor').value =  product.cor
     document.getElementById('segue').value =  product.segue
     document.getElementById('categoria').value =  product.categoria
     document.getElementById('imagem').value =  product.imagem
     document.getElementById('nome').dataset.index = product.index
 }

const editProduct = (index) => {
    const product = readProduct()[index]
    product.index = index
    fillFields(product)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const product = readProduct()[index]
            const response = confirm(` ${product.name}`) //Deseja realmente excluir o produto
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

updateTable()

 //Eventos
document.getElementById('cadastrarProduto')
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
    .addEventListener('click', closeModal);


    const products = "",
	makes = "",
	models = "",
	types = "";

for (const i = 0; i < data.length; i++) {
	const make = data[i].make,
		model = data[i].model,
		type = data[i].type,
		price = data[i].price,
		rawPrice = price.replace("$",""),
		newPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + newPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Make: " + make + "<br />Model: " + model + "<br />Type: " + type + "<br />Price: " + price + "</div></div>";
	
	//create dropdown of makes
	if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
		makes += "<option value='" + make + "'>" + make + "</option>";
	}
	
	//create dropdown of models
	if (models.indexOf("<option value='" + model+"'>" + model + "</option>") == -1) {
		models += "<option value='" + model + "'>" + model + "</option>";
	}
	
	//create dropdown of types
	if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
		types += "<option value='" + type + "'>" + type + "</option>";
	}
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-model").append(models);
$(".filter-type").append(types);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var make = $(this).data("make").toLowerCase(),
			model = $(this).data("model").toLowerCase(),
			type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});