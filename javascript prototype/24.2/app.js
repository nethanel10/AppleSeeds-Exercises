function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }
  var  pok1= new Pokemon("ab")
  var  pok2= new Pokemon("cd")
  var  pok3= new Pokemon("ef")
    Pokemon.prototype.callPokemon=function(){
    console.log(`I choose you ${this.name}`);
  }
 pok1.callPokemon()
  pok2.callPokemon()
 pok3.callPokemon()
// Pokemon.prototype.attack=function(attacknumber){
//      this.pokemonAttackList=[attacknumber];
// for ( let i = 0; i < this.pokemonAttackList.length; i++) {
//    this.pokemonAttackList[i]=this.attacknumber
//   }


// }
// console.log(pok1.attack(2));