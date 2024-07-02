/* eslint-disable react/prop-types */
import './ContactInfoCard.css';
import toast, { Toaster } from 'react-hot-toast';




const ContactInfoCard = ({iconUrl,text}) => {

    // const toaster = useToaster();

    const handleCopyText = () => {
      // Create a temporary textarea element to hold the text
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = text;
  
      // Append the textarea to the body
      document.body.appendChild(tempTextArea);
  
      // Select the text inside the textarea
      tempTextArea.select();
  
      // Copy the selected text to the clipboard
      document.execCommand('copy');
  
      // Remove the temporary textarea
      document.body.removeChild(tempTextArea);
  
      // Show copy confirmation using React Hot Toast
      toast.success('Email copied to clipboard');
    };

    // New Code
    const handleOpenLink = () => {
        window.open(text, '_blank');
      };
    
      const handleClick = () => {
        if (text.includes('@')) {
          handleCopyText();
        } else {
          handleOpenLink();
        }
      };

    return (
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={iconUrl} alt={text} />
            </div>
            <p
                onMouseEnter={() => { text && (document.body.style.cursor = 'pointer') }}
                onMouseLeave={() => { text && (document.body.style.cursor = 'default') }}
                onClick={handleClick}
            >
                {text}
            </p>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ContactInfoCard;