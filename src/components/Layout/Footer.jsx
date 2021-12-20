function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <div className='footer footer-center p-5 bg-gray-700 text-primary-content'>
      <p>
        {/* TODO: to put links to each 'react', 'tailwindcss' and put the love emo at the end */}
        Made with React, GithubApi, TailwindCss & with lov
      </p>
      <p>Copyright &copy; {footerYear}. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
