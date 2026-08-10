function add(x:number,y:number):number{
    return x+y;
}
console.log(add(3,890));
function sub(x:number,y:number):number{
    return x-y;
}
console.log(sub(678,345678));
function multiply(x:number,y:number){
    return x*y;
}
console.log(multiply(4.5,9.87));

function show(x:string="john"):string{
    return "Hello "+x;
}
console.log(show());
console.log(show("pranathi"));

function display(name:string,age?:number):void{
    console.log("Name:"+name);
    if(age){
        console.log("Age:"+age);
    }
}

function rest(...arr:number[]):void{
    console.log(arr);
}
rest(10,20);
rest(12.8,90.7,89);
function rest1(...str:string[]):void{
    console.log(str);
}
rest1("hello","hi","bye");
rest1("os","dbms","fsd");
