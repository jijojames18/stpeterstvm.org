Code repository for website [stpeterstvm.org](https://stpeterstvm.org).  
The website is currently deployed at [heroku](https://desolate-atoll-86988.herokuapp.com/)  

## Tech stack
The project is build using react and is bootstrapped from [Create React App](https://github.com/facebook/create-react-app).  
The project heavily utilizes React Bootstrap components for building the User Interface.  

## External Dependencies
1. Google Maps
2. Google Recaptcha.
3. Mail Sending server  

## Environment variables
The application expects a number of variables with the appropriate values to be present inside the environment in which it is running.
* **REACT_APP_GOOGLE_MAPS_API_KEY** : The google maps api key used for showing the location inside the contact page. The api key can be obtained from [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview)
* **REACT_APP_RECAPTCHA_SITE_KEY** : The key for Google Recaptcha library used for showing the captcha inside the contact form. The api key can be obtained from [Google reCaptcha website](https://www.google.com/recaptcha/admin/site)
* **REACT_APP_POST_FEEDBACK_ENDPOINT** : The REST endpoint url to send the contact data when user submits the form.

## Development flow
1. Contact Admin to add you as a member or fork the repository.
2. Clone the repository to your local machine.
3. Copy env.example as .env.
4. Replace the keys inside the .env with the correct values.
5. Run `npm install` and `npm start` to setup the local environment.
6. Make the required fix and test the changes.
7. Raise a Pull Request to the master branch.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Documentation
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)  
* [Google ReCaptcha](https://developers.google.com/recaptcha/intro)

### License
[MIT](https://github.com/jijojames18/stpeterstvm.org/blob/master/LICENSE)

