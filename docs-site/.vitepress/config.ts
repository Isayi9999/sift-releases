import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sift',
  description: 'POE2 price checking, crafting, live tracking, and currency tools',
  base: '/sift-releases/',
  appearance: 'force-dark',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/sift-releases/favicon.png' }],
    ['meta', { property: 'og:title', content: 'Sift - POE2 price checking, crafting, tracking, and currency tools' }],
    ['meta', { property: 'og:description', content: 'In-game price checking, stash scanning, crafting planning, live XP tracking, leveling, and currency tools for Path of Exile 2.' }],
    ['meta', { property: 'og:image', content: 'https://isayi9999.github.io/sift-releases/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Currency', link: '/guide/currency' },
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
          { text: 'Memory Reading & Risk', link: '/guide/memory-reading' },
          { text: 'Live Tracking', link: '/guide/live-tracking' },
          { text: 'XP & Loot Analytics', link: '/guide/xp-analytics' },
          { text: 'Leveling Checklist', link: '/guide/leveling' },
          { text: 'Currency Tools', link: '/guide/currency' },
          { text: 'Chat Commands', link: '/guide/chat-commands' },
          { text: 'Skill Tree', link: '/guide/skill-tree' },
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
          { text: 'Anointment Checker', link: '/crafting/anointments' },
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
