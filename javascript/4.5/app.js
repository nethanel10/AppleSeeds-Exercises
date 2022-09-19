function leapyear(year){
if(year%4==0&&year%100!==0 ||year%400==0){
    console.log("the year is leap");
}
else{
    console.log("the year isnt leap");
}
}
leapyear(2012);