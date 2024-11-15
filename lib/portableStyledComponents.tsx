import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  types: {
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {value.children[0].text}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-semibold my-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-medium my-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-medium my-3">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-lg font-medium my-2">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-base font-medium my-1">{children}</h6>,
    blockquote: ({ children }: any) => (
      <blockquote className="italic border-l-4 pl-4 my-6">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="text-lg my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 my-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 my-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children }: any) => <a className="text-blue-500 underline">{children}</a>,
  },
};
