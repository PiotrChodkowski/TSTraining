import products from "../../../shared/fakes/products.json";
import { ProductList } from "../../../shared/interface/prodcut-list.interface";

class FakeProductService {
    async getProducts (): Promise<ProductList> {
        return products;
    }
}

export const Products = new FakeProductService();
