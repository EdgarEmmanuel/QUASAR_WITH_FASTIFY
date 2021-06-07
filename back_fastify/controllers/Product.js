let {connection,getConnectionInstance} = require("../src/index.ts");
let { Product } = require("../src/entity/Product.ts");
let {getRepository} = require("typeorm");
class ProductCore{


    async getAllProduct(){
        let productRepository = getRepository(Product);
        let products = await productRepository.find();
        return products;
    }

    async getAllLocationsOfDatabaseProduct(){
        let productRepository = getRepository(Product);
        let products = await productRepository.
        createQueryBuilder("products")
        .select("products.location_name")
        .distinct(true)
        .getMany();
        return products;
    }

    async getProductsByLocation(location){
        let productRepository = getRepository(Product);
        let products = await productRepository.find({location_name:location});
        return products;
    }


}

module.exports.Product = ProductCore;