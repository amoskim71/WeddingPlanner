# WeddingPlanner
An app to help people plan their weddings.

## Setup

* Install [Ionic](https://ionicframework.com/) using `npm install -g ionic@latest`. This app was built on version 3.20.0
* Run `npm install` to make sure all dependencies from `package.json` are installed
* Because the app uses the [Foursquare API](https://developer.foursquare.com), you will have to create a developer account to get a client ID and client secret. Create a new file called `config.ts` in the `src` folder, and add the following code:
    ```
    export const foursquareConfig = {
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET"
    };
    ```

## Serving the app in the browser
* After setup, serve the app by running `ionic serve` in the top-level directory. The console should tell you which port the app is listening to, so just go to `localhost:<port>`

## Deploying to device
* `ionic cordova run <device_os>`, where <device_os> would be `android` or `ios`


