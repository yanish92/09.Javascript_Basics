// 14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

const car = {
    make: "Toyota",
    model: "Camry",
    startEngine: function() {
      console.log("Engine started. Ready to drive!");
    }
};

car.startEngine();