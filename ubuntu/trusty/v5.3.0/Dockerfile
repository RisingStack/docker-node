FROM risingstack/trusty-base

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN   curl -sSL https://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz | tar -xz && \
  cd /node-v5.3.0 && \
  ./configure --prefix=/usr && \
  make && sudo make install

WORKDIR /usr/src/node-app
