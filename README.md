# RisingStack Docker Images

## Usage

```Dockerfile
FROM risingstack/alpine:4.2.4

COPY package.json package.json
RUN npm install

# Add your source files
COPY . .
CMD ["npm","start"]
```
