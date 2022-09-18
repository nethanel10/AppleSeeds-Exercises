let options = { weekday: 'long'};
const date = new Date('january 31, 2021 23:15:30');

let day=new Intl.DateTimeFormat('en-US', options).format(date);
let options1 = { month: 'long'};
let month=new Intl.DateTimeFormat('en-US', options1).format(date)
let year=date.getFullYear();
let monthinnumbers=date.getDate();




console.log(`today is ${day} the ${monthinnumbers} of ${month} ${year}`)