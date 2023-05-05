import React from 'react'
import { HeaderWrapper } from './Header.style'
import { Link } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import { useDispatch } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import routes from 'routes'
const Header = () => {
  const dispatch = useDispatch()
  return (
    <HeaderWrapper>
      <Navbar />
      <Link to={routes.root.path}>
        <Logo />
      </Link>
    </HeaderWrapper>
  )
}

export default Header
