// NOTE: we're disabling consistent type definitions since for this specific file,
// we intentionally want to extend types in the libraries we use

/* eslint-disable @typescript-eslint/consistent-type-definitions */
interface ImportMetaEnv {
  readonly VITE_LOCALE: "en" | "en-XA";

  // set by build
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  compileTime: <T>(id: string) => T;
}
/*eslint-enable*/
