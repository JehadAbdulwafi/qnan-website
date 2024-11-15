function getTitle(content: { en?: string; ar?: string }, activeLang: string) {
  const title = activeLang === 'en' ? content.en : content.ar;
  return title || content.en || content.ar;
}

export { getTitle };
