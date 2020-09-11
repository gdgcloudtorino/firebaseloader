import admin from 'firebase-admin';
import {readFileSync} from "fs"
// eslint-disable-next-line import/no-unresolved
import  serviceAccount from './serviceAccount.json';
let firestore = null;
export function initializeFirebase() {
  return new Promise((resolve) => {
    const firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
    });
    firestore = admin.firestore();
    resolve(firebaseApp);
  });
}

export { firestore };
