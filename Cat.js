function Cat(){
	this.stomatch = [];
}
Cat.prototype.eat = function(mouse){
	this.stomatch.push(mouse);
}

module.exports = Cat;
