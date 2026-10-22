const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
};

export const withoutBase = (path: string) => {
  if (!base || !path.startsWith(`${base}/`)) return path;
  return path.slice(base.length) || '/';
};
