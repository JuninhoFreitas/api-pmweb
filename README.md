<p align="center">
  <a href="" rel="noopener">
 <img width=224px height=120px src="https://ncdn0.infojobs.com.br/logos/2011/01/03/157727.jpg" alt="Project logo"></a>
</p>

<h3 align="center">API - Orders</h3>

<div align="center">

[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

</div>

---

<p align="center"> Objetivo do projeto: 
  Avaliar a capacidade técnica, crítica e raciocínio lógico, na construção de uma API para acesso a uma camada de dados.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)
- [Autor](#autor)

## 🧐 Sobre <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## 🏁 Primeiros passos <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Pre-requisitos
Banco de dados PostGres.
Yarn instalado na maquina que irá rodar o projeto.
Criação de arquivo .env contendo as váriaveis de ambiente são necessárias neste projeto.

<i>.env</i>

| Variável          | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| DATABASE_HOSTNAME | Hostname para conexão com o banco de dados             |
| DATABASE_USERNAME | Usuario de acesso ao banco de dados                    |
| DATABASE_PASSWORD | Senha de acesso ao banco de dados                      |
| DATABASE_DATABASE | Nome do banco de dados                                 |

### Instalando

Iniciar instalação de pacotes necessários com yarn:
```
yarn
```
Executar serviço API:
```
yarn dev
```
Se tudo ocorreu bem, após ter criado o .env e configurado corretamente o banco de dados, após executar o comando acima, deverá obter a seguinte mensagem no terminal:
```
Server started on port 3333! 🏆 GET http://localhost:3333
```
Indicando que o servidor está rodando em localhost na porta 3333
## 🎈 Como usar <a name="usage"></a>
_Endpoint_
`<url>/orders`
Método: *GET*
Tipo: JSON
Body:
```json
{
  "startDate": "2015-12-30",
	"endDate": "2016-12-30"
}
```



## ⛏️ Built Using <a name = "built_using"></a>

- [PostGres](https://www.postgresql.org) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Celebrate](https://www.npmjs.com/package/celebrate) - Middleware validator
- [TypeORM](https://typeorm.io/) - ORM Framework

## ✍️ Autor <a name = "autor"></a>

- [@JuninhoFreitas](https://github.com/JuninhoFreitas) - Desenvolvimento e documentação
