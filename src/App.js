// import "antd/dist/antd.css";
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header2'
import SideMenu from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

import './App.css';
import Journalspage from './pages/journals/Journalspage';
import Addjournal from './pages/journals/Addjournal';
import Updatejournal from './pages/journals/Updatejournal';
import Allblog from './pages/allblog/Allblog';
import Addarticle from './pages/articles/Addarticle';
import Allarticles from './pages/articles/Allarticles';
import UpdateArticle from './pages/articles/Updatearticle';
import Profile from './pages/profile/Profile';
import Setting from './pages/setting/Setting';
import Viewjournal from './pages/journals/Viewjournal';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100vh" }}>
        <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1, }}>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}



function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/journals" element={<Journalspage />} />
        <Route path="/userslist" element={<div>Users List</div>} />
        <Route path="/newblog" element={<div>Active Users</div>} />
        <Route path="/allblogs" element={<Allblog />} />
        <Route path="/addarticle" element={<Addarticle />} />
        <Route path="/allarticles" element={<Allarticles />} />
        <Route path="//updatearticle" element={<UpdateArticle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/addjournal" element={<Addjournal />} />
        <Route path="/viewjournal" element={<Viewjournal />} />
        <Route path="/updatejournal/:id" element={<Updatejournal />} />

      </Routes>
    </div>
  )
}

export default App;
