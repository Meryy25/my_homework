class BankAccount
{
    constructor(owner, balance = 0){
      this.owner = owner;
      this.balance = balance;
    }

    deposit(amount){
      this.balance += amount;
      console.log(`${this.owner} deposited ${amount}`);
    }

    withdraw(amount){
      if(amount > this.balance){
        console.log("Insufficient funds");
      }else{
        this.balance -= amount;
        console.log(`${this.owner} withdrew ${amount}`);
      }
    }

    all_balance(){
      return this.balance;
   }
}

const res = new BankAccount("Mery", 300);
res.deposit(30);
res.withdraw(10);
console.log("Balance ", res.all_balance());
