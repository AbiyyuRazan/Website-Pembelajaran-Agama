
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { ArrowRight, Lightbulb, Users, BookOpen } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const HomePage = () => {
      const features = [
        {
          icon: <Lightbulb className="h-10 w-10 text-primary" />,
          title: "Materi Terstruktur",
          description: "Akses materi pembelajaran yang disusun rapi oleh anggota kelompok.",
          link: "/materi"
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Profil Anggota",
          description: "Kenali lebih dekat siapa saja yang berkontribusi dalam kelompok belajar ini.",
          link: "/anggota"
        },
        {
          icon: <BookOpen className="h-10 w-10 text-primary" />,
          title: "Kontribusi Mudah",
          description: "Bagikan pengetahuan Anda dengan mudah melalui platform kami.",
          link: "/materi"
        }
      ];

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
          }
        }
      };

      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100
          }
        }
      };

      return (
        <div className="space-y-12">
          <motion.section
            className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl shadow-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Selamat Datang di BelajarKuy!
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Platform kolaborasi untuk berbagi dan mengakses materi pembelajaran kelompok secara mudah dan menyenangkan.
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button asChild size="lg" className="group shadow-lg hover:shadow-primary/50 transition-shadow">
                  <Link to="/materi">
                    Mulai Belajar <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
             <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-full h-auto text-background opacity-20" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,197.3C672,224,768,224,864,202.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
          </motion.section>

          <motion.section 
            className="py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-semibold text-center mb-10 text-foreground">Kenapa Memilih Kami?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:border-primary transition-colors duration-300 group glassmorphic">
                    <CardHeader className="items-center">
                      <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription>{feature.description}</CardDescription>
                       <Button variant="link" asChild className="mt-4 text-primary">
                        <Link to={feature.link}>Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          <motion.section
            className="py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-700 text-primary-foreground p-8 md:p-12 text-center shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">Siap Berkontribusi?</h2>
              <p className="text-lg mb-6 max-w-xl mx-auto">
                Bergabunglah dengan kami dalam menciptakan sumber belajar yang bermanfaat bagi semua.
              </p>
              <Button variant="secondary" size="lg" asChild className="shadow-md hover:bg-secondary/90 transition-colors">
                <Link to="/materi">Tambahkan Materi Anda</Link>
              </Button>
            </Card>
          </motion.section>
          
        </div>
      );
    };

    export default HomePage;
  