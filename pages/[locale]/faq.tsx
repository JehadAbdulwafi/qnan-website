import Layout from "@/components/layout";
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getTitle } from "@/lib/getTitle";
import { fetchFAQ } from "@/lib/queries";
import { Faq } from "@/sanity.types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Loader from "@/components/loader";

export default function FaqPage() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<Faq[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const res: Faq[] = await fetchFAQ()
      console.log(res)
      setLoading(false)
      setData(res)
    })()
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          {t("faq_title")}
        </title>
        <meta name="description" content={`${t('faq')}`} />
      </Head>
      <section className="section-dark mt-14 sm:mt-0">
        <div className='container'>
          <div>
            <h2 className='section-title'>{t('faq')}</h2>
          </div>
        </div>
      </section>
      {loading ? <Loader /> : (
        <div className="container">
          <h1 className="text-xl font-medium my-4">{t('faq')}</h1>
          <Accordion type="single" className="w-full">
            {data?.map((faq) => (
              <AccordionItem key={faq._id} value={faq.question?.en as string}>
                <AccordionTrigger>{getTitle(faq.question, i18n.language)}</AccordionTrigger>
                <AccordionContent>
                  {getTitle(faq.answer, i18n.language)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      )}
    </Layout>
  )
}


const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
