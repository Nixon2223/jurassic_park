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
    let result = []
    for (dino of this.dinosaurs){
        if (dino.species == species){
            result.push(dino)
        }
    }
    return result
}

Park.prototype.visitsPerDay = function() {
    let t = 0
    for (dino of this.dinosaurs){
        t += dino.guestsAttractedPerDay
    }
    return t
}

Park.prototype.visitsPerYear = function() {
    return this.visitsPerDay() * 365
}

Park.prototype.revenuePerYear = function() {
    return this.visitsPerYear() * this.ticketPrice
}
  module.exports = Park;
  