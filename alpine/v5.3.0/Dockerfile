FROM risingstack/alpine-base

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN curl -sSL https://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz | tar -xz && \
  cd /node-v5.3.0 && \
  ./configure --prefix=/usr && \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  make out/Makefile && \
  make -j${NPROC} -C out mksnapshot && \
  paxctl -cm out/Release/mksnapshot && \
  make -j${NPROC} && \
  make install && \
  paxctl -cm /usr/bin/node && \
  cd / && \
  rm -rf /etc/ssl /node-v4.2.4 \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

WORKDIR /usr/src/node-app
