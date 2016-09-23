# RisingStack Docker Images

In this repo you can find different Linux distributions with Node.js.

## Tags

The tags has the following format: `X-Y-Z`, where:

* `X` stands for the version of the OS of the base image
* `Y` stands for the Node.js version included in the image
* `Z` stands for general semantic version of this repository

For first it may seem strange / too complex, but with this you can be sure that
you are using immutable Docker images, as we will never overwrite existing tags.

You can find all the images and tags on the [RisingStack Docker Hub](https://hub.docker.com/r/risingstack).

## Usage

```Dockerfile
FROM risingstack/alpine:3.3-v4.3.1-3.0.1

COPY package.json package.json
RUN npm install

# Add your source files
COPY . .
CMD ["npm","start"]
```

The images come with the `NODE_ENV` environment variable set to `production`.

## Alpine-based images

[Alpine linux](http://www.alpinelinux.org/)

* Node.js v4.2.4: `docker pull risingstack/alpine:3.3-v4.2.6-1.1.3`
* Node.js v5.3.0: `docker pull risingstack/alpine:3.3-v5.5.0-1.1.3`
