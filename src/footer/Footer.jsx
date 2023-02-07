import React from 'react'

import { useContext } from 'react'
import { Themecontext } from '../context/context'
const Footer = () => {
let {Theme} = useContext(Themecontext);

  const year = new Date().getFullYear();
let dark=`flex-shrink-0 py-4 bg-dark text-white-50`
let light=`flex-shrink-0 py-4 bg-light text-dark-50`

  return  <footer id="sticky-footer" class={Theme=="light"?light:dark}>
  <div class="container text-center">
    <small>made with ❤️ by <a className="masterBoss" href="https://www.facebook.com/ahmfd22/" target="_blank">AHMED FATHY</a></small>
  </div>
</footer>;
};

export default Footer;