FROM alpine:3.3

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN apk add --update curl make gcc g++ binutils-gold python linux-headers paxctl libgcc libstdc++ && \
  curl -sSL https://nodejs.org/dist/v0.12.9/node-v0.12.9.tar.gz | tar -xz && \
  cd /node-v0.12.9 && \
  ./configure --prefix=/usr && \
  make -j$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  make install && \
  paxctl -cm /usr/bin/node && \
  cd / && \
  apk del curl make gcc g++ binutils-gold python linux-headers paxctl libgcc libstdc++ && \
  rm -rf /etc/ssl /node-v0.12.9 /usr/include \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html
