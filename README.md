# Neighborhood-Map-React
A single-page web application, built using the React framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare APIs.

This application follow this [Udacity Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)

After I made a kind of prototype I start the [create-react-app](https://github.com/facebook/create-react-app) to build my initial structure/sources to my local project.

Before I start coding I read some articles about the best way to using **Google Maps API** with ReactJS, follow below:
- first I found this package [react-google-maps](https://tomchentw.github.io/react-google-maps/#installation)
- I read this full article: [Google Maps with React](https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad)
- and some StackOverflow :)

So, after this I got some skills to start my coding, I split my App in small parts or in React as we call  **Components**.


## How to run the project online
Open the online demo [here](http://neighbormap.netlify.com)

## How to run the project in Development Mode
The project uses [Node.js >= 6.x](https://nodejs.org/en/) and the [Create-React-App starter code](https://github.com/facebookincubator/create-react-app).

After Node is installed in your system, follow the below steps.

1. Navigate to the directory where you want to store the app.
2. Clone the repo `git clone https://github.com/jamalhassouni/feand-neighborhood-map-react.git`
3. Now install all modules listed as dependencies in `package.json` by running the command `npm install`
4. Launch the app with this command `npm start`

A new browser window open automatically displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

***NOTE:*** *The service workers for this app will only cache the site when it is in production mode.*
- More information [Here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#offline-first-considerations)

## How to run the project in Production Mode

1. Build the production ready optimised code. `npm run build`
2. Deploy it to [netlify](https://www.netlify.com) by `netlify deploy`
3. Check the online demo [here](http://neighbormap.netlify.com)

## Technology
- ReactJs
- HTML
- CSS
- Foursquare API
- Google Maps API

***NOTE:*** *   Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) and
  [BomSymbols](https://www.iconfinder.com/korawan_m)