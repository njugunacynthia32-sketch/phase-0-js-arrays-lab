let products = ["laptop", "phone", "headphones", "monitor"];
function logFirstProduct() {
    console.log(products[0]);
}
function addProduct(productName) {
    products.push(productName);
}
function updateProductName(index,newName) {
    products[index] =newName;
}
function removeLastProduct() {
    products.pop()
}
module.exports = {
    products,
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct,
};


