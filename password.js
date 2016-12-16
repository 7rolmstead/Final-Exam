class Password{
  //The first part of the class.
  constructor(pub,priv){
    this.publickey = pub
    this.privatekey = priv
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length >= 8 && this.publickey.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){
    if(this.privatekey.chaAt([4]&&[9]=="x")){
      return true;
    }
    else{
      return false;
    }
  }
  //Static function below this comment.
  makePrivateKey(){
    let key = [];
    let limit = 14;
    let group1 = "";
    let group2 = "";
    let group3 = "";
    for(c = 0;c < 4;c++){
      group1 += String(Math.floor(Math.random()*10));
      group2 += String(Math.floor(Math.random()*10));
      group3 += String(Math.floor(Math.random()*10));
    }
    return group1 + "-" group2 + "-" group3;
  }
}
