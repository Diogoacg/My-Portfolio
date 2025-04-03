"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import XIcon from "../../../public/x-icon.png";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-left flex flex-col gap-6"
      >
        <h2 className="text-4xl font-bold gradient-text mb-2">Contact Me</h2>
        <p className="text-[rgb(var(--muted-foreground))] mb-4 max-w-md">
          I&apos;m open to new opportunities and my inbox is always open.
          Whether you have a question or just want to say hello, I&apos;ll do my
          best to respond promptly!
        </p>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-[rgba(var(--primary),0.1)] p-3 rounded-full">
              <EnvelopeIcon className="h-5 w-5 text-[rgb(var(--primary))]" />
            </div>
            <a href="mailto:your-email@example.com" className="text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] transition-colors">
              your-email@example.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-[rgba(var(--primary),0.1)] p-3 rounded-full">
              <PhoneIcon className="h-5 w-5 text-[rgb(var(--primary))]" />
            </div>
            <span className="text-[rgb(var(--foreground))]">+351 XXX XXX XXX</span>
          </div>
        </div>
        
        <div className="socials flex flex-row gap-4 mt-4">
          <Link href="https://github.com/Diogoacg" target="_blank" rel="noopener noreferrer">
            <div className="bg-[rgba(var(--muted),0.2)] p-3 rounded-full hover:bg-[rgba(var(--muted),0.4)] transition-all">
              <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/diogogoncalves22" target="_blank" rel="noopener noreferrer">
            <div className="bg-[rgba(var(--muted),0.2)] p-3 rounded-full hover:bg-[rgba(var(--muted),0.4)] transition-all">
              <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
            </div>
          </Link>
          <Link href="https://x.com/diogoxpg" target="_blank" rel="noopener noreferrer">
            <div className="bg-[rgba(var(--muted),0.2)] p-3 rounded-full hover:bg-[rgba(var(--muted),0.4)] transition-all">
              <Image src={XIcon} alt="Twitter Icon" width={24} height={24} />
            </div>
          </Link>
        </div>
      </motion.div>
      
      
    </section>
  );
};

export default EmailSection;