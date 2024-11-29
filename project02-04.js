/*      California Institute of Applied Technology
       Web Development with JavaScript, jQuery, Part2

       JaveScript for Web Warriors
       Week 1 - Hands-On Project
       Coding Challenge: Project 2-4 
   
       Author: Vanessa Adams
       Date: 11/26/2024 @8:54pm
       Filename: project02-04.js
*/
       

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

// Constants for item prices and sales tax
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function to calculate total cost
function calcTotal() {
    // Initialize cost variable
    let cost = 0;

    // Check for items are selected
    const buyChicken = document.getElementById("chicken").checked;
    const buyHalibut = document.getElementById("halibut").checked;
    const buyBurger = document.getElementById("burger").checked;
    const buySalmon = document.getElementById("salmon").checked;
    const buySalad = document.getElementById("salad").checked;

    // Calculate the cost based on the selected items
    cost += buyChicken ? CHICKEN_PRICE : 0;
    cost += buyHalibut ? HALIBUT_PRICE : 0;
    cost += buyBurger ? BURGER_PRICE : 0;
    cost += buySalmon ? SALMON_PRICE : 0;
    cost += buySalad ? SALAD_PRICE : 0;

    // Update the food total
    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

    // Calculate the tax and total cost
    const tax = cost * SALES_TAX;
    const totalCost = cost + tax;

    // Update tax display
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    
    // Update the total bill display
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

    // Add event listeners to checkboxes
    document.getElementById("chicken").addEventListener("click", calcTotal);
    document.getElementById("halibut").addEventListener("click", calcTotal);
    document.getElementById("burger").addEventListener("click", calcTotal);
    document.getElementById("salmon").addEventListener("click", calcTotal);
    document.getElementById("salad").addEventListener("click", calcTotal);