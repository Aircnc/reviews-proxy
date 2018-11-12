FROM node:8.12.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=production

EXPOSE 3000

CMD [ "npm", "start" ]




# how to login to ec2 instance with pem file

# ssh -i review-proxy.pem ec2-user@18.224.94.106