import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const members = [
  {
    name: 'Ahmad Abiyyu Razan',
    role: 'Developer, Editor-in-Chief', 
    avatarText: 'AR',
    description: 'NPM : 2410631170003',
    socials: { linkedin: '', github: '' },
    image: '/images/ahmad_abiyyu_razan.jpg',
  },
  {
    name: 'Dede Firdaus',
    role: 'Developer',
    avatarText: 'DF',
    description: 'NPM : 2410631170065',
    socials: { linkedin: '', github: '' },
    image: '/images/dede_firdaus.jpg',
  },
  {
    name: 'Kharisma Teguh Wijaya',
    role: 'Editor',
    avatarText: 'AM',
    description: 'NPM : 2410631170125',
    socials: { linkedin: '', github: '' },
    image: '/images/kharisma_teguh.jpg',
  },
   {
    name: 'M. Alfi Maulana Fattah',
    role: 'Editor',
    avatarText: 'KT',
    description: 'NPM : 2410631170033',
    socials: { linkedin: '', github: '' },
    image: '/images/alfi_maulana.jpg',
  },
  {
    name: 'Zhundy Miftahulfalah Ashshidqy',
    role: 'Researcher',
    avatarText: 'ZM',
    description: 'NPM : 2410631170121',
    socials: { linkedin: '', github: '' },
    image: '/images/zhundy_miftahul.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  },
};

const MembersPage = () => {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity:0, y: -20 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary tracking-tight">Tim Kami</h1>
        <p className="mt-2 text-lg text-muted-foreground">Kenali orang-orang hebat di balik proyek ini.</p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {members.map((member, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col sm:flex-row items-center sm:items-start p-6 space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-primary/20 transition-shadow duration-300 glassmorphic">
              <Avatar className="h-24 w-24 sm:h-28 sm:w-28 ring-2 ring-primary ring-offset-2 ring-offset-background">
                <AvatarImage src={member.image || `https://i.pravatar.cc/150?u=${member.name.replace(/\s/g, '')}`} alt={member.name} />
                <AvatarFallback className="text-3xl bg-primary/20 text-primary font-semibold">{member.avatarText}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center sm:text-left">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-2xl text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start">
                    <Briefcase className="h-4 w-4 mr-2 text-primary/70" />
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-foreground/90 mb-3">{member.description}</p>
                  <div className="flex justify-center sm:justify-start space-x-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MembersPage;
