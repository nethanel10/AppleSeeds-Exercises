const people = ["Greg", "Mary", "Devon", "James"];//1
let people2=people.slice()
let first;
 first=people2.shift();//2
console.log(people2);
let seconde= people2.splice(2);//3
let third=people2.unshift("Matt") //4
let four=people2.push("nethanel")//5
    
console.log(people2);
let five;//6
for(let i=0; i<=1;i++){
 five = people2.splice(1,i);
}

console.log(people2);
let sex=people2.slice()
let sev1=people2.slice(1);
console.log(sev1)
console.log(people)
console.log(people2)

console.log(people.indexOf("Mary"));//8
console.log(people.indexOf("foo"));//9
people.splice(2,1,'eli');//10
people.splice(3,2,'ari');//10
people.splice(4,3,'james');//10






console.log(people);

let withbob= people.slice()//11
console.log("Bob",withbob)//11

