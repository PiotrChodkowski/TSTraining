import { Product } from "../interface/product.interface";
import {log} from "../decorators/log.decorator";
import {Component} from "./comp";

export class ProductComponent extends Component {
    @log

    template (product: Product) {
        return (`
            <div class="card product">
                <img src="${product.imageUrl}" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <button class="btn btn-primary">
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        `);
    }
}
