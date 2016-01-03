FROM ubuntu:trusty

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN apt-get update && apt-get install -y \
      apt-transport-https \
      build-essential \
      ca-certificates \
      curl \
      libicu-dev \
      lsb-release \
      python-all \
 && rm -rf /var/lib/apt/lists/*;

RUN   curl -sSL https://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz | tar -xz && \
  cd /node-v4.2.4 && \
  ./configure --prefix=/usr && \
  make && sudo make install
