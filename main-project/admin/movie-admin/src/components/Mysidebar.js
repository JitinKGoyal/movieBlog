import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom';

function Mysidebar() {
    const { collapseSidebar } = useProSidebar();
    return (
        <>
            <Sidebar style={{ height: "100vh", boxShadow: "0 0 30px -15px gray" }}  >
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            collapseSidebar();
                        }}>
                        {" "}
                        <h2>Movies</h2>
                    </MenuItem>
                    {/* <MenuItem icon={<HomeOutlinedIcon htmlColor='#0097e3'/>} >Home</MenuItem> */}
                    <MenuItem icon={<PeopleOutlinedIcon htmlColor='#0097e3' />} component={<Link to="/addMovie" />}>Add movie</MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon htmlColor='#0097e3' />} component={<Link to="/movies" />}>All movies</MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon htmlColor='#0097e3' />} component={<Link to="/imageManagement" />}>Images Menagement</MenuItem>
                    {/* <MenuItem icon={<ReceiptOutlinedIcon htmlColor='#0097e3'/>}>Profile</MenuItem> */}
                    {/* <MenuItem icon={<HelpOutlineOutlinedIcon htmlColor='#0097e3'/>}>FAQ</MenuItem> */}
                    {/* <MenuItem icon={<CalendarTodayOutlinedIcon htmlColor='#0097e3'/>}>Calendar</MenuItem> */}
                </Menu>
            </Sidebar>

        </>
    )
}

export default Mysidebar