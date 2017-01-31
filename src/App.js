App({
  
  loanAmount: 200000,
  loanAmountFocus: false,
  
  totalYears: 30,
  totalYearsFocus: false,
  
  monthlyPayment: 555.56,
  monthlyPaymentFocus: false,

  autorun: [
    function() {
      // Watch for changes in Loan Amount
      const loanAmount = this.loanAmount();
      // Only do this if the user is changing Loan Amount
      if (!this.loanAmountFocus()) return;
      const totalYears = this.totalYears.value;
      // We "decree" that Total Years is more important than Monthly Payment
      // And thus we only update Monthly Payment based on Total Years
      this.monthlyPayment( (loanAmount / ( totalYears * 12 )).toFixed(2) );
    },
    function() {
      // Watch for changes in Total Years
      const totalYears = this.totalYears();
      // Only do this if the user is changing Total Years
      if (!this.totalYearsFocus()) return;
      const loanAmount = this.loanAmount.value;
      // We "decree" that Loan Amount is more important than Monthly Payment
      // And thus we only update Monthly Payment based on Loan Amount
      this.monthlyPayment( (loanAmount / ( totalYears * 12 )).toFixed(2) );
    },
    function() {
      // Watch for changes in Monthly Payment
      const monthlyPayment = this.monthlyPayment();
      // Only do this if the user is changing Monthly Payment
      if (!this.monthlyPaymentFocus()) return;
      const loanAmount = this.loanAmount.value;
      // We "decree" that Loan Amount is more important than Total Years
      // And thus we only update Total Years based on Loan Amount
      this.totalYears( (loanAmount / ( monthlyPayment * 12 )).toFixed(2) );
    }
  ],
  render(){
    <div>
      Loan Amount: <input b="value: loanAmount, focus: loanAmountFocus"/><br />
      Total Years: <input b="value: totalYears, focus: totalYearsFocus"/><br />
      Monthly Payment: <input b="value: monthlyPayment, focus: monthlyPaymentFocus"/><br />
      <button b="click: reset">Reset Values</button>
    </div>
  }
});
