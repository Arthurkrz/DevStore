const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const products = data.results;
        const productlist = document.createElement('ul');
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = product.title;
            productlist.appendChild(listItem);
        });
        document.getElementById('product-list').appendChild(productlist); 
        })
        .catch(error => {
            console.error('Erro ao obter os dados:', error);
    });