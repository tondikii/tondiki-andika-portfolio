export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/hugorcd/15min',
    available: true,
  },
  profile: {
    name: 'Tondiki Andika',
    job: 'Full Stack Developer',
    email: 'tondikiag30@gmail.com',
    phone: '(+62) 838 9778 1157',
    picture: 'https://ik.imagekit.io/fnzl2pmmqv2d/IMG-20250803-WA0021_ESCisJ4aN.jpg?updatedAt=1756893050478',
  },
  socials: {
    github: 'https://github.com/tondikii',
    linkedin: 'https://www.linkedin.com/in/tondikii',
    instagram: 'https://www.instagram.com/tondikii',
  },
  seo: {
    title: 'Tondiki Andika – Full-Stack Developer Portfolio',
    description: 'Portfolio of Tondiki Andika, an experienced Full-Stack Developer specializing in modern web and mobile applications with React, Next.js, Vue, Nuxt, and Node.js. Focused on clean code, lightweight performance, and minimalist design.',
    url: 'https://tondikiandika.vercel.app',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
