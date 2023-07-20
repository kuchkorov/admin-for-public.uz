// import "antd/dist/antd.css";
import {Routes, Route} from 'react-router-dom';

import Header from './components/header/hedaer'
import SideMenu from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

import './App.css';
import Journalspage from './pages/journalspage/Journalspage';
import Addjournal from './pages/addjournal/Addjournal';
import Updatejournal from './pages/updatejournal/Updatejournal';
import Allblog from './pages/allblog/Allblog';
import Addarticle from './pages/addarticle/Addarticle';
import Allarticles from './pages/allarticles/Allarticles';

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", flex: 1, height: "100vh"}}>
      <Header />
      <div style={{display: "flex", flexDirection: "row", flex: 1,}}>
        <SideMenu /> 
        <Content />
      </div>
     <Footer />
    </div>
  );
}



function Content() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/journals" element={<Journalspage />} />
        <Route path="/userslist" element={<div>Users List</div>} />
        <Route path="/newblog" element={<div>Active Users</div>} />
        <Route path="/allblogs" element={<Allblog />} />
        <Route path="/addarticle" element={<Addarticle />} />
        <Route path="/allarticles" element={<Allarticles />} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/settings" element={<div>Profile</div>} />
        <Route path="/addjournal" element={<Addjournal />} />
        <Route path="/updatejournal/:id" element={<Updatejournal />} />

      </Routes>
    </div>
  )
}

export default App;
