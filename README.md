<img src="src/assets/images/icon_logo.png" align="right" />

# Brasil Mapeado

> Mapeamento de equipamentos públicos

# Requisitos

## Instale o NodeJS
> Versão 8.11.x

É possível baixar [aqui](https://nodejs.org/en/)

## Instale o angular-cli

```Shell
npm install -g @angular/cli
```

# Clonando com Git Bach

```Shell
git clone https://github.com/brasil-mapeado.git
```
> Ou utilize alguma IDE

# Arquitetura do projeto
```
src
- app
-- app.module           <-- Modulo que declara os serviços, diretivas e components utilizados na aplicação, todo service deve ser                                   declarado em `providers`;
-- app.routing          <-- Rotas da aplicação são declaradas e configuradas aqui;
-- components           <-- Components incluidos nas páginas, possuem html, controller e css próprias;
-- pages                <-- As páginas da aplicação, possuem html, controller e css próprias;
-- services             <-- Classes de serviços da aplicação;
--- geo-codind.service  <-- Serviço de comunicação com o geocoding do Google;
--- router.service      <-- Serviço que deve ser extendido para consumir algum recurso REST do back no front;

- assets                <-- Arquivos estáticos;
- environments          <-- Variáveis e constantes para os ambiente de desenvolvimento e produção;
-- environment.api      <-- Rotas de recursos do backend, geoserver e google geocode;
```
# Comandos Úteis

## Iniciando

Na pasta do projeto, abra o terminal e insira o comando `npm install`

## Servindo a aplicação

Na pasta do projeto, abra o terminal e insira o comando `ng serve`. Acesse `http://localhost:4200/`. A aplicação atualiza automaticamente após modificações.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
