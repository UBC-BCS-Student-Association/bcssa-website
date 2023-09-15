import React from 'react'
import Link from 'next/link';
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
    content: <>We typically meet weekly, please contact us <Link href="/#contact"><span className={styles.clickableLink}>here</span></Link> if you want to join our meetings.</>
  },
  { 
    trigger: "What types of activities/events does the club organize?", 
    content: "We host hackathons, office tours, workshops, guest speakers, social gatherings and mentorship program(s) for our members." 
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
    trigger: "What are the benefits of participating in club events?", 
    content: "Participating in club events offers the chance to expand your network, hone your skills, and build meaningful social relationships." 
  },
  { 
    trigger: "Is there a membership fee, and how is it used?", 
    content: "There are no fees to be a member." 
  },
  { 
    trigger: "How can I stay updated on club activities and announcements?", 
    content: <>For large events, we announce them via UBC Email systems that are sent directly to your student emails. For social events, you can find information in our Facebook group or our event calendar <Link href="/#events"><span className={styles.clickableLink}>here</span></Link>.</>
  },
  { 
    trigger: "Can I suggest new ideas or propose events for the club?", 
    content: <>You can reach out to us with your ideas <Link href="/#contact"><span className={styles.clickableLink}>here</span></Link>!</>
  },
  { 
    trigger: "How can I contact the club for further inquiries?", 
    content: <>Please reach out to us <Link href="/#contact"><span className={styles.clickableLink}>here</span></Link>!</>
  },
];


// export function AccordionContainer() {
//   return (
//       <Accordion type="multiple" collapsible className={styles.accordionContainer}>
//         {accordionData.map((item, index) => (
//           <div className={styles.itemWrapper} key={`wrapper-${index}`}>
//           <AccordionItem  className={styles.accordionItem} key={`item-${index}`} value={`item-${index}`}>
//             <AccordionTrigger className={styles.accordionTrigger}>{item.trigger}</AccordionTrigger>
//             <AccordionContent className={styles.accordionContent}>{item.content}</AccordionContent>
//           </AccordionItem>
//           </div>
//         ))}
//       </Accordion>
//   )
// }

export function AccordionContainer() {
  const firstHalf = accordionData.slice(0, Math.ceil(accordionData.length / 2));
  const secondHalf = accordionData.slice(Math.ceil(accordionData.length / 2));
  
  return (
    <div className={styles.accordionContainer}>
        <Accordion type="multiple" collapsible>
          {firstHalf.map((item, index) => (
            <AccordionItem key={`item-${index}`} value={`item-${index}`}>
              <AccordionTrigger className={styles.accordionTrigger}>{item.trigger}</AccordionTrigger>
              <AccordionContent className={styles.accordionContent}>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="multiple" collapsible>
          {secondHalf.map((item, index) => (
            <AccordionItem key={`item-${index}`} value={`item-${index}`}>
              <AccordionTrigger className={styles.accordionTrigger}>{item.trigger}</AccordionTrigger>
              <AccordionContent className={styles.accordionContent}>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </div>
  );
}