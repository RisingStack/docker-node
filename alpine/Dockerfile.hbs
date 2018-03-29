FROM risingstack/alpine-base:{{baseVersion}}

LABEL maintainer="Tamas Kadlecsik <tamas.kadlecsik@risingstack.com>"

RUN curl -sSL https://nodejs.org/dist/{{nodeVersion}}/node-{{nodeVersion}}.tar.gz | tar -xz && \
  cd /node-{{nodeVersion}} && \
  ./configure --prefix=/usr && \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  make out/Makefile && \
  make -j${NPROC} -C out mksnapshot && \
  paxctl -cm out/Release/mksnapshot && \
  make -j${NPROC} && \
  make install && \
  paxctl -cm /usr/bin/node && \
  cd / && \
  rm -rf /node-{{nodeVersion}} \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

ENV NODE_ENV=production
WORKDIR /usr/src/node-app
