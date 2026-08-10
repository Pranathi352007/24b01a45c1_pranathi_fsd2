// Importing class and interface

import { Bill } from "./Bill.js";
import { Product } from "./Product.js";

// Creating Product object

const item: Product = {
    productName: "Laptop",
    price: 50000,
    quantity: 2
};

// Creating Bill object

const bill = new Bill(item);

// Printing Bill

bill.printBill();