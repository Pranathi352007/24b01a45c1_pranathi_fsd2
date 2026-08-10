let a:undefined=undefined;
console.log(a);

let b:null =null;
console.log(b);

let numb1:any =90;
console.log(numb1);
numb1="string";
console.log(numb1);
numb1=null;
console.log(numb1);

let val1:unknown="pranathi";
console.log(val1);

function display(name:string):void{
    console.log("Hello "+name);
}
display("pranathi");

function show(msg:string):never{
    throw new Error(msg);
}
show("Hello Welcome");
