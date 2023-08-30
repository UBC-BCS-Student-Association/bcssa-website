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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from "@/styles/TeamModal.module.css";
import { Button } from '@/components/ui/button';

export default function TeamModal({ membersList }) {
  return (
    <>
    <div className={styles.gridContainer}>
      {membersList.map((member, index) => (
        <div key={member.name}>
          <Dialog>
            <DialogTrigger>
              <div className={styles.triggerContainer}>
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
              <DialogContent>
                <div className={styles.contentImageContainer}>
                  <Image src={member.imageSrc} alt={member.name} width="250" height="64" />
                </div>
                <DialogHeader>
                  <DialogDescription>{member.position}</DialogDescription>
                  <DialogTitle>{member.name}</DialogTitle>
                </DialogHeader>
                <p>{member.content}</p>
              </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
    </>
  );
}
