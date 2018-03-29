FROM risingstack/alpine-base:3.7-3.1.0

LABEL maintainer="Tamas Kadlecsik <tamas.kadlecsik@risingstack.com>"

RUN curl -sSL https://nodejs.org/dist/v8.10.0/node-v8.10.0.tar.gz | tar -xz && \
  cd /node-v8.10.0 && \
  ./configure --prefix=/usr && \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  make out/Makefile && \
  make -j${NPROC} -C out mksnapshot && \
  paxctl -cm out/Release/mksnapshot && \
  make -j${NPROC} && \
  make install && \
  paxctl -cm /usr/bin/node && \
  cd / && \
  rm -rf /node-v8.10.0 \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

ENV NODE_ENV=production
WORKDIR /usr/src/node-app
