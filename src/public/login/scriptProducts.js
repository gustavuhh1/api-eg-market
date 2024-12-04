/* eslint-disable no-undef */
const btnAdicionar = document.querySelector('#btnAdc');

btnAdicionar.addEventListener('click', () => {
    const results = document.querySelector('.resultGuide');
    results.innerHTML = '';

    const form = document.createElement('form');
    form.className = "resultsInput";

    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', 'nameProduct');
    labelNome.textContent = "Nome do Produto:";

    const inputNome = document.createElement('input');
    inputNome.name = "nameProduct";
    inputNome.id = "nameProduct";
    labelNome.appendChild(inputNome);


    const labelId = document.createElement('label');
    labelId.setAttribute('for', 'idProduct');
    labelId.textContent = "Id:";

    const inputId = document.createElement('input');
    inputId.name = "idProduct";
    inputId.id = "idProduct";
    labelId.appendChild(inputId);

    const button = document.createElement('button');
    button.textContent = "Adicionar Produto";

    form.append(labelNome, labelId, button);
    results.appendChild(form);
})

const btnEditar = document.querySelector('#btnEdit')

btnEditar.addEventListener('click', () => {
    const results = document.querySelector('.resultGuide');
    results.innerHTML = '';

    const form = document.createElement('form');
    form.className = "resultsInput";
    form.style.backgroundColor = 'var(--cor-secundaria)'

    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', 'nameProduct');
    labelNome.textContent = "Nome do Produto:";

    const inputNome = document.createElement('input');
    inputNome.name = "nameProduct";
    inputNome.id = "nameProduct";
    labelNome.appendChild(inputNome);


    const labelId = document.createElement('label');
    labelId.setAttribute('for', 'idProduct');
    labelId.textContent = "Id:";

    const inputId = document.createElement('input');
    inputId.name = "idProduct";
    inputId.id = "idProduct";
    labelId.appendChild(inputId);

    const button = document.createElement('button');
    button.textContent = "Procurar Produto";

    form.append(labelNome, labelId, button);
    results.appendChild(form);
})

const btnRemover = document.querySelector('#btnRemove');

btnRemover.addEventListener('click', () => {
    const results = document.querySelector('.resultGuide');
    results.innerHTML = '';

    const form = document.createElement('form');
    form.className = "resultsInput";
    form.style.backgroundColor = '#FF454C'

    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', 'nameProduct');
    labelNome.textContent = "Nome do Produto:";

    const inputNome = document.createElement('input');
    inputNome.name = "nameProduct";
    inputNome.id = "nameProduct";
    labelNome.appendChild(inputNome);


    const labelId = document.createElement('label');
    labelId.setAttribute('for', 'idProduct');
    labelId.textContent = "Id:";

    const inputId = document.createElement('input');
    inputId.name = "idProduct";
    inputId.id = "idProduct";
    labelId.appendChild(inputId);

    const button = document.createElement('button');
    button.textContent = "Remover Produto";

    form.append(labelNome, labelId, button);
    results.appendChild(form);
})

const listarProdutos = document.querySelector('#btnList');

async function displayProducts() {
    console.log(window.location.href)
    const href = window.location.href
    const path = window.location.pathname
    const domainUrl = href.replace(path, '')
    
    const apiUrl = `${domainUrl}/products/allProducts`
    const request = await fetch(apiUrl);
    const data = await request.json();
    const productList = document.querySelector('.productsDisplay')

    console.log(data)
    data.forEach(product => {
        const li = document.createElement('li');
        li.className = "product";

        const img = document.createElement('img');
        img.src = product.img_link;
        img.alt = "Foto";

        const productInfo = document.createElement('productInfo');
        productInfo.className = "productInfo";

        const h6 = document.createElement('h6');
        h6.textContent = product.name;

        const pPrice = document.createElement('p');
        pPrice.textContent = `Preço: R$ ${product.price}`

        const pId = document.createElement('p');
        pId.textContent = `Id: ${product.id}`;

        productInfo.append(h6, pPrice, pId);
        li.append(img, productInfo)
        productList.append(li);
    });    
}

listarProdutos.addEventListener('click', () => {
    displayProducts();
})