console.log(`CC_6.js has succesfully been uploaded!`)
// Task 1 - Function Declaration
function calculateProfit(costPrice, sellingPrice, UnitsSold) {
    let profit = (sellingPrice - costPrice) * UnitsSold;
    return `Total Profit: $${profit}`;
}
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));
// Task 1 - End