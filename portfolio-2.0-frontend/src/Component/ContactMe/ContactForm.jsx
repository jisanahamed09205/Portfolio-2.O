/* eslint-disable no-unused-vars */

import './ContactForm.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, message } = e.target.elements;

        emailjs.send('service_wghlsus', 'template_ewdxh2i', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value,
        }, 'YL6_OLSzXe5GETMNt')

        // const firstName = e.target.firstName.value;
        // const lastName = e.target.lastName.value;
        // const email = e.target.email.value;
        // const message = e.target.message.value;

        // emailjs.send('service_wghlsus', 'template_ewdxh2i', {
        //     firstName,
        //     lastName,
        //     email,
        //     message,
        // }, 'YL6_OLSzXe5GETMNt')
        .then((response) => {
            toast.success('Your email has been sent successfully!');
            e.target.reset(); // Clear form fields
        })
        .catch((error) => {
            toast.error('There was an error sending your email.');
        });
    };

    return (
        <div className='contact-form-content'>
            <form onSubmit={sendEmail}>
                <div className='name-container'>
                    <input type="text" name='firstName' placeholder='First Name' required />
                    <input type="text" name='lastName' placeholder='Last Name' required />
                </div>
                <input type="email" name='email' placeholder='Email' required/>
                <textarea type="text" name="message" placeholder='Message' rows={3}></textarea>
                <button type="submit">SEND</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;






// MAIN CODE BELOW

// import './ContactForm.css';

// const ContactForm = () => {
//     return (
//         <div className='contact-form-content'>
//             <form>
//                 <div className='name-container'>
//                     <input type="text" name='firstName' placeholder='First Name' required />
//                     <input type="text" name='lastName' placeholder='Last Name' required />
//                 </div>
//                 <input type="email" name='email' placeholder='Email' required/>
//                 <textarea type="text" name="message" placeholder='Message'  rows={3}></textarea>
//                 <button>SEND</button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;