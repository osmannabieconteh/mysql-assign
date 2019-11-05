DROP DATABASE IF EXISTS products_db;
CREATE database products_db;
USE products_db;

CREATE TABLE products (

item_id INT NOT NULL AUTO_INCREMENT,
  product_id VARCHAR(45) NULL,
  price DECIMAL NOT NULL,
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);
INSERT INTO products ( product_id, price, stock_quantity)
VALUES ("vanilla", 2.50, 200);

INSERT INTO products ( product_id, price, stock_quantity )
VALUES ("lemmon", 2.50, 120);

INSERT INTO products ( product_id, price, stock_quantity)
VALUES ("orange", 250, 130);
INSERT INTO products ( product_id, price, stock_quantity)
VALUES ("grapes", 2.50, 140);

INSERT INTO products (product_id, price, stock_quantity)
VALUES ("mango", 2.50, 160);


INSERT INTO products (product_id, price, stock_quantity)
VALUES ("plum", 2.50, 170);

INSERT INTO products (product_id, price, stock_quantity)
VALUES ("cherry", 2.50, 180);

INSERT INTO products (product_id, price, stock_quantity)
VALUES ("bannana", 2.50, 190);

INSERT INTO products (product_id, price, stock_quantity)
VALUES ("pineapple", 2.50, 110);

INSERT INTO products (product_id, price, stock_quantity)
VALUES ("watermellon", 2.50, 220); 


SELECT * FROM products 


