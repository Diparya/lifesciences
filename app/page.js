'use client';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Ingredients from '@/components/Ingredients';
import News from '@/components/News';

export default function Home() {
  return (
    <>
    <header className=" pl-36 bg-white">
        <img
          src='images/logo.png' 
          alt="Elbrit Logo"
          width={150}
          height={50}
        />
      </header>
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      

      <Hero/>

      <Benefits/>

      <Ingredients />

      <News />

    </div>

    <Footer />
    </>
  );
}
