import { useEffect, useState } from 'react';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Layout from '@/components/layout'

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
      <div>Jehad</div>
    </Layout>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
