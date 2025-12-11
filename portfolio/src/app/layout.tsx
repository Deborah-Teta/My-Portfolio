
import React from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import './globals.css';

// In a real Next.js app, you would export metadata here
// export const metadata = {
//   title: 'Deborah Teta | Frontend Developer',
//   description: 'Portfolio of Deborah Teta',
// }

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
    <body>
    <div className="min-h-screen relative bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      
    </div>
    </body>
    </html>
  );
};

export default RootLayout;
