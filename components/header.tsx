import Head from 'next/head'

type Props = {
  heading: string
  title: string
}

export const Header = ({ heading, title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{heading}</h1>
  </>
)
