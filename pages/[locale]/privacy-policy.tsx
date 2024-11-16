import Layout from "@/components/layout";
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic";
import { fetchPrivacyPolicy } from "@/lib/queries";
import { PrivacyPolicy } from "@/sanity.types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import { getContent } from "@/lib/getContent";
import { components } from "@/lib/portableStyledComponents";
import Head from "next/head";
import Loader from "@/components/loader";

export default function PrivacyPolicyPage() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<PrivacyPolicy>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res: PrivacyPolicy = await fetchPrivacyPolicy();
      setLoading(false);
      setData(res);
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          {t("privacy_title")}
        </title>
      </Head>
      <section className="section-dark">
        <div className="container">
          <div>
            <h2 className="section-title">{t("privacy_policy")}</h2>
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
