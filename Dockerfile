
FROM nginx:alpine


COPY . /usr/share/nginx/html


RUN sed -i 's/listen       80;/listen       $PORT;/' /etc/nginx/conf.d/default.conf


CMD ["nginx", "-g", "daemon off;"]