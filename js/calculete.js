document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalExpense = document.getElementById("total-expense");
  const totalBalance = document.getElementById("balance");

  const incomeField = document.getElementById("income");
  const incomeString = incomeField.value;
  const income = parseFloat(incomeString);

  const foodField = document.getElementById("food");
  const newfoodString = foodField.value;
  const food = parseFloat(newfoodString);

  const rentField = document.getElementById("rent");
  const rentString = rentField.value;
  const rent = parseFloat(rentString);

  const clothField = document.getElementById("clothes");
  const clothString = clothField.value;
  const clothe = parseFloat(clothString);

  if (food <= 0) {
    alert("give a Right money amount on food");
    expense = "NaN";
  }
  if (rent <= 0) {
    alert("give a Right money amount on rent");
    expense = "NaN";
  }
  if (clothe <= 0) {
    alert("give a Right money amount on clothe");
    expense = "NaN";
  }
  // step-4: add numbers to set the total deposit
  const expense = food + rent + clothe;
  // set the deposit total
  totalExpense.innerText = expense;

  const balance = income - expense;
  totalBalance.innerText = balance;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const savingAmount = document.getElementById("saving-amount");
  const remainAmount = document.getElementById("remaining-balance");
  const totalExpense = document.getElementById("total-expense");
  const totalBalance = document.getElementById("balance");
  const incomeField = document.getElementById("income");

  const saveField = document.getElementById("save");
  const saveString = saveField.value;
  const save = parseFloat(saveString);

  const foodField = document.getElementById("food");
  const newfoodString = foodField.value;
  const food = parseFloat(newfoodString);

  const rentField = document.getElementById("rent");
  const rentString = rentField.value;
  const rent = parseFloat(rentString);

  const clothField = document.getElementById("clothes");
  const clothString = clothField.value;
  const clothe = parseFloat(clothString);

  const incomeString = incomeField.value;
  const income = parseFloat(incomeString);

  const expense = food + rent + clothe;
  totalExpense.innerText = expense;

  const savee = (income / 100) * save;
  savingAmount.innerText = savee;

  

  const rmainbalence = income - expense - savee;
  remainAmount.innerText = rmainbalence;
  if(rmainbalence<=0){
    alert('ভাই তুই তো Balance এর চেয়ে বেশি Saving করবার চাস');
  }
});
