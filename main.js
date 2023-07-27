
let productsToDisplay = [];
let cart = [];
function getProductData(event){
    const productCategory = event.target.name;
    const allProducts = JSON.parse(sessionStorage.getItem('products'));

    if(!productCategory){
        productCategory = "apparel";
    }

    return allProducts[productCategory];
}

function addToCard(product){
    const purchasedProduct = productsToDisplay.find((productItem)=>productItem.id === product.id);
    if(purchasedProduct.noOfProductsAvailable >= 1){
        purchasedProduct.noOfProductsAvailable -= 1;
        cart.push(purchasedProduct);
    }
}


