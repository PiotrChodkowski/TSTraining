import "../index.html";
import "../main.css";
import { ProductComponent } from "./components/component";
import { MenuComponent } from "./components/menu";
import { Products } from "./services/products.service";
// import {Products} from "./services/fake-product-service"
// import { Product } from "./interface/product.interface";

async function main () {
    console.log("main");

    const $app = document.querySelector<HTMLDivElement>("#app")!;
    const products = await Products.getProducts();

    const product1 = new MenuComponent();
    product1.render($app);

    products.forEach((product) => {
        const product1 = new ProductComponent();
        product1.setData(product);
        product1.render($app);
    });
}

main().catch((err) => console.log(err));
