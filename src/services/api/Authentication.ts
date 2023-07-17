import { initializeApp } from 'firebase/app'
import {
  firebaseConfig,
  firestore,
  actionCodeSettingsVerification,
  actionCodeSettingsForgotPassword,
} from 'utils/firebase'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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

export const auth = getAuth()
auth.useDeviceLanguage()
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => (auth, provider)

// export const createUser = ({ email, password }: UserType) =>
//   createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>
//     sendEmailVerification(userCredential.user, actionCodeSettingsVerification).then(() => {
//       alert(`Mensaje de verificación enviado al mail ${email}`)
//     })
//   )

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth || !userAuth.emailVerified) return
  const userRef = doc(firestore, `users/${userAuth.uid}`)
  const snapShot = await getDoc(userRef)

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem('username'),
        email,
        photoURL,
        createdAt,
      })
    } catch (error) {
      console.log('Error creating user', message)
    }
  }
  return userRef
}

export const userSessionProps = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user
    }
    return null
  })

export const signInUser = async (user: UserType) => {
  const { email, password } = user
  await signInWithEmailAndPassword(auth, email, password)

  await createUser(user)
}

export const createUser = async ({ email, password, displayName }: UserType) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    sendEmailVerification(userCredential.user, actionCodeSettingsVerification).then(() => {
      alert(`Mensaje de verificación enviado al mail ${email}`)
      localStorage.setItem('username', displayName)
    })
  })
}

export const resetPassword = (email: string) =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(() =>
    alert(`Mail de recupero de contraseña enviado a ${email}`)
  )

export type UserType = {
  email: string
  password: string
  displayName: string
}
