import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config';
import { GetStaticPropsContext } from 'next';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getI18nProps = async (ctx: GetStaticPropsContext, ns = ['common']) => {
  const locale = ctx?.params?.locale || i18nextConfig.i18n.defaultLocale;
  const props = {
    ...(await serverSideTranslations(locale as string, ns)),
  };
  return props;
};

export const makeStaticProps =
  (ns: string[] = []) =>
    async (ctx: GetStaticPropsContext) => ({
      props: await getI18nProps(ctx, ns),
    });
