// 1Ans) Often we have nested functions in which we would like to preserve the context
// of this from its lexical scope. An example is shown below:
function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(character => this.name + character);
};
//2Ans).Create  Object  destructuring  for  user  where  user  has:1.First Name,  2.Last Name, 3.Date of Birth, then assign this object in other object like:
var user = {
	firstName: "Monica",
	lastName: "Dorthy",
	dob:1994
};
let user2 {firstName: f, lastName: l, dob: dob} = user

var displayUser = (user2) => {
	console.log(`My name is ${user2.firstName} ${user2.lastName} I was born in ${user2.dob}`);
}

//3Ans) Create Array Destructuring where you have all friends name then call using console seperately. 
var friends=["surya","rami","Sriram","Robin"];
var [one,two,three,four]=friends;
console.log(one); 
console.log(two);
console.log(three);
console.log(four);

//4Ans).Replace using IIFEs with Blocks, 
{
	let food = 'Meow Mix';
};
console.log(food); //Reference Error

