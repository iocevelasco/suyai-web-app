import React, { useEffect } from 'react'
import Header from 'ui/components/Header'
import { useDispatch } from 'react-redux'
//import { auth, createUserProfileDocument } from './Firebase/firebase-utils'
import AuthenticatedApp from 'AuthenticatedApp'
import UnauthenticatedApp from 'UnauthenticatedApp'
import { useAuth } from 'utils/hooks/useAuth'
import { AppContainer } from 'App.style'

// function onAuthStateChange(cb, action) {
//   onAuthStateChanged(auth, async (userAuth) => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth)

//       onSnapshot(userRef, (snapShot) => cb(action({ id: snapShot.id, ...snapShot.data() })))
//     } else {
//       cb(action(null))
//     }
//   })
// }

function App() {
  const dispatch = useDispatch()
  const [isAuthenticated] = useAuth()
  console.log({ isAuthenticated })
  // useEffect(() => {
  //   const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser)
  //   return () => unsuscribe()
  // }, [dispatch])

  return (
    <AppContainer>{isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}</AppContainer>
  )
}

export default App
