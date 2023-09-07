import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamContainer from "./TeamContainer"
import styles from "@/styles/TabContainer.module.css";

const tabDetails = [
  {
    value: "tab1",
    title: "Our Mission",
    contentTitle: "The Why",
    description: `The Bachelor of Computer Science Students Association (BCSSA) is a student club for students completing their second degree in the Bachelor of Computer Science (BCS) Program at UBC. 
    The BCSSA provides its members opportunities to accelerate their career transition and enhance their employability. 
    Our goal is to empower our members with technical proficiency and strong interpersonal skills. 
    Our mission is to provide as much support as possible through a challenging career transition.`,
  },
  {
    value: "tab2",
    title: "Our Principles",
    contentTitle: "The What",
    description: `For our members, the BCSSA aims to foster an equitable, diverse and inclusive community. 
    We strive to provide technical and personal development opportunities, and facilitate engagement with industry and alumni.`,
  },
  {
    value: "tab3",
    title: "Our Actions",
    contentTitle: "The How",
    description: `We engage members by planning social and networking events, technical panels, seminars, workshops, hackathons and datathons and empower students to attend our events through strategic marketing.`,
  },
  {
    value: "tab4",
    title: "Our Team",
    contentTitle: "The Who",
    description: `All students admitted into the BCS Program are club members of the BCSSA. Our members are mature, high achieving learners that hold a bachelor’s degree in another industry. The members’ diverse backgrounds include and are not limited to, health care, business, arts, engineering and sciences. We do not require students  to pay membership fees and they benefit from all of our events at no cost to them.`,
    extraComponent: <TeamContainer />
  },
];


export default function TabContainer() {
  return (
    <>
    <Tabs className={styles.tabs} defaultValue="tab1">
      <TabsList className={styles.tabsList}>
        {tabDetails.map((tab, index) => (
          <TabsTrigger key={index} className={styles.tabsTrigger} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabDetails.map((tab, index) => (
        <TabsContent key={index} value={tab.value}>
          <div className={styles.contentWrapper}>
            {/* <p className={styles.tabsContentTitle}>
              <span className={styles.yellowBrace}>{"{"}</span>
              {tab.contentTitle}
              <span className={styles.yellowBraceEnd}>{"}"}</span>
            </p> */}
            {/* <div className={styles.rightContent}> */}
              <p className={styles.tabsContentDescription}>{tab.description}</p>
              {tab.extraComponent}
            {/* </div> */}
          </div>
        </TabsContent>
      ))}
    </Tabs>
    </>
  )
}


