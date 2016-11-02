# Projeto - Percycle com Node.Js Sails.Js & MongoDb (em Desenvolvimento)

Desenvolvimento de uma aplicação em Node.Js usando Sails.js e MongoDb.

## Recursos Utilizados no desenvolvimento do projeto:

- Node.Js;
- Express.Js;
- MongoDb;
- Conceito RestFul;
- PostMan (para testar a API criada);
- Sails.Js; 
- JSON data (para retornar os dados);
- Bootstrap;
- EJS;

## Pré-Requisitos: Instalação de dependências:

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

p.s.: o MongoDb caso você decida conectar a sua base de dados de maneira local. Caso não, basta usar 
a base de dados do MongoDb em Cloud:

* [Modulus](https://modulus.io/)
* [MLab](https://mlab.com/)

### Instalando as Dependências:

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto você deverá instalar o Sails globalmente. Para isso, basta digitar no cmd a seguinte instrução:

```
npm install sails -g
```

### Executando a Aplicação:

Bom, agora na mesma tela do cmd, basta iniciar o server para que o projeto possa ser executado localmente.
Ao digitar o comando abaixo abrirá a porta: 1337 (que é a porta default do Sails.js)

```
sails lift
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.

Agora, abre a página da aplicação em `http://localhost:1337`. E pronto a aplicação será executada de maneira local na sua máquina.  


