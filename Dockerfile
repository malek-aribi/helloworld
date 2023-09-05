FROM node:latest

# Install app dependencies

COPY . ./
#RUN apt-get update
RUN apt-get update

RUN npm install

# Bundle app source

EXPOSE 3000
CMD [ npm start ]