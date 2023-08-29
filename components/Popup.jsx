   import React from 'react'
import Image from 'next/image'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import styles from "@/styles/Popup.module.css"

export default function Popup({ membersList }) {
  return (
    <>
    <div className={styles.gridContainer}>
      {membersList.map(member => (
        <Popover className={styles.popover} key={member.name}>
          <PopoverTrigger>
            <div className={styles.triggerContainer}>
              {/* <div className={styles.roundImage}>
                <Image src={member.imageSrc} alt={member.name} layout="fill" objectFit="cover" />
              </div> */}
              <div className={styles.diamondWrapper}>
                <div className={styles.roundImage}>
                    <Image src={member.imageSrc} alt={member.name} layout="fill" objectFit="cover" />
                </div>
              </div>

              <div className={styles.textContainer}>
                {member.position}
                <br />
                {member.name}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className={styles.popoverContent}>
            <div className={styles.contentImageContainer}>
              <Image src={member.imageSrc} alt={member.name} width="250" height="64" />
            </div>
              {member.position}
              <br />
              {member.name}
              <br />
              {member.content}
          </PopoverContent>
        </Popover>
      ))}
    </div>
    </>
  );
}