--More queries
SELECT user.name,  task.title, user.email
FROM user, user_task, task WHERE 
user.email LIKE "%@spotify.com" AND
user.id=user_task.user_id AND
user_task.task_id=task.id;
SELECT * FROM user_task 
JOIN task ON task_id=task.id 
JOIN user ON user_id=user.id 
JOIN status ON status_id=status.id 
WHERE user.name='Donald Duck' AND
status.name LIKE "Not started";

SELECT * from user_task
JOIN task on task_id= task.id
JOIN user on user_id= user.id
WHERE user.name = "Maryrose Meadows" AND
month(created) = 9;

SELECT MONTH(created) AS month_number , count(*) AS total FROM task 
GROUP BY month(created);



