FROM node:22-alpine

WORKDIR /app

# Allow container to use cached dependencies even after source file changes.
COPY package.json package-lock.json* ./
RUN npm install

EXPOSE 4321

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
