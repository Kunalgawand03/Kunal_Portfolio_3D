# Setup notes for Kunal

This is your personalized copy of the 3D portfolio template. Here's what to do next.

## 1. Install & run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000. (`--legacy-peer-deps` is needed because one dependency,
`embla-carousel-react`, hasn't published a version tagged for React 19 yet — this is
harmless.)

## 2. Get the contact form sending you emails

The contact form already posts to `/api/send`, which emails `config.email`
(`gawandkunal2803@gmail.com`, set in `src/data/config.ts`). It uses **Resend** to send
the email, so:

1. Create a free account at https://resend.com and verify it with your email.
2. Grab an API key from the Resend dashboard.
3. Create a file named `.env.local` in the project root with:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. On Resend's free tier, the default `onboarding@resend.dev` sender can only send to
   the email address you signed up with — which is fine here since that's your inbox.
   If you later want to send from your own domain, verify a domain in Resend and change
   the `from` address in `src/app/api/send/route.ts`.
5. When you deploy (e.g. to Vercel), add `RESEND_API_KEY` as an environment variable
   there too.

## 3. What was personalized

- **Config** (`src/data/config.ts`): your name, email, GitHub/LinkedIn/LeetCode/HackerRank/Instagram, and site metadata.
- **Hero section**: your name, headline, resume button (links to `/resume`), and your photo.
- **Header**: your framed profile photo top-left next to your name.
- **Projects** (`src/data/projects.tsx`): all 6 of your projects — ShikshakMitra AI,
  RushResQ, Wanderlust Explorer, Phishing Website Detection, Imprintly, and the Intel
  Eureka vehicle cut-in detection project — each with real screenshots where you had
  them, tech stack badges, and GitHub links.
- **New sections**:
  - **Education** (`src/components/sections/education.tsx`) — Sanjivani COE + HSC/SSC.
  - **Achievements** (`src/components/sections/achievements.tsx`) — your 3 hackathon
    wins/finals, each with a "View Proof on LinkedIn" button linking to your actual posts.
  - **Certifications** (`src/components/sections/certifications.tsx`) — a tappable grid
    of 8 of your certificates. Tapping one opens a modal with the full certificate image
    and a short description. More certificates can be added — see below.
- **Resume page** (`/resume`): serves `public/Kunal_Gawand_Resume.pdf`.
- **Contact form**: unchanged in behavior, just now emails your inbox (see step 2).

## 4. Adding more certificates

You sent a lot more certificates than the 8 featured on the site. To add more:

1. Convert the certificate (PDF or image) to a `.jpg`/`.png` and drop it in
   `public/assets/certificates/`.
2. Add an entry to the `CERTIFICATIONS` array in `src/data/constants.ts`:
   ```ts
   {
     id: "unique-id",
     title: "Certificate title",
     issuer: "Issuing organization",
     date: "Month Year", // optional
     image: "/assets/certificates/your-file.jpg",
     description: "One or two sentences about what it covers.",
   },
   ```
That's it — it'll automatically show up in the grid with the click-to-view modal.

## 5. About the 3D skills keyboard

`public/assets/skills-keyboard.spline` was swapped for an updated version of this
template's 3D scene that has real, dedicated keycaps for Python, Java, MySQL,
C, PostgreSQL, MongoDB, Data Science, Machine Learning, GenAI/LLMs, DSA, Linux,
Docker, Python Libraries, AWS, Git, GitHub, HTML, CSS, React, Tailwind, JS, TS, and
Vercel — `SKILLS` in `src/data/constants.ts` now maps directly to those. Hovering or
pressing each key shows its correct label and description, matching your real stack
much more closely than the original template's keycap set.

A couple of honest caveats:
- I could not verify the artwork baked onto *every single* keycap pixel-for-pixel
  (some, like Machine Learning/Data Science/Python Libraries, use custom AI-generated
  art from the scene's author rather than standard logos) — but the label and
  description shown on hover/press are always accurate regardless.
- Kali Linux, NMap, and SET (Social-Engineer Toolkit) don't have dedicated keycaps in
  this scene — they're fairly niche security tools and no version of this template's
  3D keyboard includes them. If you want them represented, the reliable way is opening
  `skills-keyboard.spline` in the Spline editor (spline.design) and adding/relabeling a
  keycap there. Your Certifications section already covers this ground (Ethical Hacking
  Essentials, Digital Forensics Essentials, Cyber Threat Management, Web Fundamentals).
- I set `live` links for projects without a public deployment (RushResQ, Wanderlust
  Explorer, Phishing Detection, Imprintly, Eureka) to point at their GitHub repos. If you
  deploy any of them (e.g. on Vercel/Render), update the `live` field for that project in
  `src/data/projects.tsx`.
- `config.site` is set to a placeholder (`https://kunalgawand.vercel.app`) — update it
  once you know your real deployed URL, since it's used for SEO/OpenGraph tags.
- Blog & realtime-chat features from the template are still in the codebase but not
  linked from the nav, since you didn't ask for them. Nothing to do unless you want them.
