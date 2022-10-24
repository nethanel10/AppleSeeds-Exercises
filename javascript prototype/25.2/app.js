const person = {
    name: 'nethanel',
    setTime(cb,num){
       setTimeout(cb,num)
    },
    printName(){
       console.log(`${this.name}`);
    },
    printNameAfterASecond(){
       
       this.setTime.call(this,this.printName.bind(person),1000)
       
    }
 }
 // myObj.printName()
 person.printNameAfterASecond()
 