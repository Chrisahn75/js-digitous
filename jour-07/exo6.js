// 6
let cakes = 
[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]


let sold = cakes.filter(function (chocolat) {
    return chocolat.flavor === "chocolate";
});


const statut = sold.map((change) => ({
    ... change,
    status : cakes.status = "sold out !",
}));

console.log(statut);