SET NAMES utf8mb4;
CREATE DATABASE cafe;
USE cafe;

create Table `customers`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(245),
    `phone_number` VARCHAR(15) NOT NULL,
    `address` VARCHAR(245)
);

CREATE TABLE `waiters`(
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `salary` INT NOT NULL,
  `job_shift` VARCHAR(45) NOT NULL,
  `starting_date` DATE,
  `phone` VARCHAR(15) NULL,
  `address` VARCHAR(245) NOT NULL
  );
  
  CREATE TABLE `menu_list`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(245) NOT NULL, 
    `type` VARCHAR(245) NOT NULL,
    `description` VARCHAR(300)NOT NULL,
    `status` TINYINT NOT NULL
  );
  
CREATE TABLE `orders`(
    `order_id` INT PRIMARY KEY AUTO_INCREMENT ,
    `costumer_id` INT,
    `waiters_id` INT,
    `menu_list_id` INT,
    `order_description` varchar(245),
    FOREIGN KEY (costumer_id)
        REFERENCES customers (id),
    FOREIGN KEY (waiters_id)
        REFERENCES waiters (id),
    FOREIGN KEY (menu_list_id)
        REFERENCES menu_list (id)
);
