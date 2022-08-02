import control from '../assets/control.png'
import logo from '../assets/logo.png'
import Chart_fill from '../assets/Chart_fill.png'
import Chat from '../assets/Chat.png'
import User from '../assets/User.png'
import Calendar from '../assets/Calendar.png'
import Search from '../assets/Search.png'
import Chart from '../assets/Chart.png'
import Folder from '../assets/Folder.png'
import Setting from '../assets/Setting.png'
import { useState } from 'react'
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: Chart_fill },
        { title: "Inbox", src: Chat },
        { title: "Accounts", src: User, gap: true },
        { title: "Schedule", src: Calendar },
        { title: "Search", src: Search },
        { title: "Analytics", src: Chart },
        { title: "Files", src: Folder, gap: true },
        { title: "Setting", src: Setting },
    ]
    return (
        <>
            <div className={open ? "sidebar" : "sidebar close"}>
                <img className={open ? "sidebar-control" : "sidebar-control rotate"} src={control} onClick={() => setOpen(!open)} />
                <div className='sidebar-top'>
                    <img className={`sidebar-logo ${!open && "rotate"}`} src={logo} />
                    <h1 className='sidebar-title'>MineDesigner</h1>
                </div>
                <ul className='sidebar-items'>
                    {Menus.map((menu, index) => (
                        <li key={index} className={`sidebar-item ${menu.gap &&  "gap"}`}>
                            <img src={menu.src} />
                            <span>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar