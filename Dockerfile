# FROM alpine:3.13.6
FROM nginx:stable
LABEL maintainer="devfecta@gmail.com"
LABEL version="1.0"
LABEL description="DevFecta Nginx on Kubernetes"
EXPOSE 8080
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]