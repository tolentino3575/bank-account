describe('Account', function() {
  it("will display name and initial amount", function () {
    var testAccount = new Account("Erik", 10);
    expect(testAccount.userName).to.equal("Erik");
    expect(testAccount.deposit).to.equal(10);
  });
});
