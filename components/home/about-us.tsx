import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AboutUs() {
  const { t } = useTranslation('common');
  return (
    <section className='pt-24 py-10'>
      <div className='container text-center'>
        <div className='section-title'>
          <h2>{t('about_us-title')}</h2>
        </div>
        <p>{t('about_us-desc')}</p>
        <p className='mt-4 text-pretty text-md font-bold'>{t('about_us-footer')}</p>
      </div>
    </section>
  )
}
