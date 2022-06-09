//Function for Checking Odd and Even Numbers
function oddEvenChecker(num) {
	typeof num === "number"
	? (num % 2 === 0 ? console.log("The number is even") : console.log("The number is odd"))
	: alert("Invalid Input.")

	budgetChecker(num);
};

//Function to check if the budget is over on not
function budgetChecker(budget) {
	typeof budget === "number" 
	? (budget > 40000 ? console.log("You are over the budget") : console.log("You have resources left."))
	: alert("Invalid Input.");
};

//Input with the corresponding number
oddEvenChecker(10000);
