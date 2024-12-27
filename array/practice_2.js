// To apply 10% discount in each priceItem of element
let priceItem = [250, 645, 300, 900, 50];

let i;
let val = [];
let price = [];
for(i = 0; i < priceItem.length; i++){
    val[i] = priceItem[i]*10/100;
    price[i] = priceItem[i] - val[i];
    console.log(`Discount on element ${i} is ${price[i]}`);
}
