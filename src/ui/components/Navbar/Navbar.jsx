import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavbarWrapper, UserNavStyled, UserContainerStyled, SpanStyled } from './NavbarStyle'
import { motion } from 'framer-motion'
import routes from 'routes'
const Navbar = () => {
  const currentUser = false
  const navigate = useNavigate()
  return (
    <NavbarWrapper>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: '1.2rem' }} to={routes.root.path}>
          Home
        </Link>
      </motion.div>
      <UserNavStyled>
        <UserContainerStyled onClick={() => navigate(routes.login.path)}>
          <SpanStyled>{currentUser ? `${currentUser.displayName}` : 'Inicia Sesión'}</SpanStyled>
        </UserContainerStyled>
      </UserNavStyled>
    </NavbarWrapper>
  )
}

export default Navbar
