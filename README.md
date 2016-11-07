# Projeto - Percycle com Node.Js, Sails.Js & MongoDb (em Desenvolvimento)

Desenvolvimento de uma aplicação em Node.Js usando Sails.js e MongoDb.

## Recursos Utilizados no desenvolvimento do projeto:

- Node.Js;
- Express.Js;
- MongoDb;
- Conceito RestFul;
- PostMan (para testar a API criada);
- Sails.Js; ~ 0.12.1
- JSON data (para retornar os dados);
- Bootstrap;
- EJS;
- WebSocket.io;
- Robomongo (UI MongoDb - Para poder administrar o banco MongoDB **opcional**)

## Pré-Requisitos: Instalação de dependências:

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)
* **Robomongo**: Caso também não tenha, basta realizar o download [Aqui](https://robomongo.org/) **opcional o download**

p.s.2.: o MongoDb pode ser usado de maneira local. Porém caso deseja usar o MongoDb na nuvem, basta usar 
a base de dados do MongoDb em Cloud:

* [Modulus](https://modulus.io/)
* [MLab](https://mlab.com/)

### Instalando as Dependências:

Antes de instalar as dependências há a necessidade de instalar o **node-gyp** uma vez que,
estamos usando o módulo de criptografia: **bcrypt** (que usa o Python). Para isso, abre o seu terminal e execute
o seguinte comando abaixo **Somente para usuários Windows**

Passo 1) Como administrador executar o comando no prompt: 

```
npm install --global --production windows-build-tools
```

Passo 2) Depois o seguinte comando:

```
$ npm install --global node-gyp
```

p.s.: Em caso de dar erro ao instalar o **bcrypt** tente executar os 2 seguintes comandos:

```
npm install --save bcryptjs && npm uninstall --save bcrypt
```

e

```
npm install bcrypt --save
```

Agora com o Python devidamente instalado na sua máquina, agora sim poderá instalar as dependências do projeto.

Passo 3) Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Passo 4) Depois, quando estiver na pasta do projeto você deverá instalar o Sails globalmente. Para isso, basta digitar no cmd a seguinte instrução:

```
npm install sails -g
```

Passo 5) Executar enfim o comando:

```
npm install
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





