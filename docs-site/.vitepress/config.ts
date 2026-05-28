import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sift',
  description: 'POE2 Price Check Overlay & Crafting Advisor',
  base: '/sift-releases/',
  appearance: 'force-dark',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/sift-releases/favicon.png' }],
    ['meta', { property: 'og:title', content: 'Sift — POE2 Price Check Overlay & Crafting Advisor' }],
    ['meta', { property: 'og:description', content: 'In-game price checking, stash scanning, and crafting advisor with probability math for Path of Exile 2.' }],
    ['meta', { property: 'og:image', content: 'https://isayi9999.github.io/sift-releases/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Crafting', link: '/crafting/' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Installation & Setup', link: '/guide/installation' },
          { text: 'Price Check Overlay', link: '/guide/price-check' },
          { text: 'Stash Scanner', link: '/guide/stash-scanner' },
          { text: 'Settings Reference', link: '/guide/settings' },
        ],
      },
      {
        text: 'Crafting Deep Dive',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/crafting/' },
          { text: 'Reading the Output', link: '/crafting/reading-output' },
          { text: 'Side-First Strategy', link: '/crafting/side-first-strategy' },
          { text: 'Currency Basics', link: '/crafting/currency-basics' },
          { text: 'Crafting Path', link: '/crafting/crafting-path' },
          { text: 'Omens', link: '/crafting/omens' },
          { text: 'Essences', link: '/crafting/essences' },
          { text: 'Desecration & Lich Mods', link: '/crafting/desecration' },
          { text: 'Cost Optimizer', link: '/crafting/cost-optimizer' },
          { text: 'Glossary', link: '/crafting/glossary' },
        ],
      },
      {
        text: 'Help',
        items: [
          { text: 'FAQ & Troubleshooting', link: '/faq' },
        ],
      },
    ],

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Isayi9999/sift-releases' },
    ],
  },
})
