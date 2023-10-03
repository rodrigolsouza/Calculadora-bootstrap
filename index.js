
let expression ="";
let errorMessage = false;

// Mecanism to break the display text line 
const screen = document.getElementById('screen')
const screenCSS = window.getComputedStyle(screen)
screen.style.maxWidth = screenCSS.width

function getValue(value) {
  expression+=value;
  document.getElementById("display-error-message").style.display = "none";
  document.getElementById("display-value").innerHTML = expression;
}

function handleDelete() {
    const result = expression.substring(0, expression.length - 1)
    expression = result
  
    if (expression.length > 0) {
      document.getElementById("display-value").innerHTML = result
    } else {
        expression = "";
      document.getElementById("display-value").innerHTML = "0"
    }
}

function handleReset() {
    expression = "";
    document.getElementById("display-value").innerHTML = "0"
}

function getResult() {
    if(expression.length === 0) {
        return
    } 
    
    try {
      const result = eval(expression) // Return a number
      expression = String(result) // Convert number to string
      
      document.getElementById("display-value").innerHTML = result
    } catch (error) {
      document.getElementById("display-error-message").style.display = "inline-block";
    }
}

document.addEventListener('keydown', function(event) {
    const tecla = event.key;
    const calculatorRegex = /[0-9+\-*/().]/;
    
    if(calculatorRegex.test(tecla)) {
      document.getElementById(tecla).focus();
      getValue(tecla)
    } else if (tecla === "Backspace") {
      document.getElementById("DEL").focus();
      handleDelete()
    } else if (tecla === "Enter") {
      document.getElementById("=").focus();
      getResult();
    }
});
  
/*erros quando se clica em apagar no teclado e quando se aperta enter
função reset não está funcionando*/
