interface Vehicle {

color:string;
engine:number;
camera?:boolean;


}

function validateCar(car:Vehicle){
    console.log(car.camera);
    console.log(car.engine);
}

let Bmw = {

        color:"red",
        engine:100,
        camera : true
}

let xyz = {

    color:"red",
    engine:100,
    //camera : true

    //This will throw error if the field camera is not declared for an interfce but we can skip the field if ? 
    //is given
}

