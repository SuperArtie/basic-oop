var prompt = require('sync-prompt').prompt;


var dogs = [];
var ask = prompt('Throw a dog in the dog box(y/n)? ');
while(ask!=='n')
{
  var name = prompt('Enter the dog\'s name: ');
  var age = prompt('Enter the dog\'s age: ');
  var gender = prompt('Specify the dog\'s gender: ');
  var breed = prompt('Do you know the dog\'s breed? If not just take a crack at it: ');

  var dog = {name:name, age:age, gender:gender, breed:breed};

  dogs.push(dog);
  ask = prompt('Continue (y/n)? ');
}
console.log(dogs);
console.log(dogs[2].age);
