/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly PUBLIC_FORM_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
