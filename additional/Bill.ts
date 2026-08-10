// Importing members

import { GST_RATE, DELIVERY_CHARGE } from "./Constants.js";
import { Product } from "./Product.js";

// Exporting class

export class Bill {

    constructor(
        public product: Product
    ) {}

    // Calculate bill
    public calculateBill(): number {

        const amount = this.product.price * this.product.quantity;
        const gst = amount * GST_RATE;

        return amount + gst + DELIVERY_CHARGE;
    }

    // Print bill
    public printBill(): void {

        console.log("-------- BILL --------");
        console.log("Product :", this.product.productName);
        console.log("Price :", this.product.price);
        console.log("Quantity :", this.product.quantity);
        console.log("Total Bill :", this.calculateBill());
        console.log("----------------------");

    }
}