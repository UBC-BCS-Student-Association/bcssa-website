import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import styles from "@/styles/AccordionContainer.module.css";

const accordionData = [
  { 
    trigger: "How can I join BCSSA?", 
    content: "You are automatically a member of BCSSA and enjoy BCSSA benefits if you are enrolled in the BCS 2nd Degree Program in UBC." 
  },
  { 
    trigger: "When and where does the club meet?", 
    content: "We typically meet weekly or bi-weekly, please contact us here (link to contact page) if you want to join our meetings." 
  },
  { 
    trigger: "What types of activities/events does the club organize?", 
    content: "We host hackathons, office tours, workshops, guest speakers, and social gatherings for our members." 
  },
  { 
    trigger: "Can I join even if I'm not enrolled in the 2nd-Degree BCS Program?", 
    content: "No, unfortunately, this student club only serves students who are enrolled in the 2nd-Degree BCS Program." 
  },
  { 
    trigger: "How can I get involved in leadership positions within the club?", 
    content: "Feel free to reach out to our executive team if you’re interested in getting involved with the club. We always welcome those who are eager to get involved!" 
  },
  { 
    trigger: "What are the benefits of joining the club?", 
    content: "This question outlines the advantages of becoming a member, such as networking opportunities, skill development, and social connections." 
  },
  { 
    trigger: "Is there a membership fee, and how is it used?", 
    content: "There are no fees to be a member." 
  },
  { 
    trigger: "How can I stay updated on club activities and announcements?", 
    content: "For large events, we announce them via UBC Email systems that are sent directly to your student emails. We also have an event calendar here (link to event calendar)." 
  },
  { 
    trigger: "Can I suggest new ideas or propose events for the club?", 
    content: <>You can reach out to us with your ideas <a href="/#contact" className={styles.clickableLink}>here</a>!</>
  },
  { 
    trigger: "How can I contact the club for further inquiries?", 
    content: <>Please reach out to us <a href="/#contact" className={styles.clickableLink}>here</a>!</>
  }
];


export function AccordionContainer() {
  return (
    <Accordion type="multiple" collapsible className={styles.accordionContainer}>
      {accordionData.map((item, index) => (
        <AccordionItem key={`item-${index}`} value={`item-${index}`} className={styles.accordionItem}>
          <AccordionTrigger className={styles.accordionTrigger}>{item.trigger}</AccordionTrigger>
          <AccordionContent className={styles.accordionContent}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
