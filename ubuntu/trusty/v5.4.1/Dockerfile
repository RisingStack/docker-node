FROM risingstack/trusty-base

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN   curl -sSL https://nodejs.org/dist/v5.4.1/node-v5.4.1.tar.gz | tar -xz && \
  cd /node-v5.4.1 && \
  ./configure --prefix=/usr && \
  make && sudo make install

WORKDIR /usr/src/node-app
