// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'hotel-booking-system-b6c6b',
    appId: '1:576338829153:web:f34f024dd3b80c91306f20',
    databaseURL: 'https://hotel-booking-system-b6c6b-default-rtdb.firebaseio.com',
    storageBucket: 'hotel-booking-system-b6c6b.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBj5SeV3vNTNkaFX3TSAKWVfew0aALUvdU',
    authDomain: 'hotel-booking-system-b6c6b.firebaseapp.com',
    messagingSenderId: '576338829153',
  },
  production: true,
  baseAPIUrl:'https://hotel-booking-system-b6c6b-default-rtdb.firebaseio.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
