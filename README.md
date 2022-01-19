# Spacestagram 💫

## [Link to Deployed Site](http://b4yc.github.io/spacestagram)

## Overview

This web application allows you to browse pictures from NASA's infamous Astronomy Picture of the Day (APOD), read the background about it, "like" your favourite images to add it to your collection, and share the images with friends!

## Features

- Browse NASA's Picture of the Day by most recently posted
- "Like" images to add to your favourites
- View all your favourited images in the "Your favourites" tab
- Need to take a coffee break from scrolling in space? Go ahead; favourites are saved on the application even if you leave the site!

## Technical Details

This app is built with:

- [React](https://reactjs.org)
- [Shopify Polaris](https://polaris.shopify.com)
- [NASA APOD](https://github.com/nasa/apod-api)

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

## Getting Started

To edit and deploy this project locally, run the following commands:

```bash
git clone https://github.com/b4yc/spacestagram/
cd spacestagram
npm i
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
