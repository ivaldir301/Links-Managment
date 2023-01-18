
# Api para salvar links favoritos de sites de tecnologia

Este api tem a capacidade de guardar os seus links favoritos, usando informaçoes como o endereço web, um titulo, um label.

O api esta hospedado na heroku.com, e sua base de dados esta na freedb.tech

Tech stack utilizada foi NodeJs, Express, Mysql.

## Uso:

### links-managment-demo-2023.herokuapp.com/

Para gravar um utilizador, requisita-se: um nome, um id de 8 caracteres, um email, um password.

### Exemplo gravando um utilizador com o api (com a ferramenta Postman)

links-managment-demo-2023.herokuapp.com/api/v2/userauth/register

![alt text](./api/exampleScreenShots/userRegistration.png?raw=true)

### Exemplo que retorna todos os links registrados por um utilizador(atraves do seu id)

links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/[user id]

![alt text](./api/exampleScreenShots/linkConsultation.png?raw=true)

### Exemplo que grava links favoritos na base de dados(fornecendo o id do utilizador que quer registrar)

links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/

![alt text](./api/exampleScreenShots/linkRegistration.png?raw=true)

### Exemplo que edita um link ja existente na base de dados(fornecendo o id do link)


links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/

![alt text](./api/exampleScreenShots/linkEdition.png?raw=true)

### Exemplo de deletar um link na base de dados(atraves do seu id)

links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/[link id]

![alt text](./api/exampleScreenShots/linkDelition.png?raw=true)


