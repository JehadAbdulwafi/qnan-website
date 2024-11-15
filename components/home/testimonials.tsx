import React from 'react'
import { useTranslation } from 'react-i18next'
import { TestimonialsCarousel } from './testimonials-carousel'
import { Home } from '@/sanity.types'

export default function Testimonials({ data }: { data: Home['testimonials'] }) {
  const { t } = useTranslation('common')
  return (
    <section>
      <div className='container'>
        <div>
          <h2 className='section-title'>{t('testimonials-title')}</h2>
        </div>
        <TestimonialsCarousel data={data} />
      </div>

    </section>
  )
}

