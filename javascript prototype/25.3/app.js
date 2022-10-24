const wonderWoman = {
    name: "Diana Prince"
    }
    const batman = {
    name: "Bruce Wayne"
    }
    const superHeroes = [wonderWoman, batman];
    function printName() {
        console.log(`my name is ${this.name}`);
        }
function printHeroes(heroes, printFunc) {
    heroes=[]
    heroes.push.apply(heroes,superHeroes);
for(let i=0;i<heroes.length;i++){
  printFunc=printName.call(heroes[i])
  }
 return printFunc;

    }
    printHeroes()
    