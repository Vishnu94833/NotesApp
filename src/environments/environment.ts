// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: "AIzaSyCW8OVj3nWY2QpMa1IeHA4ll-asSHEi8lM",
    authDomain: "customer-manager-75be4.firebaseapp.com",
    databaseURL: "https://customer-manager-75be4.firebaseio.com",
    projectId: "customer-manager-75be4",
    storageBucket: "",
    messagingSenderId: "1040521249344",
    appId: "1:1040521249344:web:dd8c5459c979e459a415a5"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
