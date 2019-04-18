try{

class Person {
    constructor(name = 'badari', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescption() {
        return `${this.name} is ${this.age} years old.`;
    }
    getGreeting(){
        return `hi this is ${this.name}`
    }


    
}



class traverler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    getGreet(){

        let greet= super.getGreeting();
        if(this.homeLocation){
            greet+= `im from ${this.homeLocation}`;
        }
                return greet;

    }


}



const me=new traverler();
const other=new traverler('raj',28,'bangalore');

console.log(me.getGreet());
console.log(other.getGreet());

const hh= new Person();
console.log(hh.getGreet())
}
catch(e){
    console.log(e)
}