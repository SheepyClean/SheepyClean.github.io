/* contents of "stock" below can be updated to update website's Current Scents list */
const stock = ["Almond", "Geranium Rose", "Lavender", "Peppermint", "Orange Spice"];
let ul = document.getElementById("stock-scents");
let current;
let li;

for(let i=0;i<stock.length;i++){
    current = stock[i];
    li = document.createElement("li");
    li.innerHTML = current;
    document.getElementById("stock-scents").appendChild(li);
}