FROM node:latest as curso-angular
WORKDIR /app
EXPOSE 8081
COPY package.json /app
RUN npm install
RUN npm install ngx-bootstrap
COPY . .
RUN npm run build

FROM nginx:latest as nginx
VOLUME /var/cache/nginx
COPY --from=0 /app/dist/requests-http /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf


# docker build -t curso-angular .
# docker run -p 8081:80 curso-angular
# docker tag curso-angular curso-angular
# docker push curso-angular:latest
