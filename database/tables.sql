CREATE DATABASE LinksManagment;
USE LinksManagment;

CREATE TABLE Users(
    id INT NOT NULL,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    user_password VARCHAR(30) NOT NULL,
    his_links_id INT NOT NULL,
    PRIMARY KEY (id)
 );

CREATE TABLE Links(
    link_id INT NOT NULL,
    title VARCHAR(30) NOT NULL, 
    label VARCHAR(30),
    link_adress VARCHAR(50) NOT NULL,
    id_user INT NOT NULL,
    PRIMARY KEY (link_id)
);

ALTER TABLE Users ADD FOREIGN KEY (his_links_id) REFERENCES Links(link_id);

ALTER TABLE Links  ADD FOREIGN KEY (id_user) REFERENCES Users(id);

ALTER TABLE Links MODIFY link_id VARCHAR(5000)

