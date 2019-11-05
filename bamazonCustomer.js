var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jjuniortoes.1",
  database: "products_db"
});


connection.connect(function(err) {
  if (err) throw err;
  
  queryProducts();

  
});

function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID", "EXIT"]
    }).then(answer => {
      switch (answer.postOrBid) {
        case "POST":{
        inquirer
        .prompt([
          {
            name: "productId",
            type: "input",
            message: "What is the name of your product?"
          },
          {
            name: "priceInput",
            type: "input",
            message: "How much is the product?"
          },
          {
            name: "stockQuantity",
            type: "input",
            message: "How many items are you posting?"
          }
        ]).then(newItem => {
          console.log(newItem);
          connection.query("INSERT INTO products ( product_id, price, stock_quantity) VALUES (?, ?, ?)", [newItem.productId, newItem.priceInput, newItem.stockQuantity], function (err, res) {
            if (err) throw err;
            queryProducts();
          });
        })
      }
        break;

        case "BID": {
        inquirer
          .prompt([
            {
              name: "bidOnItem",
              type: "input",
              message: "Which item do you want to bid on?",
            },
            {
              name: "bidPrice",
              type: "input",
              message: "How much do you want to bid?"
            }
          ]).then(selectedProduct => {
                connection.query("SELECT price FROM products WHERE item_id = ?", selectedProduct.bidOnItem, function(err, price) {
                  console.log(parseInt(selectedProduct.bidPrice));
                  console.log(price[0].price)
                  if (err) throw err;
                  if(price[0].price < parseInt(selectedProduct.bidPrice)) {
                    console.log("We on the right step")

                    connection.query("UPDATE products SET price = ? WHERE item_id = ?", [selectedProduct.bidPrice, selectedProduct.bidOnItem], function(err, res) {
                      if (err) throw err;
                      console.log("UPDATED " + selectedProduct.bidOnItem + ". New bid is " + selectedProduct.bidPrice);
                      queryProducts();
                    })
                  } else {
                    console.log("Your bid price is too low");
                    start();
                  }  
              })
            })
          }
        break;
        default:{
          connection.end();
          console.log("Thank you for choosing Bamazone :)!!.");
          break;
        }
      }

    })
  }

function queryProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // for (var i = 0; i < res.length; i++) {
    //   arrayOfProductNames.push(res[i].product_id);
    //   console.log(res[i].product_id + " | " + res[i].price + " | " + res[i].stock_quantity);
    // }
    console.table(res);
    start();
  });
}











































// .then(function(answer) {
//     var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//     connection.query(query, [answer.start, answer.end], function(err, res) {
//       if (err) throw err;
//       for (var i = 0; i < res.length; i++) {
//         console.log(
//           "Position: " +
//             res[i].position +
//             " || Song: " +
//             res[i].song +
//             " || Artist: " 
//             res[i].artist +
//             " || Year: " +
//             res[i].year
//         );
//       }
//       runSearch();
//     });
//   });
// }

// function Search() {
// inquirer
//   .prompt({
//     name: "song",
//     type: "input",
//     message: "What song would you like to look for?"
//   })
//   .then(function(answer) {
//     console.log(answer.song);
//     connection.query("SELECT * FROM products WHERE ?", { id:  answer.song }, function(err, res) {
//       if (err) throw err;
//       console.log(
//         "Position: " +
//           res[0]. +
//           " || Song: " +
//           res[0]. +
//           " || Artist: " +
//           res[0].artist +
//           " || Year: " +
//           res[0].year
//       );
//       runSearch();
//     });
//   });
// }