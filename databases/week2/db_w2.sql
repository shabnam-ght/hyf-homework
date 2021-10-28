 INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 value ('lesson2','Working with tasks',now(),now(),now(),2, 1);
 UPDATE task SET title ="updated to Database-Lesson2" WHERE id=36;
 UPDATE task SET due_date="2021-09-29" WHERE id=36;
 UPDATE task SET status_id = 1 WHERE id=36;
 UPDATE task SET status_id = 3 WHERE id=1;
DELETE from task where id=37;

--School database
--Create a new database containing the following tables:
--Class: with the columns: id, name, begins (date), ends (date)
--Student: with the columns: id, name, email, phone, class_id (foreign key)

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
 

