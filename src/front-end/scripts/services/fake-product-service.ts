import products from "../../../shared/fakes/products.json";
import { ProductList } from "../interface/prodcut-list.interface.js";

class FakeProductService {
    async getProducts(): Promise<ProductList>{
        return products;
    }
}

export const Products = new FakeProductService();