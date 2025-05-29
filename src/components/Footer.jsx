
    import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glassmorphic py-8 mt-16 border-t border-border/20"
    >
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} Kelompok Belajar "Suka Maju". Hak Cipta Dilindungi.</p>
        <p className="text-xs mt-1">Dibuat dengan ❤️ menggunakan React & TailwindCSS.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
  