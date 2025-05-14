'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const ContactPage: React.FC = () => {
  return (
    <motion.div
      className={`${poppins.className} min-h-screen flex flex-col items-center justify-center bg-gradient-to-br  px-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo Section */}
      <motion.div
        className="mb-12"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Replace with your SVG logo component or path */}
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={400}
          height={400}
          priority
        />
      </motion.div>

      {/* Contact Header */}
      <motion.h1
        className="text-5xl font-medium text-black mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Contáctanos
      </motion.h1>

      {/* Contact Details */}
      <div className="flex flex-col space-y-6 text-xl text-white">
        <motion.a
          href="tel:+5212211591113"
          className="flex items-center hover:text-red-500 transition-colors"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FiPhone className="mr-4 w-7 h-7" />
          +52 1 (221) 159-1113
        </motion.a>

        <motion.a
          href="mailto:Jorgeespino000@gmail.com"
          className="flex items-center hover:text-red-500 transition-colors"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <FiMail className="mr-4 w-7 h-7" />
          Jorgeespino000@gmail.com
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactPage;
