class Student{
    name:string;
    year:number;
    cgpa:number;
    constructor(name:string,year:number,cgpa?:number){
        this.name=name;
        this.year=year;
        this.cgpa=cgpa??10;
    }
    public feedback():string{
        if(this.cgpa>0&&this.cgpa<=5)
            return "good";
        else  if(this.cgpa>5&&this.cgpa<=8)
            return "Excellent";
        else
            return "ExtraOrdinary";
    }
    public details():void{
        console.log("Name: "+this.name);
        console.log("Year: "+this.year);
        console.log("Cgpa: "+this.cgpa);
        console.log("Feedback: "+this.feedback());
    }
}
const obj1=new Student("Pranathi",3,9.78);
const obj2=new Student("Sukeerthi",1);
obj1.details();
obj2.details();