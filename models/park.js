const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

  Park.prototype.addDino = function(dino) {
      this.dinosaurs.push(dino)
  }

  Park.prototype.removeDino = function(dino) {
    this.dinosaurs.splice(dino, 1)
}
  
  module.exports = Park;
  