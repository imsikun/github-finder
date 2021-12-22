function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div className='footer footer-center p-5 bg-gray-700 text-primary-content'>
      <p className='inline text-lg'>
        Made with{' '}
        <a
          href='https://beta.reactjs.org'
          className='mx-3 link'
          rel='noreferrer'
          target='_blank'
        >
          React
        </a>
        <a
          href='https://docs.github.com/en/rest'
          rel='noreferrer'
          target={'_blank'}
          className='mx-3 link'
        >
          GithubApi
        </a>
        <a
          href='https://tailwindcss.com/'
          rel='noreferrer'
          target={'_blank'}
          className='mx-3 link'
        >
          TailwindCss
        </a>
        & with love ❤️
      </p>
      <p>Copyright &copy; {footerYear}. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
