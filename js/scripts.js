function Account(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}

Account.prototype.deposits = function(deposit) {
  return this.initialDeposit + deposit;
}

Account.prototype.withdrawls = function(withdrawl) {
  return this.initialDeposit - withdrawl;
}



$(function () {
$("#signup").submit(function (event) {
  var name = $("#yourName").val();
  var balance = parseInt($("#initialDeposit").val());
  var newAccount = new Account(name, balance);
  console.log(newAccount);
  $(".balance").text(newAccount.initialDeposit);
  $(".accountName").text(newAccount.userName);
  event.preventDefault();

  $("#bankDeposit").click(function(){
    var deposit = parseInt($("#deposit").val());
    var newDeposit = (newAccount.initialDeposit + deposit);
    newAccount.initialDeposit = newDeposit;
    $(".balance").text(newDeposit);
  })

  $("#bankWithdraw").click(function(){
    var withdraw = parseInt($("#withdraw").val());
    var newDeposit = (newAccount.initialDeposit - withdraw);
    newAccount.initialDeposit = newDeposit;
    $(".balance").text(newDeposit);
  })
 })
})
