document.getElementById("submit_btn").addEventListener("click", fibonacci);


function fibonacci() {

let num = document.getElementById("number").value;

var fib =[0,1] ;

var a = fib[0];

var b = fib[1];

var z;


for (i = 2 ; i <num ; i++) {

    z = a+b;
    a = b;
    b = z;
    fib.push(z);

}
if (num==0){
    document.getElementById("output").innerHTML = "PLS tr again";
}

else {
    document.getElementById("output").innerHTML= num +"fibonacci degeri"+fib[num-1];
}


}



   


