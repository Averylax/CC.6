console.log(`CC_6.js has succesfully been uploaded!`)
// Task 1 - Business Profit Calculations
function calculateProfit(costPrice, sellingPrice, UnitsSold) {
    let profit = (sellingPrice - costPrice) * UnitsSold;
    return `Total Profit: $${profit}`;
}
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));
// Task 1 - End

// Task 2 - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    return `Sales Tax is: $${salesTax}`;
    };
console.log(calculateSalesTax(100, 0.07));
console.log(calculateSalesTax(500, 0.1));
// Task 2 - End

// Task 3 - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) =>{
    const bonusRates = {
        "Excellent": 0.2,
        "Good": 0.1,
        "Average": 0.05
    };

    let bonusPercentage = bonusRates[performanceRating] || 0;
    if (bonusPercentage === 0) return "No Performance Rating";

    let bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`;
};
console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good"));
console.log(calculateBonus(6000, "Average"));
// Task 3 - End

// Task 4 - Subscription Pricing Module

// Task 4 - End

// Task 5 - Currency Conversion

// Task 5 - End

// Task 6 - Higher-Order Function for Bulk Orders

// Task 6 - End

// Task 7 - Business Expense Tracker

// Task 7 - End

// Task 8 - Employee Promotion Evaluation

// Task 8 - End
