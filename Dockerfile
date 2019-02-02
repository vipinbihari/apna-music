FROM vipinbihari/apna-music:latest
RUN apt-get update && apt-get install -y
RUN cd /var/www/html/ && git clone https://github.com/vipinbihari/apna-music.git
RUN mv /var/www/html/apna-music/* /var/www/html/ && rm -r /var/www/html/apna-music/
CMD [ "sh", "-c", "service apache2 start && service mysql start && /bin/bash" ]
