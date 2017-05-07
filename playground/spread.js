var person = ['Emily', 33];
var person2 = ['Adam', 34];

function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...person2);

var names = ['Jayda', 'Ben'];
var final = [...names, 'Emily'];

final.forEach(function(name) {
  console.log('Hi ' + name)
});
