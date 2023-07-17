import { initializeApp } from 'firebase/app'
import {
  firebaseConfig,
  actionCodeSettingsVerification,
  actionCodeSettingsForgotPassword,
} from './firebase-config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  query,
  orderBy,
  collection,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)

export const auth = getAuth()
auth.useDeviceLanguage()
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => (auth, provider)

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(() =>
    alert(`Mail de recupero de contraseña enviado a ${email}`)
  )
