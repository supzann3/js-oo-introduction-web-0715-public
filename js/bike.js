function Bike(name,type,color){
  this.name=name;
  this.bikeType=type;
  this.frameColor=color;
  this.condition="ready to go!";
  this.WHEELS=2;
};


Bike.prototype.takeForARide = function(miles){
  if(miles>50){
    return this.condition="needs a tune up";
  }
};

Bike.prototype.tuneUp = function(){
    return this.condition;
};
