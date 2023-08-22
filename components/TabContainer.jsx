import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamContainer from "./TeamContainer"
import styles from "@/styles/TabContainer.module.css";

export default function TabContainer() {
  return (
    <>
    <Tabs className={styles.tabs} defaultValue="tab1">
    <TabsList className={styles.tabsList}>
        <TabsTrigger className={styles.tabsTrigger} value="tab1">Mission</TabsTrigger>
        <TabsTrigger className={styles.tabsTrigger} value="tab2">Principles</TabsTrigger>
        <TabsTrigger className={styles.tabsTrigger} value="tab3">Actions</TabsTrigger>
        <TabsTrigger className={styles.tabsTrigger} value="tab4">Team</TabsTrigger>
    </TabsList>
    <TabsContent className={styles.tabsContent} value="tab1">
      <p class="text-l ...">The Why</p>
      <p>
      The Bachelor of Computer Science Students Association (BCSSA) is a student club for students completing their second degree in the Bachelor of Computer Science (BCS) Program at UBC. The BCSSA provides its members opportunities to accelerate their career transition and enhance their employability. Our goal is to empower our members with technical proficiency and strong interpersonal skills. Our mission is to provide as much support as possible through a challenging career transition. 
      </p>
    </TabsContent>
    <TabsContent className={styles.tabsContent} value="tab2">
      <p class="text-l ...">The What</p>
      <p>
      For our members, the BCSSA aims to foster an equitable, diverse and inclusive community. We strive to provide technical and personal development opportunities, and facilitate engagement with industry and alumni.
      </p>
    </TabsContent>
    <TabsContent className={styles.tabsContent} value="tab3">
      <p class="text-l ...">The How</p>
      <p>
      We engage members by planning social and networking events, technical panels, seminars, workshops, hackathons and datathons and empower students to attend our events through strategic marketing.
      </p>
    </TabsContent>
    <TabsContent className={styles.tabsContent} value="tab4">
      <p class="text-l ...">The Who</p>
      <p>
      All students admitted into the BCS Program are club members of the BCSSA. Our members are mature, high achieving learners that hold a bachelor’s degree in another industry. The members’ diverse backgrounds include and are not limited to, health care, business, arts, engineering and sciences. We do not require students  to pay membership fees and they benefit from all of our events at no cost to them.
      </p>
      <TeamContainer />
    </TabsContent>
    </Tabs>
    </>
  )
}


