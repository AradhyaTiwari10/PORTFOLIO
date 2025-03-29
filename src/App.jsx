import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <Toaster position="bottom-right" />
      <Header />
      <main className="pt-16">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;