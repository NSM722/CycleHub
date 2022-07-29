# A small responsive frontend web application

The application lists the products(total of 15) available in the marketplace. A user is able to type and search for an item on the search bar. Items with similar letters will appear in a list below the search bar. Once there's input in the search bar, the user will have the option to clear the input and possibly search for a different product that's available.
Kindly note the search is **case-sensitive**.

---

## Requirements

You will need **Node.js** installed in order to get started. The Node Package Manager will allow installation of third party libraries. Therefore download the required version from [node.js.org]("https://nodejs.org/en/")

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- This will install a lightweight development server
- Webpack which will bundle up the files
- Babel which will compile JavaScript code to JSX

---

## Installation of React-Bootstrap

The files are customized with Bootstrap classes and CSS. Install Bootstrap and import it in the index.js file.

I am using a **GitBash Terminal**

```
npm install react-bootstrap bootstrap
```

```
import 'bootstrap/dist/css/bootstrap.css'
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Retool Utilities Tool

To be able to parse the CSV file, I used [Retool Utilities Tool]("https://retool.com/utilities/convert-csv-to-json")
to convert the CSV dump file to JSON data.
Here is a link to the tutorial [Video]("https://www.youtube.com/watch?v=hyV71RJeuOI" "youtube tutorial").
I created a stockData.js file on my src folder wherein I copied the JSON data and edited it using the **Beautify JSON** extension that's installed in my VS code.
However I realized it would be easier for me to generate an API of the data since this option was also available on the Retool utilities site. So here is the API endpoint https://api-generator.retool.com/98pK0J/data

## Testing the App

I added the **--coverage** flag/property to my package.json file at **line 18** to enable me to visualize what percentage of my code is currently covered during testing.
I was able to create a simple test to check whether the span element in the NavBar component was being rendered on the page. To run the test simply head to the terminal and type

```
npm test
```

This test is available in the file

```javascript
App.test.js;
```

**I also use the chrome extension axe DevTools to scan my page and fix any accessibility errors**

## Challenges I faced while working on this task

- I encountered a debugging issue when trying to simply render products from the JSON file/API.
- A png file of the error is available on the root folder. I realized that I was taking quite a lot of time to figure out this error and time being a factor I decided to use a different API.
- Additionally, this is the first challenge I've come across that involves parsing a CSV file, I checked for solutions online and couldn't find an outright solution however I am curious to learn how one solves it.

* It was a fun, challenging and learning experience!!!
