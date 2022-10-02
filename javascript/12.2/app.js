const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }
    //1
function getCandy(candyStore, id){
  return candyStore.candies.find((candy)=>candy.id===id);
  }
  console.log(getCandy(candyStore,"5hd7y"))
  //2
  function getPrice(candyStore, id){
    return getCandy(candyStore,id)?.price;
    }
    console.log(getPrice(candyStore,"as12f"))
    //3
    function addCandy(candyStore, id, name, price){
      candyStore.candies.push({id,name,price,amount: 1});
      }
      //4
      function buy(candyStore, id){
        const candy=getCandy(candyStore,id);
        candy.amount--;
        candyStore.cashRegister += candy.price;
        }