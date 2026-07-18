let n1=():void=>{
    console.log("Hello no parameter arrow function");
}
n1();
let n2=(x:number):number=>{
    return x*x;
}
console.log(n2(190));
let n3=(name:string,...marks:number[]):string=>{
    let total=0;
    for(let i=0;i<marks.length;i++){
        total+=marks[i];
    }
    return "My name is "+name+" and my marks are "+total;
}
console.log(n3("pranathi",90,99,98));
