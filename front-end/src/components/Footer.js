import React from "react";



function Footer(props) {
  console.log(props.tweets)
  return <div>
    <div className='text-center p-3 fixed-bottom ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  &copy; {new Date().getFullYear()} Copyright:{' '}
  <a className='text-white' href='https://github.com/Ris345'>
  </a>
</div></div>;
}

export default Footer;
