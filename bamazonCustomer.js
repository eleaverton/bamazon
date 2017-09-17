var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user: 'root',
	password: 'August1614#*',
	database: "bamazon"
});

connection.connect(function(err){
	if (err) throw err;

});

//putting quantity in here for now. may need to add separate connection
//to get this info and compare later. 
connection.query("SELECT item_id,product_name,price,stock_quantity FROM products",function(err, results){
	if (err) throw err;
	console.log(results);
	inquirer.prompt([
	{
		name:"idSelected",
		type: "input",
		message: "Enter the id of the item you would like to buy."	
	},
	{
		name:"quantity_Selected",
		type: "input",
		message: "Enter the number of the selected item you would like to buy."	
	},
	]).then(function(answer){
		console.log(answer.idSelected);
		var chosenItem;
		for (var i = 0; i<results.length; i++){
			if (results[i].item_id === parseInt(answer.idSelected)){
				chosenItem = results[i];
				console.log(chosenItem);
			};
		};
		console.log(chosenItem.stock_quantity);
		console.log(answer.quantity_Selected);
		if (chosenItem.stock_quantity > parseInt(answer.quantity_Selected)){
			var newQuantity = chosenItem.stock_quantity-parseInt(answer.quantity_Selected);
			console.log(newQuantity);
			connection.query(
				"UPDATE products SET ? WHERE ?",
				[
				{
					stock_quantity: newQuantity
				},
				{
					item_id:chosenItem.idSelected
				}
				],
				function(err,res){
					if (err) throw err;
					console.log(res);
					console.log('Item(s) purchased successfully')
					var totalCost = answer.quantity_Selected*chosenItem.price;
					console.log('Purchase total: '+totalCost);
				})
		}
		else {
			console.log("Insufficient quantity available");
		}
	});
	
});

