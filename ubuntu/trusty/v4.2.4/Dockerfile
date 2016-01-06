FROM risingstack/trusty-base

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN   curl -sSL https://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz | tar -xz && \
  cd /node-v4.2.4 && \
  ./configure --prefix=/usr && \
  make && sudo make install

WORKDIR /usr/src/node-app
