import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  locale: string;
  href?: string;
};

const LangSwitcher = ({ locale, ...rest }: Props) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale!);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query![k] as string);
  });

  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }
  if (href.indexOf(`/${locale}`) < 0) {
    href = `/${locale}${href}`;
  }

  return (
    <Link href={href} className="flex flex-row items-center gap-2">
      <Button
        style={{ fontSize: "small" }}
        variant="link"
        onClick={() => languageDetector?.cache?.(locale!)}
      >
        <Image
          src={require(`../public/images/flags/${locale}.png`)}
          alt={locale}
          width={32}
          height={32}
        />
      </Button>
    </Link>
  );
};

export default LangSwitcher;
