FROM node:latest

# Install app dependencies
WORKDIR  /node
COPY . ./node
RUN apt-get update

RUN npm install

# Bundle app source

EXPOSE 3000
CMD [ npm start ]