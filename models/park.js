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

Park.prototype.mostPopularDino = function() {
    let obj = {}
    for (dino of this.dinosaurs){
        obj[dino.species] = dino.guestsAttractedPerDay
    }
    let arr = Object.values(obj);
    let max = Math.max(...arr);
    let result = {}
    for (key in obj) {
        if (obj[key] === max) {
            result[key] = max
        }
    }
    return result
}

Park.prototype.dinoBySpecies = function(species) {
    result = []
    for (dino of this.dinosaurs){
        if (dino.species == species){
            result.push(dino)
        }
    }
    return result
}

  module.exports = Park;
  