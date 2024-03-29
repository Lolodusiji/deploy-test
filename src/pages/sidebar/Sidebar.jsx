import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";
import { PiChartPieSliceFill } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileChartFill } from "react-icons/ri";
import { PiChatTeardropTextBold } from "react-icons/pi";
// import {auth} from "../../firebase"
import "./Sidebar.css";
import Header from "../header/Header";
import { useContext } from "react";
import { MainContext } from "../../../utils/MainContext";
// import { signOut } from "firebase/auth";
// import {auth} from '../../firebase'

function sidebar() {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  const [closed, setclosed] = useState(false);
  const [menu, setmenu] = useState(false);
  const { username, setusername } = useContext(MainContext);
  const { email, setemail } = useContext(MainContext);
  // const displayName = localStorage.getItem("user")
  // const navigate = useNavigate()
  // const displayEmail = localStorage.getItem("email")
  // const profilePic = localStorage.getItem('profilePic')

  useEffect(() => {
    const header = document.querySelector(".header");

    const styles = window.getComputedStyle(header);
    // window.onload=()=>{
    const real = header.clientHeight;
    // const headerHeight = styles.height;
    // const paddHeight = styles.paddingTop;
    // const real_height = parseFloat(headerHeight)+( parseFloat(paddHeight)*2)

    // set CSS as a value
    document.documentElement.style.setProperty(
      "--sl-header-height",
      real + "px"
    );

    if (window.innerWidth < 800) {
      setclosed(true);
    }
    // }
    setusername(localStorage.getItem("user"));
    setemail(localStorage.getItem("email"));
  }, []);

  const handleLogOut = () => {
    // signOut(auth)
    // localStorage.clear()
    // navigate('/signup')
  };
  console.log(toggleSidebar);

  return (
    <div className="main-container">
      <Header
        menu={closed}
        active={() => {
          setmenu(!menu);
        }}
        settoggleSidebar={settoggleSidebar}
        toggleSidebar={toggleSidebar}
      />
      <div style={{ display: "flex", flex:"1", position: "relative" }}>
        <Sidebar
          backgroundColor="#131313"
          className={toggleSidebar ? "sidebar sidebar_active" : "sidebar"}
          collapsed={closed == true ? true : false}
          collapsedWidth={0}
        >
          <div className="limited_sidebar">
            <Menu
              menuItemStyles={{
                // button: {

                //     '&:hover': {
                //        backgroundColor: 'green',
                //     },
                // }

                button: ({ level, active, disabled }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      color: active ? "white" : "#9FA8C7",
                      marginTop: ".9rem",
                      marginBottom: ".2rem",
                      backgroundColor: active ? "#2A2D34" : undefined,
                      // fontFamily: "Lexend",
                      borderRadius: active ? "10px" : "",
                      "&:hover": {
                        backgroundColor: "#2A2D34",
                        borderRadius: "10px",
                      },
                    };
                },
              }}
            >
              <MenuItem
                component={<Link to="/" />}
                active={window.location.pathname === "/"}
                icon={
                  <BiSearchAlt2
                    style={{ transform: "rotate(90deg)" }}
                    size={25}
                  />
                }
              >
                Discovery
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard" />}
                active={window.location.pathname === "/dashboard"}
                icon={
                  <MdDashboardCustomize
                    style={{ transform: "rotate(180deg)" }}
                    size={25}
                  />
                }
              >
                {" "}
                Dashboard
              </MenuItem>
              <MenuItem
                component={<Link to="/social" />}
                active={window.location.pathname === "/social"}
                icon={<PiChartLineUpBold size={25} />}
              >
                {" "}
                Social
              </MenuItem>
              <MenuItem
                component={<Link to="/segmentation" />}
                active={window.location.pathname === "/segmentation"}
                icon={<BsFillPersonFill size={25} />}
              >
                {" "}
                Segmentation
              </MenuItem>
              <MenuItem
                component={<Link to="/competitors" />}
                active={window.location.pathname === "/competitors"}
                icon={<PiChartPieSliceFill size={25} />}
              >
                {" "}
                Competitors{" "}
              </MenuItem>
              <MenuItem
                component={<Link to="/channels" />}
                active={window.location.pathname === "/channels"}
                icon={<RiFileChartFill size={25} />}
              >
                {" "}
                Channels
              </MenuItem>
            </Menu>
            {/* <button onClick={handleLogOut} style={{color: 'red', width: '100%'}}>Log out</button> */}
            <div className="Group-info">
              <Menu
                menuItemStyles={{
                  // button: {

                  //     '&:hover': {
                  //        backgroundColor: 'green',
                  //     },
                  // },

                  button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                      return {
                        color: active ? "white" : "#9FA8C7",
                        marginTop: ".9rem",
                        marginBottom: ".2rem",
                        backgroundColor: active ? "#2A2D34" : undefined,
                        borderRadius: active ? "10px" : "",
                        "&:hover": {
                          backgroundColor: "#2A2D34",
                          borderRadius: "10px",
                          // fontFamily: "Lexend",
                        },
                      };
                  },
                }}
              >
                <MenuItem
                  className="Support"
                  component={<Link to="/support" />}
                  active={window.location.pathname === "/support"}
                  icon={<PiChatTeardropTextBold size={25} />}
                >
                  {" "}
                  Support
                </MenuItem>
              </Menu>
              {closed == false && (
                <div className="user_info">
                  <div className="user_img">
                    {/* <img src={profilePic} alt="" /> */}
                    <div className="user_status">Legacy User</div>
                  </div>

                  <div className="user_data">
                    {/* <h3>{displayName}</h3> */}
                    {/* <h3>Josh Willer</h3> */}
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#E9E9E9",
                        fontWeight: "300",
                      }}
                    >
                      {/* {displayEmail?.length > 25
                  ? `${displayEmail?.slice(0, 25)}...`
                  : displayEmail} */}
                      {/* {displayEmail} */}
                    </p>
                    {/* <p style={{fontSize:"10px",color:"#E9E9E9",fontWeight:"300"}}>joshwiller@gmail.com</p> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Sidebar>
        {menu == true && (
          <div style={{ position: "absolute", top: "0", right: "-1px" }}>
            <Sidebar backgroundColor="#131313" className="sidebar">
              <div className="limited_sidebar">
                <Menu
                  menuItemStyles={{
                    // button: {

                    //     '&:hover': {
                    //        backgroundColor: 'green',
                    //     },
                    // },

                    button: ({ level, active, disabled }) => {
                      // only apply styles on first level elements of the tree
                      if (level === 0)
                        return {
                          color: active ? "white" : "#9FA8C7",
                          backgroundColor: active ? "#2A2D34" : undefined,
                          "&:hover": {
                            backgroundColor: "#2A2D34",
                            borderRadius: "10px",
                          },
                        };
                    },
                  }}
                >
                  <MenuItem
                    component={<Link to="/" />}
                    active={window.location.pathname === "/"}
                    icon={
                      <BiSearchAlt2
                        style={{ transform: "rotate(90deg)" }}
                        size={20}
                      />
                    }
                  >
                    Discovery
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/dashboard" />}
                    active={window.location.pathname === "/dashboard"}
                    icon={
                      <MdDashboardCustomize
                        style={{ transform: "rotate(180deg)" }}
                        size={20}
                      />
                    }
                  >
                    {" "}
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/social" />}
                    active={window.location.pathname === "/social"}
                    icon={<PiChartLineUpBold size={20} />}
                  >
                    {" "}
                    Social
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/segmentation" />}
                    active={window.location.pathname === "/segmentation"}
                    icon={<BsFillPersonFill size={20} />}
                  >
                    {" "}
                    Segmentation
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/competitors" />}
                    active={window.location.pathname === "/competitors"}
                    icon={<PiChartPieSliceFill size={20} />}
                  >
                    {" "}
                    Competitors{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/channels" />}
                    active={window.location.pathname === "/channels"}
                    icon={<RiFileChartFill size={20} />}
                  >
                    {" "}
                    Channels
                  </MenuItem>
                </Menu>

                <div className="user_info">
                  <div className="user_img">
                    <img src="/imgs/user.png" alt="" />
                    <div className="user_status">Legacy User</div>
                  </div>

                  <div className="user_data">
                    <h3>{username.username}</h3>
                    {/* <h3>Josh Willer</h3> */}
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#E9E9E9",
                        fontWeight: "300",
                      }}
                    >
                      {email}
                    </p>
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default sidebar;
