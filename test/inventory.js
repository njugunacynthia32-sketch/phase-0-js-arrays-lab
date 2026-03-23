let products =["laptop", "phone","headphones","monitor"];
function showFirstProduct(){
    console.log(products[0]);
}
function addProduct(productName) {
    products.push(productName);}
    function updateProduct(index, newName){
        if (index >0 && index <products. length) {
            products[index] = newName;
        }
    }
else{
console.log("invalid index");
}
function removeLastProduct(){
    products,pop();
}



showFirstProduct();
    addProduct("tablet");
    updateProduct("smartphone");
    removeLastProduct();
    console.log(products);


