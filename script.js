function plus()
{
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let z = x+y;
    
    document.getElementById('result').innerHTML = "The sum of "+x+" and "+y+" is "+z+".";
}

function minus()
{
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let z = x-y;
    
    document.getElementById('result').innerHTML = "The difference of "+x+" and "+y+" is "+z+".";
}

function times()
{
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let z = x*y;
    
    document.getElementById('result').innerHTML = "The product of "+x+" and "+y+" is "+z+".";
}

function divide()
{
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let z = x/y;
    
    document.getElementById('result').innerHTML = "The quotient of "+x+" and "+y+" is "+z+".";
}

function mod()
{
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let z = x%y;
    
    document.getElementById('result').innerHTML = "The remainder of "+x+" and "+y+" is "+z+".";
}
