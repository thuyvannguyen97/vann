var Mouse = require('./Mouse');
function Cat(){
	this.stomatch = [];
}

Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse) {
		this.stomatch.push(animal);	
	}
	else {
		throw new Error('Cat can only eat mouse!')
	}
}

module.exports = Cat;
