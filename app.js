// for(var a = 0; a <= 10; a++)
// {
// document.write(a +"<br>");

// }

// document.write("<br> <br>")


// var b = 0;
// while(b<10){
//     document.write(b);
//     b++;
// }


// var c = 0;
// do{
//     document.write(c +"<br>");
//     c++;
// }
// while(c<10)


// function mo(){
//     alert("Muhammad")
// }
//  mo( )

// function clickBtn(){
//     alert("click Me")
// }


//     function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
// }

//     function setName(){
//         var name = document.getElementById("name");
//         name.value = "Ali"

//         var para = document.getElementById("para");

//         para.innerHTML = "para is Written by InnerHTML";

// }

//     setName()





// Calculator


function getNumber(num) {
var result = document.getElementById("result");
    result.value += num;
}



function clearResult() {
    var result = document.getElementById("result");
    result.value ="";
}

function getResult(){
var result = document.getElementById("result");
result.value=eval(result.value)
}
