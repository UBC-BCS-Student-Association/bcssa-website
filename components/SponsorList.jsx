import React from 'react';
import styles from '@/styles/SponsorList.module.css';

function SponsorIcon({ icon, name, url }) {
  return (
    <a href={url} className={styles.sponsorIcon}>
      <img src={icon} alt={name} />
    </a>
  );
}

function SponsorSection({ sponsors, title }) {
  return (
    <div className={styles.sponsorSection}>
      <h2 className={styles.sponsorTitle}>{title}</h2>
      <div className={styles.sponsorList}>
        {sponsors.map(sponsor => (
          <SponsorIcon key={sponsor.name} {...sponsor} />
        ))}
      </div>
    </div>
  );
}

const SponsorList = ({ monetarySponsors, inKindSponsors }) => {
  return (
    <div className={styles.sponsorContainer}>
      <SponsorSection sponsors={monetarySponsors} title="Monetary Sponsors" />
      <SponsorSection sponsors={inKindSponsors} title="In-Kind Sponsors" />
    </div>
  );
}

export default SponsorList;
