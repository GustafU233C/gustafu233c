import { defineConfig } from 'vitepress';
//import legacy from '@vitejs/plugin-legacy';

// https://vitepress.dev/reference/site-config
//https://vitepress.dev/reference/site-
//https://vitejs.dev/config/
//https://www.npmjs.com/package/@vitejs/plugin-legacy
//https://vitejs.dev/guide/using-plugins#:~:text=To%20use%20a%20plugin%2C%20it%20needs%20to%20be,npm%20add%20-D%20%40vitejs%2Fplugin-legacy%20js%20%2F%2F%20vite.config.js%20import
export default defineConfig({
  /*
  vite: {
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
  },
  */

  title: "gustafu233c",
  description: "A VitePress Pages Site",

  //https://vitepress.dev/reference/default-theme-config#i18nrouting
  //https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en',

      themeConfig: { 
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Website Documentation', link: 'siteprivacypolicy' },
          { text: 'Contact', link: '/sitecontact' }
        ],
    
        sidebar: [
          {
            text: 'Website Documentation',
            items: [
              { text: 'Website Privacy Policy', link: '/siteprivacypolicy' },
              { text: 'Website Terms of Service and Conditions', link: '/siteterms' }
            ]
          },
          {
            text: 'Contact Information',
            items: [
              { text: 'Contact', link: '/sitecontact' }
            ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://gustafu233c.github.io/gustafu233c/' }
        ],

        footer: {
          copyright: 'Copyright © 2024-present GustafU233c'
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      /*link: '/fr/index', */

      themeConfig: { 
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Acceuil', link: '/fr/index' },
          { text: 'La Documentation de Site du Web', link: '/fr/siteprivacypolicy' },
          { text: 'Contact', link: '/fr/sitecontact' }
        ],
    
        sidebar: [
          {
            text: 'La Documentation de Site du Web',
            items: [
              { text: 'La Politique de Confidentialité', link: '/fr/siteprivacypolicy' },
              { text: 'Les Termes de Service et Conditions', link: '/fr/siteterms' }
            ]
          },
          {
            text: 'Les Détails de Contact',
            items: [
              { text: 'Contact', link: '/fr/sitecontact' }
            ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://gustafu233c.github.io/gustafu233c/' }
        ],

        footer: {
          copyright: 'Copyright © 2024-présent GustafU233c'
        }
      }
    }
  },
})
