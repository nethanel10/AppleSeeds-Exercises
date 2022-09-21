//const book={ not function 
  //  name:"lls",
   // author:"nethanel",
   // publishhingyear:1970,
   // numofpages:100,

//};
   //console.log(`The book ${book.name} was wirten by ${book.author} in the year ${book.publishhingyear}` )  
   function Book(name, author,publishhingyear,numofpages){
    this.name="jjj";
    this.author=author;
    this.publishhingyear=publishhingyear;
    this.numofpages=numofpages;
return `the book ${name} was written by ${author} in the year ${publishhingyear} and contain ${numofpages} pages`

   }
console.log(Book.name);
