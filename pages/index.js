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
import Footer from '../components/footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sasha's Auto Repair</title>
        <meta
          name="description"
          content="Sasha's Auto Repair - Sasha's Auto Repair is a Mechanic in Lansing, MI 48917"
        />
        <meta
          content="Auto Repair, Mechanic, Transmission Services, Brake Repair, Oil Change, Truck Auto Repairs, Engine Repair, Towing Services, Auto Inspection, Auto AC Repair, Wheel Alignment, Auto Maintenance"
          name="keywords"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />
      <ScrollBackToTop />
      <History />
      <Service />
      <ServiceContact />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
