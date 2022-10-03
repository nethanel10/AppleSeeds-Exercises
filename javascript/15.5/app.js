
function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter + 1 ;
    }
    } return counter ;
    }
   console.log (countOccurrences ( "ini mini miny moe" , "n" ));
   //1     counter + 1 ;
//2 node js
//3 the counter+1 not equal to counter therore counter still 0;
//4 counter=counter+1