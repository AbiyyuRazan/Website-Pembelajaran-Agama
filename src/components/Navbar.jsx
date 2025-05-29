
    import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpenText, Home, Users, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  const navItems = [
    { path: '/', label: 'Beranda', icon: <Home className="h-5 w-5" /> },
    { path: '/anggota', label: 'Anggota', icon: <Users className="h-5 w-5" /> },
    { path: '/materi', label: 'Materi', icon: <BookOpenText className="h-5 w-5" /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glassmorphic sticky top-0 z-50 shadow-md py-3 px-4 md:px-8"
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <BookOpenText className="h-7 w-7" />
          <span>BelajarKuy</span>
        </NavLink>
        <div className="flex items-center space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                ${isActive ? 'bg-primary text-primary-foreground shadow-sm' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`
              }
            >
              {item.icon}
              <span className="ml-2 hidden md:inline">{item.label}</span>
            </NavLink>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-foreground" />}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
  