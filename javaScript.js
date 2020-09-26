document.getElementById("btn").addEventListener(
    "click", fibonacci);
function fibonacci() {
    const n = document.getElementById("number").value;
    var fibo = [1, 1];
    for (i = 0; i < n-2; i++) {
        fibo.push(fibo[i] + fibo[i+1]);
    }
    if (isNaN(n) || n < 1) {
        document.getElementById("result").innerHTML = "Please check your input!";
    } else {
        document.getElementById("result").innerHTML = n + ". element of Fibonacci Sequence is " + fibo[n-1];
        document.getElementById("result_1").innerHTML = n + ". element of Fibonacci Sequence is " + fibo;
    }
}