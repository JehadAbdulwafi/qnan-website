import Layout from "@/components/layout";
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic";
import { fetchTermsOfService } from "@/lib/queries";
import { TermsOfService } from "@/sanity.types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import { getContent } from "@/lib/getContent";
import { components } from "@/lib/portableStyledComponents";

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

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <Layout>
      <section className="section-dark">
        <div className="container">
          <div>
            <h2 className="section-title">{t("terms_of_service")}</h2>
          </div>
        </div>
      </section>
      <div className="container min-h-96">
        <PortableText
          value={getContent(data?.content!, i18n.language)!}
          components={components}
        />
      </div>
    </Layout>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

