This is a boilerplate template for [Next.js](https://nextjs.org/) ♥ app which I build according to needs of my clients small websites. I personaly use this template for Static Generation.

## It ships with

- [Next.js](https://nextjs.org) - The React Framework
  for Production ([docs]())
- [Tailwind](https://tailwindcss.com/) - a utility-first CSS framework ([docs](https://tailwindcss.com/docs))
- Basic [Prettier](https://tailwindcss.com/) setup - an opinionated code formatter ([docs](https://prettier.io/docs/en/index.html))
- [PostCSS](https://postcss.org/) set up with autoprefixer and tailwind plugins ([docs](https://github.com/postcss/postcss/tree/main/docs))
- complete implementation of [Google Analytics](https://analytics.google.com/analytics/web/)
- often used utils (`submit form` helper, `sass breakpoints` tool, `img srcset generator` - Nexts Image component is only available for server rendering)

## How to use it

1. setup your own SASS breakpoints (if you are gonna use it)
2. change website icons (in public/assets/icons)
3. change description/colors meta in CustomHead
4. include your own fonts in public/fonts/**your font folder**
5. change Google Analytics ID in .env (development) and .env.production, as default sample Google ID is used

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

For start development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For build, which will also generate an out directory, which can be served by any static hosting service or CDN.

```bash
npm run build
```

Files after build you can find in root `out` folder and copy it by FTP on your server or DNS.

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
