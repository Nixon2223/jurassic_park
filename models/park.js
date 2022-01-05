const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

  Park.prototype.addDino = function(dino) {
      this.dinosaurs.push(dino)
  }
  
  module.exports = Park;
  