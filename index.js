var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('Hachiko');

cat.eat(mouse);
console.log(cat);

try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while the cat is eating a dog');
}
