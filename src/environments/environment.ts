// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from '@firebase/app';
import { getAnalytics } from 'firebase/analytics';
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAVWOFxMBbljoGVd9iA-2zalz3FqrwUMP0',
    authDomain: 'kanban-d6ed2.firebaseapp.com',
    projectId: 'kanban-d6ed2',
    storageBucket: 'kanban-d6ed2.appspot.com',
    messagingSenderId: '267450946909',
    appId: '1:267450946909:web:f2bbd79f383d06d019c4b4',
    measurementId: 'G-E4W1P029Y3',
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
