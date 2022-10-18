 function show_img(){
    if (document.getElementById("check").checked==true){
    document.getElementById("img").innerHTML="<img src='/pexels-ann-h-1762851.jpg'>";
    }
    else if(document.getElementById("check").checked==false){
        document.getElementById("img").innerHTML="<img src='/pexels-ann-h-1762851.jpg'>".hide ;

    }
 }