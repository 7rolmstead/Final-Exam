class Cart{
  //What is the first part of every class? Type it below.
  constructor(il,iq){
  this.itemList = il
  this.itemQuantity = iq
  }
  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = this.itemList * this.itemQuantity;
    return total;
  }
  subCart(days){

  }
}
