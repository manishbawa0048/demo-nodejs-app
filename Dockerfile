FROM mattrayner/lamp:latest-1804

COPY ./src/  /var/www/html

EXPOSE 3000

#Start the app
CMD ["./src/index.html"]
