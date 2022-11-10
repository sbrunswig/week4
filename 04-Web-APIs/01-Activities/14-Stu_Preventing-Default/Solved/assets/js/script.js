let tipEl = document.querySelector('#tip-percentage');
let totalEl = document.querySelector('#total');
let submitEl = document.querySelector('#submit');

function calculateTip(total, tipPercentage) {
  let roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  // Prevent default action
  event.preventDefault();
  // Store tip and total calculations in letiables
  let tipPercentage = tipEl.value * 0.01;
  let total = totalEl.value;
  let tipAmount = calculateTip(total, tipPercentage);
  let newTotal = calculateTotal(total, tipAmount);
  // Update HTML with tip and total
  document.querySelector('#tip-amount').textContent = tipAmount;
  // Use toFixed() to limit to two decimal places
  document.querySelector('#new-total').textContent = newTotal.toFixed(2);
}

// Add listener to submit element
submitEl.addEventListener('click', addTip);
