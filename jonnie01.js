//for ax^2+bx+c, function getX returns the larger value of X or just the value of x where x has one value

function getX(a,b,c){
    let m=((-(b)+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a))
    let n=((-(b)-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a))
    if(m>n){console.log(m)}
    else
    if (n>m){console.log(n)}
    else
    if(m==n){console.log(m||n)}
    else(console.log("NULL"))
    console.log(m)
    console.log(n)
        
    
    }
    getX(2,13,6);