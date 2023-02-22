import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark p-3 container-fluid text-center text-white fs-5">
        <p>Follow us for updates @myGithubPage</p>
        <hr />
        <p className="mt-2">Copyright &copy; BikEEE LLC 2022</p>
        <a className="text-warning"
          href="http://www.termify.io"
          target="_blank"
          rel="noreferrer"
          id="terms">
          Terms & conditions apply</a>
      </footer>
    </>
  );
}

export default Footer;