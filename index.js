function varTest(){
    var x =1;
    if(true){
        var x=2;
        console.log(x);
    }
    console.log(x);
}
varTest()

function es6Test(){
    let x = 1;
    if (true) {
        let x =2;
        console.log(x);
    }
    console.log(x);
}
es6Test()

//Functions

function add (a,b){
    return a+b;
}

//Functions Expresssion
var add1 = function (a,b) {
    return a+b;
}
add1(5,6);

//ES6 Arrow Functions
const add2 = (a,b) => {
    return a+b;
}

//One Statement
const add3 = (a,b) => a+b;
const mult = (a,b) => a*b;
const sub = (a,b)  => a-b;
const div = (a,b)  => a/b;

//Default Parameters Values
function demo (x,y,z){
    if (y=== undefined){
        y=0;
    }
    if (z=== undefined){
        z=0;
    }
    return x+y+z;
}
let res1 = demo (10, 20);
console.log(res1);

// In Arrow function
const demo2 ( a , b =23 ,c = 2 ) => {
resturn a+b+c;
}
const result = demo2 (10);
console.log(result);


// string Concatination
var name = ' Reem ';
var greeting = 'Happy Birthday';
var message = greeting + name;
console.log(message);

// Templete Literals
var mes = `${name} ${greeting}`
console.log(mes);

//Array 

const arr =[3,5,6,9];
const arry2 = [];
for(let i = 0; i<= arr.length-1; i++){
    arry2.push(arr[i]*2);
}
console.log(arry2);

//Map
const Muly2 = arr.map(function(e){
    console.log(e)
})

const Muly2 = arr.map ((item) => {
    return item * 2;
})
console.log(arr);
console.log(Muly2);
