# jamstack-ssg-eleventy

This is a basic JAMstack project built with [Eleventy](https://www.11ty.dev/ "Eleventy") as a SSG(static side generator), [Nunjucks](https://mozilla.github.io/nunjucks/ "Nunjucks") as a templating language for JavaScript and [axios](https://github.com/axios/axios "axios"), a HTTP client.

## What is the JAMstack?

JAMstack is a software architecture and philosophy that adheres to the following components: Javascript, APIs, and Markup.

> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers. [[JAMSTACK](https://jamstack.org/ "JAMSTACK")]

## API: The New York Times Developer Network

This project uses the [The New York Times Developer Network](https://developer.nytimes.com/ "The New York Times Developer Network") API.

### Get API key and add to the application

- To run the application get an API key from the [The New York Times Developer Network](https://developer.nytimes.com/ "The New York Times Developer Network"). The use of the API is for free.
- Rename file `sample.env` to `.env` and add your API key.

## Project setup

```
npm install
```

## Run application

```
npm start
```

## Demo on Netlify

[Demo](https://musing-wiles-262a74.netlify.app/ "Demo")
