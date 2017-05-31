FROM risingstack/alpine-base:3.3-2.0.0

MAINTAINER Gergely Nemeth <gergely@risingstack.com>

RUN curl -sSL https://nodejs.org/dist/v6.10.3/node-v6.10.3.tar.gz | tar -xz && \
  cd /node-v6.10.3 && \
  ./configure --prefix=/usr && \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  make out/Makefile && \
  make -j${NPROC} -C out mksnapshot && \
  paxctl -cm out/Release/mksnapshot && \
  make -j${NPROC} && \
  make install && \
  paxctl -cm /usr/bin/node && \
  cd / && \
  rm -rf /node-v6.10.3 \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

ENV NODE_ENV=production
WORKDIR /usr/src/node-app
