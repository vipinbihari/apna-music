FROM ubuntu
RUN apt-get update && apt install -y apache2 && \
apt install -y mysql-server && \
apt install -y php-fpm php-dev php-mysql php-zip libapache2-mod-php && \
apt install -y composer && \
apt install -y python3-pip && \
pip3 install youtube-dl && \
apt install -y ffmpeg 
