import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { userSessionProps } from 'services/api/Authentication'
import routes from 'routes'
import { useAppDispatch, useAppSelector } from 'services/store'
import { selectIsAuth, userAuth } from 'services/store/slices/userSlice'
import { authTokenKey } from 'utils/constants/tokens'
import { auth } from 'services/api'
import { onAuthStateChanged } from 'firebase/auth'
export const OriginPathnameKey = 'originPathname'
export type LocationState = {
  state?: {
    [OriginPathnameKey]?: string
  }
}

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector(selectIsAuth)

  const { state } = useLocation() as LocationState
  const navigate = useNavigate()
  const actions = useMemo(
    () => ({
      login: () => {
        const user = userSessionProps()
        console.log({ user })
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log({ user })
            return user
          }
          return null
        })
        //dispatch(userAuth(true))
      },
      logout: () => {
        localStorage.removeItem(authTokenKey)
        dispatch(userAuth(false))
        navigate(routes.root.path)
      },
    }),
    [dispatch, navigate, state]
  )

  const authToken = localStorage.getItem(authTokenKey)

  if (authToken && !authState) {
    dispatch(userAuth(true))
  }

  return [authState, actions] as [boolean, typeof actions]
}
