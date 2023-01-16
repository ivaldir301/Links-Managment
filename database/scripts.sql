INSERT (nome, email, password) INTO Users;

SELECT (email, nome) FROM Users WHERE password = ''; // problaby wrong 

SELECT * FROM Links WHERE id_user = id;

SELECT (title, label, link) FROM Links WHERE title = "";

INSERT (title, label, link) INTO Links;

UPDATE FROM Links
IN Links SET title = '', label = '', link = '',
WHERE title = title_passed;

DELETE IN Links WHERE title = title_passed;


