import React, { PropsWithChildren } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export interface ILayout {children: React.ReactNode}

const Layout: React.FunctionComponent<ILayout> = ({children}) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>

  )
}

export default Layout