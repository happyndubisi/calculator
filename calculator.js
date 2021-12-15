
let display= document.getElementById("display");
let val1=""
let val2=""
let operation=true
let operator=" "

function equal(){
    let answer=" "
    val1= parseFloat(val1);
    val2= parseFloat(val2)
    if(operator==="addition"){
answer=val1 + val2; 
display.value=answer;
    } else if(operator==="subtraction"){
        answer=val1 - val2;
        display.value=answer;
    }else if(operator==="multiplication"){
        answer=val1 * val2;
        display.value=answer;
    }else if(operator==="division"){
        answer=val/val2;
        display.value=answer;
    }else{
        display.value=val1
    }
}
function AC(){
    let del="" 
val1=del
val2=del
operation=true
display.value=del
}
function add(){
    operation= false;
operator="addition"

}
function minus(){
    operation= false;
    operator="subtraction"
}
function divide(){
    operation= false;
    operator="division"
}
function multiply(){
    operation= false;
    operator="multiplication"
}
function point(){
    let decimal='.';
    if(operation===true){
        val1+= decimal;
        display.value=val1;
    } else{
        val2+=num2;
        display.value=val2;
    }
}
function one(){
    let num1=1;
    if(operation===true){
        val1+= num1;
        display.value=val1;
    } else{
        val2+=num1;
        display.value=val2;
    }
    console.log("val1-"+ val1, "val2-"+ val2)

}

function two(){
    let num2=2;
    if(operation===true){
        val1+= num2;
        display.value=val1;
    } else{
        val2+=num2;
        display.value=val2;
    }
    console.log("val1-"+ val1, "val2-"+ val2)
}
function three(){
    let num3=3;
    if(operation===true){
        val1+= num3;
        display.value=val1;
    } else{
        val2+=num3;
        display.value=val2;
    }
}
function four(){
    let num4=4;
    if(operation===true){
        val1+= num4;
        display.value=val1;
    } else{
        val2+=num4;
        display.value=val2;
    }
}
function five(){
    let num5=5;
    if(operation===true){
        val1+= num5;
        display.value=val1;
    } else{
        val2+=num5;
        display.value=val2;
    }
}
function six(){
    let num6=6;
    if(operation===true){
        val1+= num6;
        display.value=val1;
    } else{
        val2+=num6;
        display.value=val2;
    }
}
function seven(){
    let num7=7;
    if(operation===true){
        val1+= num7;
        display.value=val1;
    } else{
        val2+=num7;
        display.value=val2;
    }
}
function eight(){
    let num8=8;
    if(operation===true){
        val1+= num8;
        display.value=val1;
    } else{
        val2+=num8;
        display.value=val2;
    }
}
function nine(){
    let num9=9;
    if(operation===true){
        val1+= num9;
        display.value=val1;
    } else{
        val2+=num9;
        display.value=val2;
    }
}
function zero(){
    let num0=0;
    if(operation===true){
        val1+= num0;
        display.value=val1;
    } else{
        val2+=num0;
        display.value=val2;
    }
}