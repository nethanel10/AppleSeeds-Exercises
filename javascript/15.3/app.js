function getSumOfEven(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum=sum+arr[i]
            }
    }
    return sum;
   // return arr[2] + arr[4] + arr[6] + arr[8] +    arr[10];
    }
    const res=getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
    console.log(res)
    //1 return arr[2] + arr[4] + arr[6] + arr[8] +    arr[10];
    //2 no for loop that over to arr 
    //3. node js 

