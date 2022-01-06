const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park

  beforeEach(function () {
    park = new Park("Dino Land", 1000)
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Velociraptor', 'carnivore', 100);
    dino3 = new Dinosaur('Oviraptor', 'carnivore', 90);
    park.dinosaurs = [dino1, dino2, dino3]
  })

  it('should have a name',function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Land');
  })

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 1000);
  })

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3]);
  })

  it('should be able to add a dinosaur to its collection', function(){
    let newDino = Dinosaur('Stegoceras', 'carnivore', 10)
    park.addDino(newDino)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, newDino]);
  })

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino(dino1)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino2, dino3]);
  })

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDino()
    assert.deepStrictEqual(actual,{'Velociraptor': 100});
  })

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
