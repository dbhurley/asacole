# Asa Cole

Debut artist site for Asa Cole on Vox Petra. The stack matches the other Vox Petra artist sites (Crownless, Los Peregrinos): Next.js App Router, React, TypeScript, and Tailwind CSS.

Public facts only:

- Artist: Asa Cole, bright young-tenor indie folk-pop worship
- Label: Vox Petra, an independent Christian music label, imprint Driven By Heaven
- Debut album: Stones of Help, from 1 Samuel 7:12 (Ebenezer)
- Debut single: Dust and Breath, coming soon
- Domain: [asacole.com](https://asacole.com)

Spotify, Apple Music, and YouTube are placeholders. Empty `href` values in `src/content/site-data.ts` render as non-link Coming soon slots. Paste a public URL into `href` when that link is live.

The homepage hero and Open Graph image use the approved portrait at `public/asa-cole-hero.jpg`.

## Working locally

```bash
npm ci
npm run dev
npm run lint
npm run build
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel and attach asacole.com

The domain `asacole.com` is already registered on Vercel and attached to this project. No environment variables are required.

### Dashboard

1. Open the Vercel team that already serves the site.
2. Import this GitHub repository if the project is not linked yet.
3. Framework preset: **Next.js**. Root directory: repository root. Install command: `npm ci`. Build command: `npm run build`. Leave the output on the Next.js default.
4. Deploy. After this pull request merges, production should track `main`. Preview deployments can use the pull request branch before merge.
5. Open the project, then **Settings**, then **Domains**.
6. Add `asacole.com`. The domain is already on the team, so assign it to this project instead of registering it again. If it sits on another project, move it here.
7. Optional: add `www.asacole.com` and redirect it to the apex. The canonical URL in the site is `https://asacole.com`.
8. Confirm the domain status is valid and that production is the deployment attached to `asacole.com`. Because the domain is registered on Vercel, nameservers should already point at Vercel. If the dashboard still lists DNS records, apply the records it shows.

### CLI

From a machine logged into that team:

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
vercel domains inspect asacole.com
```

If the domain already belongs to the team, attach or move it from **Project Settings > Domains** rather than registering it a second time.

### When the single is released

Edit `src/content/site-data.ts`. Replace the empty `href` strings:

```ts
href: "", // PLACEHOLDER: Spotify URL
href: "", // PLACEHOLDER: Apple Music URL
href: "", // PLACEHOLDER: YouTube URL
```

A filled `https` URL becomes a real outbound link in the hero, the contact panel, JSON-LD, and `/llms.txt`. Leave a platform as `""` to keep its Coming soon placeholder.
