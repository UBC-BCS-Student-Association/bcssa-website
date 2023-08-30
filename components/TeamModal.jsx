import React, { useState } from 'react';
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
  const [openDialog, setOpenDialog] = useState(null);

  return (
    <>
    <div className={styles.gridContainer}>
      {membersList.map((member, index) => (
        <div key={member.name}>
          <Dialog>
            <DialogTrigger>
              <div 
                className={styles.triggerContainer}
                onClick={() => setOpenDialog(member.name)}
                style={{ cursor: 'pointer' }}
              >
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
            </DialogTrigger>
            {openDialog === member.name && (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{member.name}</DialogTitle>
                  <DialogDescription>{member.position}</DialogDescription>
                </DialogHeader>
                <Image src={member.imageSrc} alt={member.name} width="250" height="64" />
                <p>{member.content}</p>
                <button onClick={() => setOpenDialog(null)}>Close</button>
              </DialogContent>
            )}
          </Dialog>
        </div>
      ))}
    </div>
    </>
  );
}
