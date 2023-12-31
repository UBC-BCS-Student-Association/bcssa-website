import React from "react";
import { useContext, useEffect, useState } from "react";
import { firestore } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import styles from "@/styles/Section.module.css";
import SponsorList from "./SponsorList";
import { Separator } from "./ui/separator";

const monetarySponsors = [
  {
    logo: "/sponsors/ams.png",
    name: "AMS",
    url: "/sponsors/ams",
  },
  {
    logo: "/sponsors/axiom-zen.jpg",
    name: "Axiom Zen",
    url: "/sponsors/axiom-zen",
  },
];

const inKindSponsors = [
  {
    logo: "/sponsors/dapper-labs.png",
    name: "Dapper Labs",
    url: "/sponsors/dapper-labs",
  },
  // {
  //   logo: '/logo-shield.png',
  //   name: 'Microsoft',
  //   url: '/sponsors/microsoft'
  // },
  {
    logo: "/sponsors/sap.jpg",
    name: "SAP",
    url: "/sponsors/sap",
  },
];

export default function Sponsors() {
  return (
    <div id="sponsors" className={styles.sectionContainer}>
      <p className={styles.sectionTitle}>Sponsors</p>
      <p className={styles.sectionDescrioption}>
        Click on the logo to see events they have sponsored
      </p>
      <Separator className={styles.sectionSeparator} />
      <div className={styles.sectionContent}>
        <SponsorList
          monetarySponsors={monetarySponsors}
          inKindSponsors={inKindSponsors}
        />
      </div>
    </div>
  );
}
