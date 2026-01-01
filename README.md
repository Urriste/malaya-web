# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📧 Configuración de Resend (Emails)

- **Variable**: `RESEND_API_KEY` (solo servidor; no usar `PUBLIC_`).
- **Archivos de entorno**:
	- [`.env.example`](.env.example): plantilla que puedes commitear.
	- [`.env.local`](.env.local): usado en desarrollo; está ignorado por git.
- **Pasos en local**:
	1. Copia `.env.example` a `.env.local`.
	2. Define `RESEND_API_KEY` en `.env.local`.

```bash
cp .env.example .env.local
# EDITA .env.local con tu clave real
```

- **Producción**: define `RESEND_API_KEY` en variables de entorno del proveedor (Vercel, Netlify, etc.). También soporta `.env.production` o `.env.production.local` si tu despliegue los utiliza.

- **Tipo y helper**:
	- [src/env.d.ts](src/env.d.ts): tipado de `import.meta.env.RESEND_API_KEY`.
	- [src/lib/env.ts](src/lib/env.ts): `getResendApiKey()` valida y devuelve la clave.

- **Uso (ejemplo servidor)**:

```ts
import { getResendApiKey } from "src/lib/env";
const apiKey = getResendApiKey();
// úsalo al inicializar el cliente de Resend
```
