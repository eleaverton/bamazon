CREATE DATABASE bamazon;
 USE bamazon;
 CREATE TABLE products(
 item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(25),
 department_name VARCHAR(25),
 price FLOAT(10,2),
 stock_quantity INTEGER(11),
 PRIMARY KEY (item_id)
 );
 
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("KitchenAid Stand Mixer", "Kitchen", 345.99, 10),("Keurig", "Kitchen", 149.99,20), 
("Crock-Pot", "Kitchen", 20.65, 5),("Instant Pot", "Kitchen", 99.00, 15), 
("Pillows - Green", "Home", 14.99, 35), ("Pillows - Blue", "Home", 17.99, 42),
("Curtains", "Home", 25.67, 29), ("Electric Toothbrush", "Health", 89.00, 16),
("Hair Dryer", "Beauty", 47.99, 10), ("Flat Iron", "Beauty", 45.87, 5) ;

USE bamazon;			
SELECT * FROM products;