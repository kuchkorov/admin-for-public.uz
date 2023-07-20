import {useNavigate} from 'react-router-dom';
import { Menu } from 'antd';
import { BiSolidHome, BiSolidDashboard, BiListUl,BiUser, BiLogOut, BiSolidBook } from "react-icons/bi";
import { IoMdSettings} from "react-icons/io";


function SideMenu() {
    const navigate = useNavigate()
    return(
      <div  >
         <Menu onClick={({key})=> {
          if(key === "singout") {
  
          }else {
            navigate(key)
          }
        }}
        
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          {label: "Home", key: "/", icon: <BiSolidHome />},
          {label: "Jurnallar", key: "/journals", icon: <BiSolidDashboard />},
          {label: "Blog", key: "/userslist", icon: <BiListUl />,
          children: [
            {label: "Blog yaratish", key: "/newblog"},
            {label: "Barcha bloglar", key: "/allblogs"},
          ]},
          
          {label: "Maqolalar", key: "/articles", icon: <BiSolidBook />,
          children: [
            {label: "Maqola qo'shish", key: "/addarticle"},
            {label: "Barcha maqolalar", key: "/allarticles"},
          ]},

          {label: "Profile", key: "/profile", icon: <BiUser />},
          {label: "Sozlamalar", key: "/settings", icon: <IoMdSettings />},
          {label: "SignOut", key: "signout", icon: <BiLogOut />, danger: true}
        ]}>
        </Menu>
      </div>
    )
  }
   
  export default SideMenu