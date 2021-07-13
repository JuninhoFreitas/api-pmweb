<p align="center">
  <a href="" rel="noopener">
 <img width=224px height=140px src="https://yt3.ggpht.com/ytc/AKedOLTPwDyeUXnSwcXo8J-zvQ4pezD8_5ZgyTMk4NH9KA=s900-c-k-c0x00ffffff-no-rj" alt="Project logo"></a>
</p>

<h3 align="center">API - Vendas</h3>

<div align="center">

[![Status](https://img.shields.io/badge/Status-in%20development-red)]()

</div>

---

<p align="center"> Objetivo do projeto: 
  Construir uma api completa de vendas para usar como base em outros projetos.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)
- [Autor](#autor)

## 🧐 Sobre <a name = "about"></a>

<p>
  Construção de uma API que conterá todas as características de um api em produção,
  Para ser usada em outros projetos seja como base ou em uso real.
</p>


## 🏁 Primeiros passos <a name = "getting_started"></a>

### Pre-requisitos
Banco de dados PostGres.

Yarn instalado na maquina que irá rodar o projeto.


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

`<url>/users`

Método: *GET*

Body:
```json
{
  "startDate": "2015-12-30",
  "endDate": "2016-12-30"
}
```
Retorno esperado:
```json
[
  {
    "id": "xxxxxx0000000xxxxxx000000xxxxxxx",
    "name": "João",
    "email": "joao@dev-addict.com",
    "password": "$2a$08$1f/vV.a/4akHGzXReOhOeekoOzR2wIbDo0Jcd9qiNzhN1Vt.xp6c.",
    "avatar": null,
    "created_at": "2021-07-12T08:36:07.394Z",
    "updated_at": "2021-07-12T08:36:07.394Z"
  }
]
```




## ⛏️ Built Using <a name = "built_using"></a>

- [PostGres](https://www.postgresql.org) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Celebrate](https://www.npmjs.com/package/celebrate) - Middleware validator
- [TypeORM](https://typeorm.io/) - ORM Framework
- [Multer]() - Upload Lib

## ✍️ Autor <a name = "autor"></a>

- [@JuninhoFreitas](https://github.com/JuninhoFreitas) - Desenvolvimento e documentação
