console.log(`CC_6.js has succesfully been uploaded!`)

// Task 1 - Business Profit Calculations
function calculateProfit(costPrice, sellingPrice, UnitsSold) { // Calculate profit by using Cost Price, Selling Price, and Units Sold
    let profit = (sellingPrice - costPrice) * UnitsSold; // Calculates profit by subtracting selling price by cost price and then multipling it by the units sold
    return `Total Profit: $${profit}`; // Diplays the profit
}
console.log(calculateProfit(20, 30, 100)); // Cost Price: $20, Selling Price $30, Units Sold: 100
console.log(calculateProfit(50, 70, 200)); // Cost Price: $50, Selling Price $70, Units Sold: 200
// Task 1 - End

// Task 2 - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) { // Creates a function to calculate sales tax by using amount and tax rate
    let salesTax = amount * taxRate; // Sales tax is amount times tax rate
    return `Sales Tax is: $${salesTax.toFixed(2)}`; // Displays tax rate
    };
console.log(calculateSalesTax(100, 0.07)); // $100, 7% tax rate
console.log(calculateSalesTax(500, 0.1)); // $500, 10% tax rate
// Task 2 - End

// Task 3 - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => { // Calculates bonus
    const bonusRates = { // Stores different bonus rates by levels
        "Excellent": 0.2, // 20% bonus
        "Good": 0.1, // 10% bonus
        "Average": 0.05 // 5% bonus
    };

    let bonusPercentage = bonusRates[performanceRating] || 0;
    if (bonusPercentage === 0) return "No Performance Rating"; // If there is no rating it displays "No Performance Rating"

    let bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`; // Calculates bonus amount
};
console.log(calculateBonus(5000, "Excellent")); // $5,000 with a Excellent rating
console.log(calculateBonus(7000, "Good")); // $7,000 with a Good rating
console.log(calculateBonus(6000, "Average")); // $6,000 with a Average rating
// Task 3 - End

// Task 4 - Subscription Pricing Module
const calculateSubscriptionCost = (plan, months, discount = 0) => { // Calculates subscription cost given the type of subscription and months and gives a discount based on the amount of months subscribed
    const planCosts = {
        "Basics": 10, // Basic plan $10 a month
        "Premium": 20, // Premium plan $20 a month
        "Enterprise": 50 // Enterprise plan $50 a month
    };

    let monthlyCost = planCosts[plan]; // Calculates the cost of the plan based on the tier level
    if (monthlyCost === undefined) {
        return "Invalid Plan"; // If there is no tier level then "Invalid Plan" shows
    }
    let totalCost = monthlyCost * months; // Total cost is calculated by monthly cost times the months in use
    totalCost -= (totalCost * (discount / 100)); // The total cost is dicounted for the amount of months in use
    return `Total Cost: $${totalCost}`; // Displays the final cost with the discount
};
console.log(calculateSubscriptionCost("Basics", 6, 10)); // Basic tier $10, 6 months, discount 10%, total is $54 = ($60 - $60(10%))
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Premium tier $20, 12 months, discount 0%, total is $240 = 12 * 20
// Task 4 - End

// Task 5 - Currency Conversion
function convertCurrency(amount, exchangeRate) { // creates a function to calculate currency 
    let convertedAmount = amount * exchangeRate; // converted amount is amount * the exchange rate 
    return `Converted Amount: $${convertedAmount.toFixed(2)}`; // displays the converted amount with 2 decimals
}
console.log(convertCurrency(100, 1.1)); // $100 with a 1.1 rate is $110
console.log(convertCurrency(250, 0.85)); // $250 with a .85 rate is $212.5
// Task 5 - End

// Task 6 - Higher-Order Function for Bulk Orders
let orders = [200, 600, 1200, 450, 800]; // Array of numbers
function applyBulkDiscount(orders, discountFunction) { // Applies a discount to the amounts above $500
    return orders.map(discountFunction) // Maps the discount to orders above $500
}
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // the "?" is a if-else statement, if the amoumt is above $500 apply discount
console.log(discountedOrders); // displays the final amount 
// Task 6 - End

// Task 7 - Business Expense Tracker

// Task 7 - End

// Task 8 - Employee Promotion Evaluation

// Task 8 - End
