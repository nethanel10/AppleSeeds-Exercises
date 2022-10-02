data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },

{
name: "Thomas",
birthday: "1-10-1990",
favoriteFoods: {
meats: ["bird", "rooster"],
fish: ["salmon"],
},
},
{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["hamburgers", "lamb"],
fish: ["anchovies", "tuna"],
},
},
]
//1
const namesfromarr=(arr)=>{
    const namesarr=[];
    arr.forEach((e)=>{
namesarr.push(e.name)
    });
    return namesarr;
}
console.log(namesfromarr(data));
//2
const bornbefore90=(arr)=>{
    const before90sarr=[];
    arr.forEach((e)=>{
if(parseInt(e.birthday.split("-")[2])<1990){
before90sarr.push(e);
}
    });
    return before90sarr;
}
console.log(bornbefore90(data))
//3
// const foodobjectfromar=(arr)=>{
//     let foodobj={}
//     arr.forEach((e)=>{
//         let chickenarr=e.
//     }
// }
const foodObjFromArr = (arr) => {
    let foodObj = {};
    arr.forEach((element) => {
        let meatsArr = element.favoriteFoods.meats;
        let fishArr = element.favoriteFoods.fish;
        let meatsAndFishArr = meatsArr.concat(fishArr);
        for (let i = 0; i < meatsAndFishArr.length; i++) {
            let prop = meatsAndFishArr[i];
            if (foodObj[prop] !== undefined) {
                foodObj[prop] += 1;
            } else {
                foodObj[prop] = 1;
            }
        }
    });
    return foodObj;
};
console.log(foodObjFromArr(data))
