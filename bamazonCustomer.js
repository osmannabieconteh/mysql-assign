var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  
  user: "root",


  password: "",
  database: "products"
});





connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });
  
  function runSearch() {
    inquirer
      .prompt({
        item: "",
        product: "",
        department: "",
    quantaty: 

      });
    
    
        

 



































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