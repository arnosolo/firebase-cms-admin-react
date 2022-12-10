import { createContext } from 'react'
import { initializeApp, FirebaseApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth, Auth } from '@firebase/auth'
import { getFirestore, Firestore } from '@firebase/firestore'
import { getStorage, FirebaseStorage } from '@firebase/storage'

interface Props {
  children: JSX.Element
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVuw5EbT6JAIkG4OUj8VAQcYGFCRDrDeE',
  authDomain: 'arno-firebase-cms.firebaseapp.com',
  projectId: 'arno-firebase-cms',
  storageBucket: 'arno-firebase-cms.appspot.com',
  messagingSenderId: '239817032638',
  appId: '1:239817032638:web:7b1046aebe254fbe812fef',
  measurementId: 'G-QFZCMFH3CQ'
}

export const FirebaseContext = createContext<{
  app?: FirebaseApp
  firestore?: Firestore
  auth?: Auth
  storage?: FirebaseStorage
}>({})

export function FirebaseProvider ({ children }: Props): JSX.Element {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // const analytics = getAnalytics(app)
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  return (
    <FirebaseContext.Provider value={{
      firestore,
      auth,
      storage
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
