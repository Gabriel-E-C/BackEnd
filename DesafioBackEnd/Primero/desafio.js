class ProductManager {
    constructor(){
        this.products = [];
    };

    addProduct(title, descritpion, price, thumbnail,code, stock){
        let newID;

        if (!this.products.length){
            newID = 1
        } else {
            newID = this.products.length + 1 //Esta forma falla si se borran elementos del arreglo products
        };                                   // pero eso no es posible en el alcance de este Desafio 

        const newProduct = {
            id: newID,
            title,
            descritpion,
            price,
            thumbnail,
            code,
            stock
        };

        if ( this.products.some ((productCode) => productCode.code === newProduct.code)){
            console.log ("El valor de code esta repetido")
        } else {
            this.products.push (newProduct);
        };
        
    };

    getProducts(){
        return this.products;
    };

    getProductByID (productID){
        let productExist;

        productExist = this.products.find((product)=> product.id === productID);

        if (!productExist){
            return ("Not Found");
        } else {
            return productExist;
        };
    };
};

//const manejadorEventos = new ProductManager;
//console.log(manejadorEventos.getProducts());
//manejadorEventos.addProduct ("producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25);
//console.log(manejadorEventos.getProducts());
//manejadorEventos.addProduct ("producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25);
//console.log( manejadorEventos.getProductByID(2));
//console.log( manejadorEventos.getProductByID(1));
