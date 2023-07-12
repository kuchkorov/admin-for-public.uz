import {useNavigate} from 'react-router-dom';
import { Menu } from 'antd';
import { BiSolidHome, BiSolidDashboard, BiListUl,BiUser, BiLogOut } from "react-icons/bi";


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
          {label: "Users List", key: "/userslist", icon: <BiListUl />,
          children: [
            {label: "Active Users", key: "/activeusers"},
            {label: "Disables Users", key: "/disabledusers"},
          ]},
          {label: "Profile", key: "/profile", icon: <BiUser />},
          {label: "SignOut", key: "signout", icon: <BiLogOut />, danger: true}
        ]}>
        </Menu>
      </div>
    )
  }
   
  export default SideMenu