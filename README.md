# Spacestagram 💫

## [Link to Deployed Site](http://b4yc.github.io/spacestagram)

## Overview

This web application allows you to browse pictures from NASA's infamous Astronomy Picture of the Day (APOD), read the background about it, "like" your favourite images to add it to your collection, and share the images with friends!

## Features

- Browse NASA's Picture of the Day endlessly (through pagination) by most recently posted
- "Like" images to add to your favourites
- View all your favourited images in the "Your favourites" tab
- Need to take a coffee break from scrolling through space? Go ahead; favourites are saved on the application even if you leave the site!
- Share button instantly copies the image url to your clipboard
- API calls are memoized for fast loading when re-referencing images

## Technical Details

This app is built with:

- [Typescript](https://www.typescriptlang.org/), for strong typing and error checking
- [React](https://reactjs.org), for rapid prototyping and creating reusable components
- [Redux](https://redux.js.org/), because we love single sources of truth
- [Shopify Polaris](https://polaris.shopify.com), for beautiful and easy styling (and relevant)
- [NASA APOD](https://github.com/nasa/apod-api), for retrieving images that are out of this world
- [npm](https://www.npmjs.com/), for managing the many packages

This app is bootstrapped using [create-react-app](https://github.com/facebook/create-react-app), with additional styling provided by the Shopify Polaris library.

## Testing

This app is tested with:

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

To run unit tests:
```bash
npm run test
```

To run end to end tests:
```bash
npm run test:e2e
```
*Note: end to end tests must be ran with the development server started. See [Getting Started](#getting-started)*

## Accessibility and Mobile Users

This app was built with accesiblity kept in mind, and here are a few things I did to make sure outer space can be loved by all:
- Semantic HTML
- Including aria-labels when necessary
- Followed Polaris' guidelines for accessibiliy when using any components
- Tested through Lighthouse
- Tested through screen reader and keyboard navigation
- Tested in mobile

## Getting Started

To edit and deploy this project locally, follow these steps:

1. retrieve a free API key from NASA [here](https://api.nasa.gov/)
2. clone this repository
```bash
git clone https://github.com/b4yc/spacestagram/
```
3. create a file in the root named `.env`
4. paste this into the file: `REACT_APP_NASA_API_KEY={apikey}` replacing {apikey} with your API key retrieved from NASA
5. navigate to the repository, install packages and get started!
```bash
npm i
npm start
```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
