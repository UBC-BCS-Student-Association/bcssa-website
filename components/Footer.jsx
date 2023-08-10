import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <div>
        <footer>
          <a
            href='https://www.facebook.com/groups/ubcbcsclub/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='https://www.linkedin.com/groups/14108803/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
            <p>Copyright &copy; 2023 BCSSA</p>
        </footer>
      </div>
    )
  }
