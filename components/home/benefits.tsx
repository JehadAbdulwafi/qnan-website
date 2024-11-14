import React from 'react'
import BenefitsCarousel from './benefits-carousel'
import { useTranslation } from 'react-i18next'

export default function Benefits() {
  const { t } = useTranslation('common')
  return (
    <section className="section-dark">
      <div className='container'>
        <div>
          <h2 className='section-title'>{t('benefits-title')}</h2>
        </div>
        <BenefitsCarousel />
      </div>
    </section>
  )
}
