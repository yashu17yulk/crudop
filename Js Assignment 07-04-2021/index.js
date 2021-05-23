var userdetails = {
    u_id: 121,
    name: "Samuel",
    user_email: "samuel123@gmail.com",
    detail: function (uid) {
        if (this.u_id == uid) {
            console.log(
                "Email of user with id " + this.u_id + " is " + this.user_email
            );
        } else {
            console.log("Enter the correct ID");
        }
    },
};
userdetails.detail(121);



////////////////// using objects with functions
var bankingDetails = {
    amount: 10000,
    balance: 10000,

    checkBalance: function (bl) {
        bl = this.balance;
        console.log("Total Balance is --->  " + bl);
    },

    amountDeposited: function (dl) {
        this.balance = dl + this.balance;
        console.log("Balance after Deposited is --->  " + this.balance);
    },

    amountWithdrawl: function (wl) {
        this.balance = this.balance - wl;
        console.log("Balance after Withdrawl is --->  " + this.balance);
    },
};

bankingDetails.checkBalance();
bankingDetails.amountDeposited(5000);
bankingDetails.amountWithdrawl(15000);


//////////////With using Class and Constructor Objects
class bankingDetailss {
    constructor(amt, bal) {
        this.amount = amt;
        this.balance = bal;
    }

    getbalancedetails(bala) {
        bala = this.balance;
        console.log("Total Balance is --->  " + bala);
    }

    getDeposit(dp, wd) {
        dp = this.balance + dp;
        wd = dp - wd;
        console.log("Total Balance after Depositing is --->  " + dp);
        console.log("Total Balance after Withdrawl is --->  " + wd);
    }

    getWithdrawl() {
        this.getDeposit(10000, 5000);
    }
}

var bd = new bankingDetailss(10000, 10000);
bd.getbalancedetails();
bd.getWithdrawl();
