// 3
let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

let shortNames = longNames.map(function(longNames){
	return `${"name"} : ${longNames.firstName} ${longNames.lastName}`;
});
console.log(shortNames);