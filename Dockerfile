FROM ubuntu
RUN apt-get update && apt install apchae2 && \
apt install mysql-server && \
apt install php-fpm php-dev php-mysql php-zip libapache2-mod-php && \
apt install composer && \
apt install python3-pip && \
pip3 install youtube-dl && \
apt install ffmpeg 
