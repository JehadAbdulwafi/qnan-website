import React, { AnchorHTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type NLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    skipLocaleHandling?: boolean;
  };

const NLink = ({
  children,
  skipLocaleHandling,
  ...rest
}: NLinkProps) => {
  const router = useRouter()
  const locale = rest.locale || router.query.locale || ''

  let href = rest.href || router.asPath
  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale as string)
  }

  return (
    <Link href={href} legacyBehavior>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default NLink
