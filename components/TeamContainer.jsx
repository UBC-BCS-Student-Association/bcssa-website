import React from "react";
import TeamModal from "./TeamModal";
import styles from "@/styles/TabContainer.module.css";

const teamMembers = [
  {
    imageSrc: "/logo-shield.png",
    position: "President",
    name: "Bilal Suboor",
    content:
      "",
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Vice President",
    name: "Charlie Chen",
    content:
      "",
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Treasurer",
    name: "Mitchell Polley",
    content:
      "",
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Social Coordinator",
    name: "Hedie Mahmoudian",
    content:
      "",
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Webmaster",
    name: "Arden Choi",
    content:
      "I began my academic journey in Psychology with a focus on neuroscience. While I considered graduate school, I soon realized my passion was somewhere more hands-on and directly connected with everyday applications. This led me to Computer Science, blending perfectly with my love for math and logic. It's been an exciting journey ever since, constantly learning and creating new things. This website is one of the projects I've built from scratch while learning about new tech stack. If you have any feedback or suggestions about the site, please reach out!",
  },
  {
    imageSrc: "/logo-shield.png",
    position: "Webmaster",
    name: "Andy Hu",
    content: "",
  },
];

const committeeMembers = [
  {
    imageSrc: "/logo-shield.png",
    position: "Social Committee",
    name: "Christine Anderson",
    content: "",
  },
  {
    imageSrc: "/team/DSC04409.jpg",
    position: "Social Committee",
    name: "Sangita Dutta",
    content: "",
  },
  {
    imageSrc: "/team/DSC04397.jpg",
    position: "Social Committee",
    name: "Kashish Garg",
    content: "",
  },
  {
    imageSrc: "/team/DSC04402.jpg",
    position: "Social Committee",
    name: "Phillip Tellier",
    content: "",
  },
  {
    imageSrc: "/team/DSC04407.jpg",
    position: "Social Committee",
    name: "Helen Zhou",
    content: "",
  },
];

export default function TeamContainer() {
  return (
    <>
      <h2 className={styles.teamTitle}>BCS Student Association</h2>
      <TeamModal membersList={teamMembers} />
      <h2 className={styles.teamTitle}>Social Committee</h2>
      <p className={styles.tabsContentDescription}>
        The BCS Student Association oversees the Social Committee, composed of
        volunteers who help plan social events throughout the school year.
        Working closely with the Social Coordinator, they are instrumental in
        making the day-of tasks run smoothly. In addition to social events, they
        help with assigned tasks related to the BCS Hackathon, our largest event
        of the year.
      </p>
      <TeamModal membersList={committeeMembers} />
    </>
  );
}
