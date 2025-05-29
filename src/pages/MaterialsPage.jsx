
    import React, { useState, useEffect } from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
    import { PlusCircle, Search, Edit2, Trash2, BookOpen, UserCircle, CalendarDays } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    import { motion, AnimatePresence } from 'framer-motion';

    const MaterialsPage = () => {
      const { toast } = useToast();
      const [materials, setMaterials] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentMaterial, setCurrentMaterial] = useState(null);
      const [newMaterial, setNewMaterial] = useState({ title: '', content: '', author: '' });

      useEffect(() => {
        const storedMaterials = localStorage.getItem('studyMaterials');
        if (storedMaterials) {
          setMaterials(JSON.parse(storedMaterials));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('studyMaterials', JSON.stringify(materials));
      }, [materials]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMaterial(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMaterial.title || !newMaterial.content || !newMaterial.author) {
          toast({ title: "Gagal", description: "Semua field harus diisi.", variant: "destructive" });
          return;
        }
        const materialToSave = { 
            ...newMaterial, 
            id: currentMaterial ? currentMaterial.id : Date.now(),
            createdAt: currentMaterial ? currentMaterial.createdAt : new Date().toISOString() 
        };

        if (currentMaterial) {
          setMaterials(materials.map(m => m.id === currentMaterial.id ? materialToSave : m));
          toast({ title: "Sukses", description: "Materi berhasil diperbarui." });
        } else {
          setMaterials([materialToSave, ...materials]);
          toast({ title: "Sukses", description: "Materi baru berhasil ditambahkan." });
        }
        setNewMaterial({ title: '', content: '', author: '' });
        setCurrentMaterial(null);
        setIsModalOpen(false);
      };

      const handleEdit = (material) => {
        setCurrentMaterial(material);
        setNewMaterial({ title: material.title, content: material.content, author: material.author });
        setIsModalOpen(true);
      };

      const handleDelete = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus materi ini?")) {
            setMaterials(materials.filter(m => m.id !== id));
            toast({ title: "Sukses", description: "Materi berhasil dihapus." });
        }
      };
      
      const openAddModal = () => {
        setCurrentMaterial(null);
        setNewMaterial({ title: '', content: '', author: '' });
        setIsModalOpen(true);
      }

      const filteredMaterials = materials.filter(material =>
        material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.author.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      };

      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 100 }
        }
      };

      return (
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity:0, y: -20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div>
              <h1 className="text-4xl font-bold text-primary tracking-tight">Materi Pembelajaran</h1>
              <p className="mt-1 text-lg text-muted-foreground">Jelajahi, cari, dan tambahkan materi baru.</p>
            </div>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button onClick={openAddModal} className="group shadow-lg hover:shadow-primary/40 transition-shadow">
                  <PlusCircle className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" /> Tambah Materi Baru
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px] bg-background/90 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="text-primary text-2xl">{currentMaterial ? 'Edit Materi' : 'Tambah Materi Baru'}</DialogTitle>
                  <DialogDescription>
                    {currentMaterial ? 'Perbarui detail materi di bawah ini.' : 'Isi formulir di bawah untuk menambahkan materi pembelajaran baru.'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-2">
                  <div>
                    <Label htmlFor="title" className="text-foreground/80">Judul Materi</Label>
                    <Input id="title" name="title" value={newMaterial.title} onChange={handleInputChange} placeholder="Contoh: Pengenalan Penyakit Ain" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="author" className="text-foreground/80">Nama Kontributor</Label>
                    <Input id="author" name="author" value={newMaterial.author} onChange={handleInputChange} placeholder="Contoh: Uvuveve Onyetenyevwe Ugwemubwem Ossas" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="content" className="text-foreground/80">Isi Materi</Label>
                    <Textarea id="content" name="content" value={newMaterial.content} onChange={handleInputChange} placeholder="Tulis isi materi di sini..." rows={5} className="mt-1" />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">Batal</Button>
                    </DialogClose>
                    <Button type="button" // Ubah dari 'submit' ke 'button'
    variant="destructive" // Warna merah error
    className="shadow-md cursor-not-allowed opacity-75"
    onClick={(e) => e.preventDefault()}>{currentMaterial ? 'Simpan Perubahan' : 'Tambahkan Materi'}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Input
              type="search"
              placeholder="Cari materi berdasarkan judul, isi, atau kontributor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 py-3 text-base shadow-sm focus:ring-2 focus:ring-primary transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </motion.div>

          {filteredMaterials.length > 0 ? (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredMaterials.map(material => (
                  <motion.div key={material.id} variants={itemVariants} layout>
                    <Card className="h-full flex flex-col justify-between hover:shadow-primary/20 transition-shadow duration-300 glassmorphic overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary flex items-center gap-2">
                            <BookOpen className="h-6 w-6" /> 
                            {material.title}
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground pt-1 space-y-1">
                            <span className="flex items-center gap-1.5"><UserCircle className="h-4 w-4"/>Oleh: {material.author}</span>
                            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4"/>Dibuat: {new Date(material.createdAt).toLocaleDateString('id-ID')}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-foreground/90 line-clamp-4">{material.content}</p>
                      </CardContent>
                      <CardFooter className="flex justify-end space-x-2 border-t border-border/20 pt-4 mt-4">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(material)} className="group">
                          <Edit2 className="h-4 w-4 mr-1.5 group-hover:text-primary transition-colors" /> Edit
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDelete(material.id)} className="group">
                          <Trash2 className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" /> Hapus
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                {searchTerm ? "Tidak ada materi yang cocok dengan pencarian Anda." : "Belum ada materi. Jadilah yang pertama menambahkan!"}
              </p>
               {!searchTerm && (
                 <Button onClick={openAddModal} className="mt-6 group shadow-lg">
                    <PlusCircle className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" /> Tambah Materi
                 </Button>
               )}
            </motion.div>
          )}
        </div>
      );
    };

    export default MaterialsPage;
  