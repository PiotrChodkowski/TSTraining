import {config} from "../configs/base";
import { ProductList } from "../interface/prodcut-list.interface";

class ProductService {
    async getProducts(): Promise<ProductList> {
        const response = await fetch(config.productsUrl);
        return response.json();
    }
}

export const Products = new ProductService();