// FOOD ORDER SYSTEM

let customerName = prompt("Enter Customer Name");
let customerPhone = prompt("Enter Phone Number");
let customerCity = prompt("Enter City");

let menu = {
    burger: 120,
    pizza: 250,
    fries: 80,
    sandwich: 100,
    pasta: 180,
    coke: 50,
    juice: 70,
    iceCream: 90
};

let burgerQty = Number(prompt("Burger Quantity"));
let pizzaQty = Number(prompt("Pizza Quantity"));
let friesQty = Number(prompt("Fries Quantity"));
let sandwichQty = Number(prompt("Sandwich Quantity"));
let pastaQty = Number(prompt("Pasta Quantity"));
let cokeQty = Number(prompt("Coke Quantity"));
let juiceQty = Number(prompt("Juice Quantity"));
let iceCreamQty = Number(prompt("Ice Cream Quantity"));

let burgerTotal = menu.burger * burgerQty;
let pizzaTotal = menu.pizza * pizzaQty;
let friesTotal = menu.fries * friesQty;
let sandwichTotal = menu.sandwich * sandwichQty;
let pastaTotal = menu.pasta * pastaQty;
let cokeTotal = menu.coke * cokeQty;
let juiceTotal = menu.juice * juiceQty;
let iceCreamTotal = menu.iceCream * iceCreamQty;

let subTotal =
    burgerTotal +
    pizzaTotal +
    friesTotal +
    sandwichTotal +
    pastaTotal +
    cokeTotal +
    juiceTotal +
    iceCreamTotal;

let gst = subTotal * 0.05;

let deliveryCharge = subTotal >= 1000 ? 0 : 50;

let discount =
    subTotal >= 2000 ? subTotal * 0.15 :
    subTotal >= 1000 ? subTotal * 0.10 :
    0;

let finalBill = subTotal + gst + deliveryCharge - discount;

let payment = prompt("Payment Method (Cash / UPI / Card)");

let order = {
    customer: customerName,
    phone: customerPhone,
    city: customerCity,
    paymentMode: payment
};

let orderStatus = finalBill > 0 ? "Order Confirmed" : "Order Failed";

let receipt = `
====================================
         FOOD ORDER SYSTEM
====================================

Customer Name : ${order.customer}
Phone Number  : ${order.phone}
City          : ${order.city}

Burger Total   : ₹${burgerTotal}
Pizza Total    : ₹${pizzaTotal}
Fries Total    : ₹${friesTotal}
Sandwich Total : ₹${sandwichTotal}
Pasta Total    : ₹${pastaTotal}
Coke Total     : ₹${cokeTotal}
Juice Total    : ₹${juiceTotal}
Ice Cream Total: ₹${iceCreamTotal}

------------------------------------

Sub Total       : ₹${subTotal}
GST (5%)        : ₹${gst}
Delivery Charge : ₹${deliveryCharge}
Discount        : ₹${discount}

Final Bill      : ₹${finalBill}

Payment Method  : ${order.paymentMode}
Order Status    : ${orderStatus}

====================================
Thank You For Ordering!
====================================
`;

console.log(receipt);
alert(receipt);