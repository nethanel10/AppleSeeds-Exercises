//1
const  doubleValues= (arr) => arr.map(item=>item*2);
console.log(doubleValues([1,2,3,4,5,6]))
//2
const onlyEvenValues=(arr)=>arr.map(item=>{
if(item%2==0)return item;
}).filter(item=>item!=undefined)
console.log(onlyEvenValues([1,2,3,4,5,6]))
//3
const showFirstAndLas=(arr)=>[arr[0].toString(),arr[arr.length-1].toString()]
console.log(showFirstAndLas ([1,2,3,4,5,6]))
//4
const voelCount=(str)=>{
    const voels=["a","e","i","o","u"];
    const obj={};
    voels.forEach((voel)=>(obj[`${voel}`]=0));
    str.toLowerCase().split("").forEach((letter)=>{
        if(voels.includes(letter)){
            obj[`${letter}`]++;

        }
    });
    return obj;
};
console.log(voelCount("aekkkk"))

//5
const capitalize= (str) =>
str.split("").map((ltr)=>ltr.toUpperCase()).join("")
console.log(capitalize("hhjagj"))
//6
const shiftLetters=(str)=>{
    const arr=str.split("");
    const newarr=[];
    arr.forEach((letter)=>{
const charindex=letter.charCodeAt(0);
newarr.push(String.fromCharCode(charindex-1))
    });
    return newarr.join("")
}
console.log(shiftLetters("agggg"))
//7
const swapCase= (str) =>str.split("").map(capitalize).join(" ");
console.log(swapCase("skksk"))//make spae in the capitals letter





