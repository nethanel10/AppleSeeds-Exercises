const arr=[1,2,3,4,5,6];
//1
function Max(items) {
    return items.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val > acc[0] ) ? val : acc[1]
        return acc;
    },[]);
}
console.log(Max(arr))

//2
function getOddEven(nums) {
    return {
      even: nums.filter(num => num % 2 == 0).reduce((acc, num) => acc + num),
    };
  }
  console.log(getOddEven(arr))
//3
const avg=(...arr1)=>
arr.reduce((n1,n2)=>n1+n2,0) / arr1.length;
console.log(avg(...arr))