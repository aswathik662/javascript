let a=2;
let b=9;
let c=1;
if (a==b && a==c && b==c)
{
    console.log('equilateral')
}
else if(a==b || b==c ||a==c )
{
    console.log('isoceles')
}
else{
    console.log('scalene')
}