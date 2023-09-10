import React from 'react'
import TeamModal from './TeamModal';
import styles from "@/styles/TabContainer.module.css";

const teamMembers = [
  {
    imageSrc: "/team/DSC04382.jpg",
    position: "President",
    name: "Chloe Van",
    content: "After obtaining my BSc in Pharmacy from UBC, I worked as a pharmacist for 4.5 years before embarking on a career change and enrolling in the BCS program in 2022. My decision to switch careers is fueled by my desire to be a part of the hands-on innovation I wish to see, which I believe is crucial for advancing the pharmacy profession and beyond. Outside of work and studies, I’m a huge foodie, travel addict, and music explorer. So although UBC and Vancouver are home I have many adventures we can chat about if you’re interested!"
  },
  {
    imageSrc: "/team/DSC04385.jpg",
    position: "Vice President",
    name: "Colleen Rideout",
    content: "I worked for 5 years in the real estate industry before completing my Bachelor of Arts in Philosophy & Psychology at UBC (attended 2009-2012, 2018-2020). I decided to pursue a second degree in Computer Science to learn more about data collection and processing for applications in psychological research."
  },
  {
    imageSrc: "/team/DSC04392.jpg",
    position: "Treasurer",
    name: "Oliver Luo",
    content: "My previous experience is in the med-tech industry and my first degree is in mechatronics at SFU. In my free time, I tinker with 3D printers and build fun mechanical projects."
  },
  {
    imageSrc: "/team/DSC04395.jpg",
    position: "Social Coordinator",
    name: "Jonah Curl",
    content: "I completed my first degree in Chemistry at the University of Alberta in Edmonton, then did a year of Pharmacy at UBC before realizing that my creativity and interests are more aligned with Computer Science and Software Development. You can often find me skiing or hiking in the mountains or playing volleyball in my free time. I am also an experienced Tutor and Teaching Assistant so do not hesitate to ask for help if you see me in the lounge or in class. :)"
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Webmaster",
    name: "Arden Choi",
    content: ""
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Webmaster",
    name: "Andy Hu",
    content: ""
  },
];

const committeeMembers = [
  {
    imageSrc: "/logo-shield.png",
    position: "Social Committee",
    name: "Christine Anderson",
    content: ""
  },
  {
    imageSrc: "/team/DSC04409.jpg",
    position: "Social Committee",
    name: "Sangita Dutta",
    content: ""
  },
  {
    imageSrc: "/team/DSC04397.jpg",
    position: "Social Committee",
    name: "Kashish Garg",
    content: ""
  },
  {
    imageSrc: "/team/DSC04402.jpg",
    position: "Social Committee",
    name: "Phillip Tellier",
    content: ""
  },
  {
    imageSrc: "/team/DSC04407.jpg",
    position: "Social Committee",
    name: "Helen Zhou",
    content: ""
  },
];
  
export default function TeamContainer() {
  return (
    <>
      <h2 className={styles.teamTitle}>BCS Student Association</h2>
      <TeamModal membersList={teamMembers} />
      <h2 className={styles.teamTitle}>Social Committee</h2>
      <p className={styles.tabsContentDescription}>
        The BCS Student Association oversees the Social Committee, composed of volunteers who help plan social events throughout the school year. Working closely with the Social Coordinator, they are instrumental in making the day-of tasks run smoothly. In addition to social events, they help with assigned tasks related to the BCS Hackathon, our largest event of the year.
      </p>
      <TeamModal membersList={committeeMembers} />
    </>
  )
}
