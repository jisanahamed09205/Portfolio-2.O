/* eslint-disable react/prop-types */
import './MobileNav.css'

const MobileNav = ({isOpen,toggleMenu}) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    {/* <img className='logo' src="" alt="" /> */}
                    <h3 className='logo'>My Portfolio</h3>
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
                        <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;