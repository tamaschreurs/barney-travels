import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Page({ children }) {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Page;
