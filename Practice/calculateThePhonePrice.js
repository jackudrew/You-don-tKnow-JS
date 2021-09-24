var bankAmount = 99.99;
var phoneCost = 100.00;

// loop
if (bankAmount < phoneCost) {
    console.log("You don't have enough money to purchase the phone")
} else {
    console.log("Your phone is ready!")
}

// Example of "for loop"
    // Начало   // Условие  //Шаг
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }
  
  
  const SPENDING_THRESHOLD = 200;
  const TAX_RATE = 0.08;
  const PHONE_PRICE = 99.99;
  const ACCESSORY_PRICE = 9.99;

  var bank_balance = 303.91;
  var amount = 0;

  function calculateTax(amount) {
        return amount * TAX_RATE;
  }

  function formatAmount(amount) {
        return "$" + amount.toFixed(2);
  }

  // keep buying the phone while you still have the money
  while (amount < bank_balance) {
      // buy a new phone!
      amount = amount + PHONE_PRICE;

      // can we afford the accessory?
      if (amount < SPENDING_THRESHOLD) {
          amount = amount + ACCESSORY_PRICE;
      }
  } 

  // don't forget to pay the government, too
  amount = amount + calculateTax(amount);

  console.log(
      "Your purchase: " + formatAmount(amount)
  );
  // Your purchase: $334.76

  // can you still actually afford this purchase?
  if (amount > bank_balance) {
      console.log(
          "You can't afford this purchase. :("
      )
  }
  // you can't afford this purchase


  
