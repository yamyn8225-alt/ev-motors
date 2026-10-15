
let store = {
  name: "TechZone",
  discount: 10,

  products: [
    {
      id: 1,
      name: "Laptop",
      price: 20000,
      stock: 5,
      details: {
        brand: "Dell",
        warranty: 2,
      },
    },
    {
      id: 2,
      name: "Phone",
      price: 10000,
      stock: 3,
      details: {
        brand: "Samsung",
        warranty: 1,
      },
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      stock: 0,
      details: {
        brand: "Sony",
        warranty: 1,
      },
    },
  ],
};
function searchProduct(productName) {
  for (let i = 0; i < store.products.length; i++) {
    if (productName === store.products[i].name) {
      return `${store.products[i].name} - ${store.products[i].price} - ${store.products[i].details.brand}`;
    }
  }

  return "Product Not Found";
}
function buyProduct(productName, quantity, budget) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return "Invalid Quantity";
  }
  for(let x=0; x<store.products.length; x++){
    if(productName===store.products[x].name){

      if(quantity>store.products[x].stock){
        return "Out of Stock";
      }
      let total=quantity*store.products[x].price
      let discount = total * (store.discount / 100);
      if(total>budget){
        return "Over Budget";
      }
      if (total >= 20000) {
        let discount = total * (store.discount / 100);
        total = total - discount;
      }
    store.products[x].stock = store.products[x].stock - quantity;
      return `${store.products[x].name} - Total: ${total}`;
    }
  }
     return "Product Not Found";
}
console.log(searchProduct("Phone"));
// Phone - 10000 - Samsung

console.log(searchProduct("Tablet"));
// Product Not Found

console.log(buyProduct("Laptop", 2, 50000));
// Laptop - Total: 36000

console.log(store.products[0].stock);
// 3

console.log(buyProduct("Phone", 5, 60000));
// Out of Stock

console.log(buyProduct("Phone", 1, 5000));
// Over Budget

console.log(buyProduct("Phone", 0, 50000));
// Invalid Quantity

console.log(restockProduct("Headphones", 4));
// New Stock: 4

console.log(store.storeInfo());
// TechZone - Discount: 10%

console.log(updatedLaptop.price);
// 18000

console.log(store.products[0].price);
// 20000