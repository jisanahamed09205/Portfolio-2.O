import './ContactMe.css';
import email from '../../assets/images/email.png'
import github from '../../assets/images/github.png'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <section id='contact' className='contact-container'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{flex: 1}}>
                    <ContactInfoCard iconUrl={email} text="jisanmolla.dev@gmail.com"></ContactInfoCard>
                    <ContactInfoCard iconUrl={github} text="https://github.com/jisanahamed09205"></ContactInfoCard>
                </div>
                <div style={{flex: 1}}>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;