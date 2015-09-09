function Owner(name,bikes){
  this.name=name
  this.bikes=[]
};

Owner.prototype.buildBike = function(name,type,color){
  this.bikes.push(new Bike(name,type,color));
};

Owner.prototype.rideBike = function(bikeName, miles){
  this.bikes.forEach(function(bike) {
    if (bike.name===bikeName){
      bike.takeForARide(miles)
    }
  })
};