# A small responsive frontend web application

The purpose of this application is to list the top 3 popular products with users in the marketplace. A user is able browse the application and see the top 3 **trending** products

The section that has headings, bike pictures and lorem picsum text is just dummy data acting as placeholders

Data about the e-bikes is available on the root file in JSON format

You are welcome to go ahead and edit the stockData.js file/or API data to determine whether the logic behind the application works!

---

## Requirements

You will need **Node.js** installed in order to get started. The Node Package Manager will allow installation of third party libraries. Therefore download the required version from [node.js.org](https://nodejs.org/en/)

---

## Getting Started with Create React App

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

## Retool Utilities Tool

To be able to parse the CSV file provided in this challenge, I used [Retool Utilities Tool]("https://retool.com/utilities/convert-csv-to-json")
to convert it to JSON data.

Here is a link to the tutorial [Video](https://www.youtube.com/watch?v=hyV71RJeuOI "youtube tutorial").

I created a stockData.js file on my src folder wherein I copied the JSON data and edited it using the **Beautify JSON** extension that's installed in my VS code.

On the same site, one can also generate API data of the CSV dump file So here is the API endpoint https://api-generator.retool.com/98pK0J/data

---

## Testing the App

I added the **--coverage** flag/property to my package.json file at **line 18** to enable me to visualize what percentage of my code is currently covered during testing.

To launch the test runner in the interactive watch mode, simply head to the terminal and type

```
npm test
```

This test is available in the file

```javascript
App.test.js;
```

**I also use the chrome extension axe DevTools to scan my page and fix any accessibility errors**
