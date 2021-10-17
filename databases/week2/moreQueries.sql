--More queries
SELECT task.id,user.id AS UI,task.title,user.email ,user.name from task
JOIN user ON task.user_id=user.id
WHERE user.email like "%@spotify.com";
SELECT task.* FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Donald Duck' AND task.status_id = 1;

SELECT title, month(created), user.name Created_by
FROM task
JOIN user ON task.user_id=user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=(09);

SELECT MONTH(created) AS month_number , count(*) AS total FROM task 
GROUP BY month(created);



