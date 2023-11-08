// import React from 'react'
import HeaderLayout from './assets/component/layout/HeaderLayout'
import HeroBanner from './assets/component/ui/HeroBanner'
import Navbar from './assets/component/ui/Navbar'

const App = () => {
  return (
    <>
    <HeaderLayout childComp={<Navbar/>} childComp2={<HeroBanner/>} isBackground={true}/>
    {/* <div className='alt'></div> */}
    </>
  )
}

export default App