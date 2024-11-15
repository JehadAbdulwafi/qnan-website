import React from 'react'
import BenefitsCarousel from './benefits-carousel'
import { useTranslation } from 'react-i18next'
import { Home } from '@/sanity.types'

export default function Benefits({ data }: { data: Home['benefits'] }) {
  const { t } = useTranslation('common')
  return (
    <section className="section-dark">
      <div className='container'>
        <div>
          <h2 className='section-title'>{t('benefits-title')}</h2>
        </div>
        <BenefitsCarousel data={data} />
      </div>
    </section>
  )
}
