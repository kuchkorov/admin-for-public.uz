import React from 'react'
import Header from '../../components/header/hedaer'
import SideMenu from '../../components/sidebar/Sidebar'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", flex: 1, height: "100vh"}}>
    <Header />
    <div style={{display: "flex", flexDirection: "row", flex: 1,}}>
      <SideMenu style={{display: "flex", flexDirection: "row", flex: 1,}} /> 
      <Content />
    </div>
   <Footer />
  </div>
  )
}

export default Home