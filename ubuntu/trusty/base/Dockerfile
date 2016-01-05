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
