export class classDemo{

    username:string;
    id:number;
    ssn:number;

   /* classDemo(ssn:number){
        this.ssn = ssn;

    }*/


    getUsername(){

        return this.username
    }

    setUsername(){

        this.username = "hello";
    }

}

let ce = new classDemo();
ce.setUsername();
console.log(ce.getUsername());

