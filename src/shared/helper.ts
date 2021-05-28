// eslint-disable-next-line import/prefer-default-export
export function environment(env: string) {
  if (env) {
    return import.meta.VITE_APP_ENV === env;
  }

  return import.meta.VITE_APP_ENV;
}
