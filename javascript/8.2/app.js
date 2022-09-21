const mycontry={
    contry:"Finland",
    capital:"Helsinki",
    language:"Finnish",
    population:6000000,
    negigbors:negigbors=[0],
    
    
};
function description(){
console.log(`${this.contry} has ${this.population} milion people their mother tongue is ${this.language} they have ${this.negigbors} contries and capital called ${this.capital}`)
}
mycontry.description=description;
mycontry.description();

function checkIsland(Isiland){
    (this.negigbors==0) ? Isiland=true : Isiland=false;
    console.log(Isiland)

}
mycontry.checkIsland=checkIsland;
mycontry.checkIsland();


