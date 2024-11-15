import { useEffect, useState } from 'react';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Layout from '@/components/layout'
import AboutUs from '@/components/home/about-us';
import Hero from '@/components/home/hero';
import Download from '@/components/home/download';
import Featured from '@/components/home/featured';
import Testimonials from '@/components/home/testimonials';
import Benefits from '@/components/home/benefits';
import { fetchHomeSection } from '@/lib/queries';
import { Home } from '@/sanity.types';


const Homepage = () => {
  const [data, setData] = useState<Home>()

  useEffect(() => {
    (async () => {
      const res: Home = await fetchHomeSection()
      setData(res)
    })()

  }, []);


  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Featured data={data?.restaurants} />
      <Testimonials data={data?.testimonials} />
      <Benefits data={data?.benefits} />
      <Download />
    </Layout>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
