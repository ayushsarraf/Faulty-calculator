/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/
function FaultyCalculator(a,b){
    let op= prompt(" Enter +,-,*,/ :");
    let rand=Math.random();
    if (rand<=0.1){
        if(op=="+"){
            console.log(a-b);
        }
        else if(op=="-"){
            console.log(a/b);
        }
        else if(op=="*"){
            console.log(a+b);
        }
       else if (op == "/") {
            console.log(a ** b);
        } else {
            console.log("Invalid operator");
        }
    }
    else {
        if(op=="+"){
            console.log(a+b);
        }
        else if(op=="-"){
            console.log(a-b);
        }
        else if(op=="*"){
            console.log(a*b);
        }
        else if (op == "/") {
            console.log(a / b);
        } else {
            console.log("Invalid operator");
        }
        
    }
    
}
let c = parseInt(prompt("Enter a number:"));
let d = parseInt(prompt("Enter another number:"));

FaultyCalculator(c,d)
  
