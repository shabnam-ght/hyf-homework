 INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 value ('lesson2','Working with tasks',now(),now(),now(),2, 1);
 UPDATE task SET title ="updated to Database-Lesson2" WHERE id=36;
 UPDATE task SET due_date="2021-09-29" WHERE id=36;
 UPDATE task SET status_id = 1 WHERE id=36;
 UPDATE task SET status_id = 3 WHERE id=1;
DELETE from task where id=37;
