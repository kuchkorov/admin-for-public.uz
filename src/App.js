// import "antd/dist/antd.css";
import {Routes, Route} from 'react-router-dom';

import Header from './components/header/hedaer'
import SideMenu from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

import './App.css';
import Journalspage from './pages/journalspage/Journalspage';
import Addjournal from './pages/addjournal/Addjournal';

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
        <Route path="/activeusers" element={<div>Active Users</div>} />
        <Route path="/disabledusers" element={<div>Disables Users</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/addjournal" element={<Addjournal />} />

      </Routes>
    </div>
  )
}

export default App;
