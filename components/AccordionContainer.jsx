import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import styles from "@/styles/AccordionContainer.module.css";

const accordionData = [
  { trigger: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
  { trigger: "Is it styled?", content: "Yes. It comes with default styles that matches the other component aesthetic." },
  { trigger: "Is it animated?", content: "Yes. Is animated by default, but you can disable it if you prefer." },
]

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
