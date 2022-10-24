const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }

    }
    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){//the worng that missed the name of object before the function 
    return "I am stronger";
    } else return "You are stronger";
    }
    whoIsStronger(hero.getStrength);//this the worng on the code becase the function do not bind whoIsStronger.bind(hero))
 
console.log(whoIsStronger(hero.getStrength.bind(hero)))