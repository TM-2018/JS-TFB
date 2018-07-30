console.log(this);

var myCar2 = {
    
    maxSpeed: 50,
    driver: "Net ninja",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("Driver name is " + this.driver);
    }
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

