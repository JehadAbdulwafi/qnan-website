import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'


import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
      </main>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
