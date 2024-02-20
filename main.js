function calculateTax(subtotal) {
  console.log("Running calculateTax function");
  const taxRate =  0.0875;
  let tax = subtotal * taxRate;
  console.log(tax);
  return tax;
}
function calculateTotal(subtotal, tax) {
  console.log("Running calculateTotal function");
  let total = subtotal + tax;
  console.log(total);
  return total;
}
function order(cost) {
  console.log("Running order function");
  let subtotal = document.querySelector("#subtotal").textContent;
  subtotal = parseInt(subtotal);
  subtotal+= cost;
  console.log(subtotal);
  let tax = calculateTax(subtotal);
  let total = calculateTotal(subtotal, tax);
  document.querySelector("#subtotal").textContent = subtotal;
  document.querySelector("#tax").textContent = tax;
  document.querySelector("#total").textContent = total;
}
document.querySelector("#img1").onclick = function() {
  order(16);
}
document.querySelector("#img2").onclick = function() {
  order(21);
}
document.querySelector("#img3").onclick = function() {
  order(12);
}






