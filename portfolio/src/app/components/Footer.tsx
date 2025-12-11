
import React from 'react';

function Footer()  {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-900">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Deborah Teta. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Built with Next.js, React, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
