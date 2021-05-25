var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
gazeAtVictim(person) {
 // spent a good 30 minutes before I discovered
 // 'gazeAtVictim(victim)' was breaking it
  var newStatue = new Statue(person.name);
  this.statues.push(newStatue);
}

}

// var person = new Person();
// var statue = new Statue(person.name);

module.exports = Medusa;
