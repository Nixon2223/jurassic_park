const Dinosaur = require('./models/dinosaur.js');

dino1 = new Dinosaur('t-rex', 'carnivore', 50);
dino2 = new Dinosaur('Velociraptor', 'carnivore', 100);
dino3 = new Dinosaur('Oviraptor', 'carnivore', 90);

dinosaurs = [dino1, dino2, dino3]


let o = {}
for (dino of dinosaurs){
    o[dino.species] = dino.guestsAttractedPerDay
}
const findMax = function(obj){
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

console.log(findMax(o))
