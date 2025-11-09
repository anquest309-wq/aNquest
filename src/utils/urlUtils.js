const resolveBaseUrl = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return (
      import.meta.env.VITE_APP_BASE_URL ??
      import.meta.env.VITE_BASE_URL ??
      import.meta.env.BASE_URL ??
      ''
    );
  }

  if (typeof process !== 'undefined' && process.env) {
    return process.env.REACT_APP_BASE_URL ?? process.env.BASE_URL ?? '';
  }

  return '';
};

const trimTrailingSlash = (value = '') =>
  value === '/' ? '' : value.replace(/\/+$/, '');

const trimLeadingSlash = (value = '') => value.replace(/^\/+/, '');

const BASE_URL = trimTrailingSlash(resolveBaseUrl());

export const buildUrl = (path = '') => {
  const cleanedPath = trimLeadingSlash(path || '');
  const hasPath = cleanedPath.length > 0;
  const normalizedPath = hasPath ? `/${cleanedPath}` : '';

  if (!BASE_URL) {
    return hasPath ? normalizedPath : '/';
  }

  return `${BASE_URL}${normalizedPath || '/'}`;
};

export default BASE_URL;

