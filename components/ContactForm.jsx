import React, { useState } from "react";
import styles from "@/styles/ContactForm.module.css";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialState);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const statusText = await res.text();
      if (res.ok) {
        toast({
          description: (
            <>
              <FontAwesomeIcon icon={faCheck} color="green" /> Your message has
              been sent.
            </>
          ),
        });
        setFormState(initialState);
      } else {
        toast({ description: statusText });
      }
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", description: "Failed to send message." });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.inputField}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formState.name}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formState.email}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputField}
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            value={formState.subject}
          />
        </div>
        <div>
          <textarea
            className={styles.textAreaField}
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={formState.message}
            required
          />
        </div>
        <Separator />
        <Button className={styles.button} variant="outline" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
}
