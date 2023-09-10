import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import styles from "@/styles/TeamModal.module.css";

export default function TeamModal({ membersList }) {

  const [scrollY, setScrollY] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const saveScroll = () => {
    setScrollY(window.scrollY);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      window.scrollTo(0, scrollY);
    }
  }, [isDialogOpen]);

  return (
    <>
    <div className={styles.gridContainer}>
      {membersList.map((member, index) => (
        <div key={member.name}>
          <Dialog onOpenChange={closeDialog}>
            <div className={styles.triggerContainer}>
              <DialogTrigger style={{ width: '85%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={styles.triggerButton} onClick={saveScroll}>
                  <div className={styles.circleWrapper}>
                    <div className={styles.roundImage}>
                      <Image src={member.imageSrc} alt={member.name} layout="fill" objectFit="cover" />
                    </div>
                  </div>
                  <div className={styles.textContainer}>
                    <p className={styles.memberPosition}>
                      {member.position}
                    </p>
                    <p className={styles.memberName}>
                      {member.name}
                    </p>
                    {/* <br /> */}
                    {/* {member.name} */}
                  </div>
                </div>
              </DialogTrigger>
            </div>
              <DialogContent style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                <div className={styles.contentImageContainer}>
                  <Image src={member.imageSrc} alt={member.name} width="300" height="200" />
                </div>
                <DialogHeader>
                  <DialogDescription>{member.position}</DialogDescription>
                  <DialogTitle>{member.name}</DialogTitle>
                </DialogHeader>
                <div className={styles.contentContainer}>
                  <p>{member.content}</p>
                </div>
              </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
    </>
  );
}
