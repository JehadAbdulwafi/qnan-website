import { useEffect, useState } from 'react';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Layout from '@/components/layout'
import AboutUs from '@/components/home/about-us';
import Hero from '@/components/home/hero';
import Download from '@/components/home/download';
import Featured from '@/components/home/featured';
import Testimonials from '@/components/home/testimonials';
import Benefits from '@/components/home/benefits';

const Homepage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Featured />
      <Testimonials />
      <Benefits />
      <Download />
    </Layout>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
