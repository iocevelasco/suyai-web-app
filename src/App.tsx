import React, { useEffect } from 'react'
import Header from 'ui/components/Header'
import { useDispatch } from 'react-redux'
//import { auth, createUserProfileDocument } from './Firebase/firebase-utils'
import AuthenticatedApp from 'AuthenticatedApp'
import UnauthenticatedApp from 'UnauthenticatedApp'
import { useAuth } from 'utils/hooks/useAuth'
import { AppContainer } from 'App.style'

function App() {
  const [isAuthenticated] = useAuth()

  return (
    <AppContainer>{isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}</AppContainer>
  )
}

export default App
