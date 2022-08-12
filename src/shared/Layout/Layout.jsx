import React from 'react'
import classes from './Layout.module.css'

/** Общий layout приложения */
export const Layout = ({ children }) => (
  <div className={classes.layout}>
    <div className={classes.content}>
      {children}
    </div>
  </div>
)
