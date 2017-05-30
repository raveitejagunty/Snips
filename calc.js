var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result1 = document.getElementById('result');
var formm = document.getElementById('formy');


formm.addEventListener('submit', function(event){
    if (!num1.value || !num2.value) {
        alert("Please enter the value");
        
    }
    else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
    
        var result = x / y;
        var percent = result * 100;
        
        result1.innerText = "Answer:" + percent + "%";
        event.preventDefault();
    }
        
    });