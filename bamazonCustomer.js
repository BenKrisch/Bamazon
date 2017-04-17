var mysql = require("mysql"); 
var inquirer = require("inquirer"); 

var connection = mysql.createConnection({ 
	host: "localhost",
	port: 3306,

	user: 'root',

	password: 'password', 
	database: 'Bamazon'
}); 

connection.connect(function(err) { 
	if(err) throw err;
	
	console.log("connected as id" + connection.threadId);
}); 

var start = function () { 

	var displayItems = function () { 

		connection.query("SELECT * FROM products", function (err, results) { 
			if (err) throw err; 
			
			
					for (var i=0; i < results.length; i++) { 
						console.log(results[i].item_id + ". " + results[i].product_name + " Price: " + results[i].price +" Quantity: " + results[i].stock_quantity + "\n");
					
					}; 
					
			inquirer.prompt([
			{
				name: "choice", 
				type: "list", 
				choices: ["1","2","3","4","5","6","7","8","9","10"], 
				message: "What product would you like to buy?"
			},
			{ 
				name: "amount", 
				type: "input", 
				message: "How many would you like to buy?"
			}

				]).then(function(answer) { 
					var chosenItem;
				 
					console.log("Total: " );
					for (var i=0; i < results.length; i++) {
						console.log(results[i]);
						if (results[i].item_id == answer.choice) { 
							chosenItem = results[i]; 

								if (answer.amount < chosenItem.stock_quantity) { 
									console.log("Your total: ");
									var updatedQuantity = chosenItem.stock_quantity - answer.amount;
									connection.query("UPDATE products SET ? WHERE ?", [{ 
							
									stock_quantity: updatedQuantity

									}, 
									{
									item_id: chosenItem.item_id
									}
									],
								function(error) {
          							if (error) throw err;
          								console.log("Your total: " + (answer.amount * chosenItem.price));
          							start();
        }
						);
					}

						}
					}
					
					// if (answer.amount < chosenItem.stock_quantity) { 

					// 	connection.query("UPDATE products SET ? WHERE ?", [{ 
					// 		stock_quantity: stock_quantity - answer.amount

					// 	}, 
					// 	{
					// 		item_id: chosenItem.item_id
					// 	}
					// 	],
					// 	function(error) {
     //      					if (error) throw err;
     //      					console.log("Your total: " + (chosenItem.stock_quantity * chosenItem.price));
     //      					start();
     //    }
					// 	);
					// }

				});
		});

	}; 

	displayItems();

}; 

start();