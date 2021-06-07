let Product = require("../controllers/Product").Product;
let ProductCore = new Product();

module.exports = {
    async getProducts(request,reply){

        let products = await ProductCore.getAllProduct();
        let jsonResponse = {
            data : products,
            success: true
        }
        
        return reply.status(200).send(jsonResponse);
    },
    async getProductByLocation(request,reply){
        let location = request.params.location;
        let products = await ProductCore.getProductsByLocation(location);
        let jsonResponse = {
            data : products,
            success: true
        }
        return reply.status(200).send(jsonResponse);
    },
    async getAllLocationsOfDatabaseProduct(request,reply){
        let location = request.params.location;
        let products = await ProductCore.getAllLocationsOfDatabaseProduct();
        let jsonResponse = {
            data : products,
            success: true
        }
        return reply.status(200).send(jsonResponse);
    }
}
