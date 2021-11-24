function Invoice(subTotal) {
    this.taxRate = 0.15;
    this. subTotal = subTotal;

    this.total = () => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
    }
}

const inv = new Invoice(500);
inv.total();