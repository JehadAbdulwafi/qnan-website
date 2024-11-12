import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

import Link from '../../components/link'

const Homepage = () => {
  const { t } = useTranslation(['404', 'common', 'footer'])

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link href="/">
            <button type="button">{t('common:back-to-home')}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['404', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
