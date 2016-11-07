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
- Robomongo (UI MongoDb - Para poder administrar o banco MongoDB **opcional**);
- Heroku (para realizar o Deploy do sistema desenvolvido);

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

Para que possa executar o projeto, haverá a necessidade de inicar o MongoDb. Para isso siga os passos abaixo:

1) Passo 1: Abrir o terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Bom, agora na mesma tela do cmd, basta iniciar o server para que o projeto possa ser executado localmente.
Ao digitar o comando abaixo abrirá a porta: 1337 (que é a porta default do Sails.js)

```
sails lift
```


Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.

Agora, abre a página da aplicação em `http://localhost:1337`. E pronto a aplicação será executada de maneira local na sua máquina.  


### Testando os Usuários Admin e Usuários Regulares:

A aplicação foi desenvolvida para que haja dois tipos de usuários: 

- **Usuários Administradores**: são aqueles que tem a total permissão de visualizar todos os usuários cadastrados
no sistema, podem atualizar, editar ou até mesmo excluir um determinado usuário e além do mais, poderá definir algum
determinado usuário como Administrador do Sistema. 

(Perfil do Usuário Admin):

![alt tag](https://i.imgsafe.org/fe592400b3.png)

Como podem observar na imagem abaixo também, o Usuário Administrador pode visualizar em tempo real se um determinado
usuário está online ou não no sistema. Mesmo os recém-cadastrados:

(Conta do Usuário Regular)

![alt tag](https://i.imgsafe.org/fe76e98365.png)

(Conta do Usuário Administrador - mostrando os usuário em tempo real se estão online ou não)

![alt tag](https://i.imgsafe.org/fe7d017e3a.png)


- **Usuários Regulares**: são aqueles que realizar o cadastro no sistema. Ter uma Página de Perfil e podem entrar e editar
o seu perfil a todo o tempo.

![alt tag](https://i.imgsafe.org/fe76e98365.png)

Para criar um perfil Administrador, deverá 'setar' a propriedade admin para 'true' no MongoDb. Basta criar um usuário comum, e depois 
seguir os seguintes passos abaixo:

Passo 1) Já com o MongoDb instalado na sua máquina, abre o terminal e digite o seguinte comando:

```
$ mongod
```

Passo 2) Depois devemos listar as base de dados criadas na nossa máquina. Para isso, abre um outro terminal sem fechar o terminal
acima e digite os comandos:

```
> mongo
```

depois

```
> show dbs
```

Passo 3) Ao fazermos isso, irá listar os bancos criados na nossa máquina, incluido o banco: 'percycle'. Agora digite o seguinte comando:

```
> use percycle
```

Passo 4) E por último, o seguinte comando para atualizar e setar um determinado perfil como Admin:

```
>  db.user.update({name:"jake"}, {$set:{admin:true}})
```
Ao seguir esses passo, você terá um usuário Master (Admin), no sistema. Caso se sinta à vontade, poderá usar o Robomongo (UI do MongoDb) para realizar
a atualização de um determinado usuário como Administrador. Como segue a imagem abaixo:

![alt tag](https://i.imgsafe.org/fea2cbe71b.png)

E é isso!


p.s.: A validação por email não consegui realizar. Mas, posso realizar um estudo a respeito em como fazer via Sails.js. 
Espero que a equipe Percycle, gostam do que eu pude desenvolver.

Referências ao desenvolver esse projeto:

- [StackOverFlow](http://stackoverflow.com/)
- [Sails.js Documentation](http://sailsjs.org/documentation/concepts/)
- [MongoDb Documentation](https://docs.mongodb.com/manual/)
- [W3School - Bootstrap](http://www.w3schools.com/bootstrap/)
- [EJS - Template documentation](http://ejs.co/)
- [Tutorial EJS Template](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
- [CRUD - Sails.js](https://scotch.io/tutorials/build-a-sailsjs-app-from-api-to-authentication)

