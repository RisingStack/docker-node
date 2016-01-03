# RisingStack Docker Images

## Usage

```Dockerfile
FROM risingstack/alpine:v4.2.4

COPY package.json package.json
RUN npm install

# Add your source files
COPY . .
CMD ["npm","start"]
```

## Ubuntu-based images

* Node.js v4.2.4: `docker pull risingstack/trusty:v4.2.4`
* Node.js v5.3.0: `docker pull risingstack/trusty:v5.3.0`

## Alpine-based images

Alpine Linux is a security-oriented, lightweight Linux distribution
based on musl libc and busybox.

[Alpine linux](http://www.alpinelinux.org/)

* Node.js v4.2.4: `docker pull risingstack/alpine:v4.2.4`
* Node.js v5.3.0: `docker pull risingstack/alpine:v5.3.0`
