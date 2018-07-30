var Car = function(maxSpeed, driver){

this.maxSpeed = maxSpeed;
this.driver = driver;
this.drive = function(speed, time){
    console.log(speed * time);
};
this.logDriver = function(){
    console.log("Driver name is " + this.driver);
};

}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(30, "Ninja Man 2");
var myCar3 = new Car(50, "Ninja Man 3");

myCar.drive(30,5);
myCar3.logDriver();