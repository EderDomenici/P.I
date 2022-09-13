const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
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
		$(".prod").show();
	} else {
		$(".prod").hide();
		$(".prod").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".prod").hide();
	$(".prod").each(function() {
		var make = $(this).data("name").toLowerCase(),
			model = $(this).data("model").toLowerCase(),
			type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});
