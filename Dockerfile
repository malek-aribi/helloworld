FROM node:18.16.0

# Install app dependencies
WORKDIR  /node
COPY . ./node
RUN apt-get update
RUN npm int
RUN npm install

# Bundle app source

EXPOSE 3000
CMD [ npm start ]