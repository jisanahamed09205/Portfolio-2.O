import './Footer.css'
import { Fragment, useState, useEffect } from "react";


const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
      }, []);

    return (
        <Fragment>
            <footer className='footer'>
                <small>
                    <p>{`© ${year}`} - All right reserved by Jisan</p>
                </small>
            </footer>
        </Fragment>
    );
};

export default Footer;