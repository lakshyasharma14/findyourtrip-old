# FindYourTrip- Find the trip you deserve

A Collection of all the trip organisers in India. Inspect, compare and choose the best one for you.

Live Version here [findyourtrip.in](https://findyourtrip.in)

## Local Setup
 
To connect to DB hosted via planetscale, for access to DB creating a new issue on the repo with you email for which you want access.
* Install planetscale CLI tool from [https://github.com/planetscale/cli](here).
* run: pscale auth login
* run: pscale connect fyt
* This will start a proxy server on 127.0.0.1:3306 

For details [https://docs.planetscale.com/tutorials/connect-any-application](here)

To start the app, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

