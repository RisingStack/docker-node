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

RUN   curl -sSL https://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz | tar -xz && \
  cd /node-v5.3.0 && \
  ./configure --prefix=/usr && \
  make && sudo make install
