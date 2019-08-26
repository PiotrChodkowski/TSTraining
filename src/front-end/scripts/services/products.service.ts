import {config} from "../configs/base";
import { ProductList } from "../interface/prodcut-list.interface";
import makeRequest from "../../../make-request/";

class ProductService {
    async getProducts() {
        return makeRequest<ProductList>(config.productsUrl)
    }
}

export const Products = new ProductService();