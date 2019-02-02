FROM vipinbihari/apna-music:latest
RUN apt-get update && apt-get install -y
RUN cd /var/www/html/ && \
git clone https://github.com/vipinbihari/apna-music.git
RUN mv /var/www/html/apna-music/* /var/www/html/ && rm -r /var/www/html/apna-music/
RUN cd /var/www/html/logic/ && composer require google/apiclient:~2.0
EXPOSE 80:80
CMD [ "sh", "-c", "service apache2 start && service mysql start && /bin/bash" ]
