import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarWrapper } from './NavbarMenuStyle'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
//import * as menuActions from "../../Redux/menu/menu-actions";

const NavbarMenu = () => {
  const dispatch = useDispatch()
  return (
    <NavbarWrapper>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link
          to="./"
          //onClick={() => dispatch(menuActions.toggleHiddenMenu())}
        >
          Home
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link
          to="./contact"
          //onClick={() => dispatch(menuActions.toggleHiddenMenu())}
        >
          Contacto
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link
          to="./benchmarks"
          //onClick={() => dispatch(menuActions.toggleHiddenMenu())}
        >
          Benchmarks
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link
          to="./userlanding"
          //onClick={() => dispatch(menuActions.toggleHiddenMenu())}
        >
          PlaniWeb
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link
          to="./login"
          //onClick={() => dispatch(menuActions.toggleHiddenMenu())}
        >
          Login
        </Link>
      </motion.div>
    </NavbarWrapper>
  )
}

export default NavbarMenu
