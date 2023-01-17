# Teste Devnology
## Ivaldir Batalha

### Api para salvar links favoritos de sites de tecnologia

Este api tem a capacidade de guardar os seus links favoritos, usando informaçoes como o endereço web, um titulo, um label.

### Uso:

#### links-managment-demo-2023.herokuapp.com/

Para gravar um utilizador, requisita-se:
    - Um nome;
    - Um id de 8 caracteres
    - Um email
    - E um password

#### Exemplo gravando um utilizador com o api (com a ferramenta Postman)

links-managment-demo-2023.herokuapp.com/api/v2/userauth

![alt text](https://github.com/ivaldir301/Devnology---Teste-/main/api/exampleScreenShots/userRegistration.png?raw=true)

#### Exemplo que retorna todos os links registrados por um utilizador(atraves do seu id)

links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/8439278

![alt text](https://github.com/ivaldir301/Devnology---Teste-/main/api/exampleScreenShots/linkConsultation.png?raw=true)

#### Exemplo que grava links favoritos na base de dados(fornecendo o id do utilizador que quer registrar)

links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/

![alt text](https://github.com/ivaldir301/Devnology---Teste-/main/api/exampleScreenShots/linkRegistration.png?raw=true)

#### Exemplo que edita um link ja existente na base de dados(fornecendo o id do link)


links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/

![alt text](https://github.com/ivaldir301/Devnology---Teste-/main/api/exampleScreenShots/linkEdition.png?raw=true)

#### Exemplo de deletar um link na base de dados(atraves do seu id)

links-managment-demo-2023.herokuapp.com/api/v1/linksmanagment/

![alt text](https://github.com/ivaldir301/Devnology---Teste-/main/api/exampleScreenShots/linkDelition.png?raw=true)


