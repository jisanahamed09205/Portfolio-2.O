import { useState } from 'react';
import  './Navbar.css'
import { BsMenuButtonWideFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import MobileNav from './MobileNav/MobileNav';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu =() =>{
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <MobileNav toggleMenu={toggleMenu} isOpen={openMenu}/>
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    {/* <img className='logo' src="" alt="" /> */}
                    <h3 className='logo'>Jisan Molla</h3>
                    <ul>
                        <li>
                            <a className='menu-item' href="#hero">Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#skills'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#projects'>My Projects</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#contact'>Contact Me</a>
                        </li>
                        {/* <button className='contact-btn' onClick={()=>{}}>Hire Me</button> */}
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        
                        {openMenu ? <IoIosCloseCircleOutline style={{fontSize: "1.8rem"}}/> : <BsMenuButtonWideFill style={{fontSize: "1.8rem"}}/>}
                        {/* <span className={'material-symbols-outlined'} style={{fontSize: "1.8rem"}}>menu</span> */}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;