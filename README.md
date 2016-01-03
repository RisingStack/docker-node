# RisingStack Docker Images

In this repo you can find different Linux distributions with Node.js.

Regarding the tags:

* `vX.Y.Z` stands for the Node.js version which ships with the given images
* `latest` stands for the latest LTS Node.js version

You can find all the images and tags on the [RisingStack Docker Hub](https://hub.docker.com/r/risingstack).

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
