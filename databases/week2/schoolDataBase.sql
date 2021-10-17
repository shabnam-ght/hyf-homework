
 CREATE TABLE `class`(
     `id` int(100) PRIMARY KEY AUTO_INCREMENT,
    `name` varchar (100) NOT NULL,
     `begin-time` DATETIME(6) NOT NULL,
     `end-time` DATETIME(6) NOT NULL
 );

  CREATE TABLE `Student`(
     `id` int(100) PRIMARY KEY AUTO_INCREMENT,
    `name` varchar (100) NOT NULL,
    `phone` int (8) ,
    `class-id` INT(20) NOT NULL,
    `class_id`int(10), FOREIGN KEY (class_id) 
     REFERENCES class(id));
 );--If you are done with the above tasks, you can continue with these advanced tasks:
--Create an index on the name column of the student table.
 
 CREATE INDEX student_name ON Student(name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM ("not-started", "ongoing", "finished");


