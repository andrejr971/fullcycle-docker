FROM nginx:latest

# DIRETÓRIO QUE VOU TRABALHAR DENTRO DO CONTAINER
# WORKDIR /app

COPY html /usr/share/nginx/html

# # EXECUTA COMANDOS
# RUN apt-get update && \ 
#     apt-get install vim -y

# É UM COMANDO FIXO
ENTRYPOINT ["/docker-entrypoint.sh"]

# EXPOSE 8080:80

# É UM PARAMENTO VARIAVEL
CMD ["nginx", "-g", "daemon off;"]