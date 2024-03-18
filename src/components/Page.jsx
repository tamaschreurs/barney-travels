import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Page({ title, subtitle, children }) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {title && (
        <div className="pt-10 pb-14 bg-slate-100 mt-4">
          <h1 className="text-5xl font-light text-center">{title}</h1>
          <p className="text-center mt-4 -mb-4 font-medium">{subtitle}</p>
        </div>
      )}
      {children}
      <Footer />
    </main>
  );
}

export default Page;
