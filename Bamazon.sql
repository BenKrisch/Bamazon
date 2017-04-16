CREATE DATABASE Bamazon; 

USE Bamazon; 
CREATE TABLE products (
item_id INTEGER(11) AUTO_INCREMENT, 
product_name VARCHAR(100), 
department_name VARCHAR(100), 
price INTEGER(6), 
stock_quantity INTEGER(4), 
PRIMARY KEY (item_id) 
); 

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("apples","produce", 1,100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("oranges","produce", 1,200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("snozberries","produce", 2,50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snuggie","home", 20,75); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants","apparel", 30,1000); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer","electronics", 800,100); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("phone","electronics", 200,300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bed","furniture", 400,150);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("desk","furniture", 200,85);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("When Harry Met Sally","Movies", 6,100);

SELECT * FROM products;
