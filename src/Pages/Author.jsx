import { ImGithub, ImInstagram, ImLinkedin, ImTwitter } from 'react-icons/im';
import '../index.css';
function Author() {
  return (
    <div className='container mx-auto'>
      <div className='author'>
        <div className='author_body text-center'>
          <div className='intro text-2xl'>
            <h2 className='mb-4'>Hi 👋</h2>
            <p>
              This is {''}
              <a
                href='https://subhakant.netlify.com'
                rel='noreferrer'
                target='_blank'
                className='link'
              >
                Subhakant
              </a>
              . I am a Frontend Developer from India.
            </p>
          </div>
          <div className='social flex flex-row justify-center m-4'>
            <a
              href='https://linkedin.com/in/subh-mishra'
              target='_blank'
              rel='noreferrer'
            >
              <ImLinkedin />
            </a>
            <a
              href='https://github.com/imsikun'
              target='_blank'
              rel='noreferrer'
            >
              <ImGithub />
            </a>
            <a
              href='https://instagram.com/imsikun'
              target='_blank'
              rel='noreferrer'
            >
              <ImInstagram />
            </a>
            <a
              href='https://twitter.com/imsikun1'
              target='_blank'
              rel='noreferrer'
            >
              <ImTwitter />
            </a>
          </div>
          <div className='contact_form'>
            <form
              id='fs-frm'
              name='simple-contact-form'
              accept-charset='utf-8'
              action='https://formspree.io/f/xqkwzgkj'
              method='post'
            >
              <fieldset id='fs-frm-inputs'>
                <label for='full-name'>Full Name</label>
                <input
                  type='text'
                  name='name'
                  id='full-name'
                  placeholder='First and Last'
                  required=''
                />
                <label for='email-address'>Email Address</label>
                <input
                  type='email'
                  name='_replyto'
                  id='email-address'
                  placeholder='email@domain.tld'
                  required=''
                />
                <label for='message'>Message</label>
                <textarea
                  rows='3'
                  name='message'
                  id='message'
                  placeholder='Enter your message'
                  required=''
                ></textarea>
                <input
                  type='hidden'
                  name='_subject'
                  id='email-subject'
                  value='Contact Form Submission'
                />
              </fieldset>
              <div className='text-center'>
                <input type='submit' value='Submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
