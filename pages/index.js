import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import ScrollBackToTop from '../components/assets/ScrollBackToTop';
import Contact from '../components/WhyUs/Contact';
import WhyUs from '../components/WhyUs/WhyUs';
import ServiceContact from '../components/OurService/ServiceContact';
import Service from '../components/OurService/Service';
import History from '../components/HIstory/History';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Suspense } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />
      <ScrollBackToTop />
      <Suspense fallback={`Loading...`}>
        <History />
        <Service />
        <ServiceContact />
        <WhyUs />
        <Contact />
      </Suspense>
    </div>
  );
}
