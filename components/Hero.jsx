import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import sectionStyles from '@/styles/Section.module.css'
import heroStyles from '@/styles/Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'


export default function HeroArden() {
  const router = useRouter();

  const navigateTo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="hero" className={heroStyles.heroContainer}>
        <div className={sectionStyles.sectionContent}>
            <Image src="/logo-layered_cropped.png" alt="Logo" width="600" height="300" />
            <p className={heroStyles.heroText}>
                UBC Bachelor of Computer Science Student Association
            </p>
        </div>
        <Separator className={heroStyles.heroSeparator} />
        <div className={heroStyles.socialIconsList}>
        <FontAwesomeIcon
            icon={faLinkedin}
            onClick={() => navigateTo('https://www.linkedin.com/groups/14108803/')}
            className={heroStyles.socialIcon}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            onClick={() => navigateTo('https://www.facebook.com/groups/ubcbcsclub/')}
            className={heroStyles.socialIcon}
          />
        </div>
    </div>
  )
}
