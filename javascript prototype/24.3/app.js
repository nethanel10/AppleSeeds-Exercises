Array.prototype.myFilter = function(callback){
    var newArray = [];
   
    for(let i=0;i<this.length;i++){
      if(callback(this[i])===true){
        newArray.push(callback(this[i]));
      }
    }
    return newArray;
  
}
let arr = ["hello", "John", "Tom", "Eduard", "Alien", "Till"];

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if ( true == callback(this[i], i, this)) {
      return {element:this[i],index:i,array:this};
    }
  }
};
let {element,index,array} = arr.myFind((element) => element[0] === "T");

console.log(`This is ${element} in index of ${index} in array ${array}`);
