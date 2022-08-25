let btnArray = document.getElementsByClassName("btn");

function initBtn() {
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].addEventListener('click', btnFunc);
    }
}

result = document.getElementById("result");

let btnFunc = function(event){
    switch (event.target.value) {
        case "->":
           result.value = result.value.slice(0, -1);
        break;
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            if (result.value[result.value.length - 1]!=event.target.value) {
                result.value = result.value + event.target.value;
            }
            break;
        case "c":
            result.value = "";
            break;
        case "=":
            Calc();
        break;
        default:
            result.value = result.value + event.target.value;
          
    }
    
}

initBtn(); 

function Calc() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        console.log(err);
        if (err instanceof SyntaxError) {
            alert(err.message);
        }
    }
}

function justFunc(){
    alert("Here wiki abt cal!!!");
}