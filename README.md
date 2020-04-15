# RequestsHttp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
RUN json-server --watch db.json to Launch db server

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

json-server --watch db.json

cd server 
npm run start 

npm run build para deploy de produção

firebase init
firebase login
npm run build

firebase deploy 

Project Console: https://console.firebase.google.com/project/http-requests-ernesto/overview
Hosting URL: https://http-requests-ernesto.web.app

ou

ng add @angular/fire
ng deploy



Docker

FROM node:10.13-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/requests-http /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf


# docker build -t curso-angular .
# docker run -p 8081:80 curso-angular

