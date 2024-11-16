import Layout from "@/components/layout";
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic";
import { fetchTermsOfService } from "@/lib/queries";
import { TermsOfService } from "@/sanity.types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import { getContent } from "@/lib/getContent";
import { components } from "@/lib/portableStyledComponents";
import Head from "next/head";
import Loader from "@/components/loader";

export default function TermsOfServicePage() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<TermsOfService>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res: TermsOfService = await fetchTermsOfService();
      setLoading(false);
      setData(res);
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          {t("terms_title")}
        </title>
      </Head>
      <section className="section-dark mt-14 sm:mt-0">
        <div className="container">
          <div>
            <h2 className="section-title">{t("terms_of_service")}</h2>
          </div>
        </div>
      </section>

      {loading ? <Loader /> : (
        <div className="container min-h-96 my-4">
          <PortableText
            value={getContent(data?.content, i18n.language)!}
            components={components}
          />
        </div>
      )}
    </Layout>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

