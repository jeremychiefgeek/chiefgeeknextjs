import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar'

const Default = ({ children }: React.PropsWithChildren<{}>) => {


  return (
    <div>
        <Navbar />
        { children }
    </div>
  )
}

export default Default;