import { useState, lazy, Suspense } from 'react';
// import "antd/dist/antd.css";
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header2'
import SideMenu from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

// import HomePage from './pages/home/Home'
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

const HomePage = lazy(() => import('./pages/home/Home'))
const LoginPage = lazy(() => import('./pages/auth/Login'))
const RegistorPage = lazy(() => import('./pages/auth/Registor'))

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  return (
    <>
    <Suspense>
      {/* <Header /> */}
        <div style={{ display: "flex", flexDirection: "row", flex: 1, }}>
          {/* <SideMenu /> */}
            <Routes>
              {
                token ? (
                  <Route path="/" element={<HomePage />} />
                  ) : (
                    <Route path="/" render={() => <LoginPage setToken={setToken}/>} />
                    
                )
              }
              <Route path="/journals" element={<Journalspage />} />
              <Route path="/userslist" element={<div>Users List</div>} />
              <Route path="/newblog" element={<div>Active Users</div>} />
              <Route path="/allblogs" element={<Allblog />} />
              <Route path="/addarticle" element={<Addarticle />} />
              <Route path="/allarticles" element={<Allarticles />} />
              <Route path="/updatearticle" element={<UpdateArticle />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/addjournal" element={<Addjournal />} />
              <Route path="/viewjournal/:id" element={<Viewjournal />} />
              <Route path="/updatejournal/:id" element={<Updatejournal />} />
            </Routes>
        </div>
      {/* <Footer /> */}
      </Suspense>
    </>
   
  )
}

export default App;
