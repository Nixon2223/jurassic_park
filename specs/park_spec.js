const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur

  beforeEach(function () {
    park = new Park("Dino Land", 1000)
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
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
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur]);
  })

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur)
    park.removeDino(dinosaur)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to find the dinosaur that attracts the most visitors');



  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
