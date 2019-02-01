FROM vipinbihari/apna-music:latest
RUN apt-get update && apt-get install git
RUN cd /var/www/html/ && \
git clone https://github.com/vipinbihari/apna-music.git && \
mv apna-music/* ../ && rm -r apna-music

