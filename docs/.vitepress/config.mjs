import { defineConfig } from 'vitepress';
//import legacy from '@vitejs/plugin-legacy';

//https://vitepress.dev/reference/site-config
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
  base: '/gustafu233c/',
  title: "GustafU233C",
  description: "A VitePress Pages Site",

  //https://vitepress.dev/reference/default-theme-config#i18nrouting
  //https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en',

      themeConfig: { 
        
        //ENGLISH
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Website Documentation', link: '/siteprivacypolicy' },
          { text: 'Project Documentation', link: '/projecteula' },
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
            text: 'Project Documentation',
            items: [
              { text: 'Project EULA', link: '/projecteula'}
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
          { icon: 'github', link: 'https://github.com/GustafU233C/gustafu233c' }
        ],

        footer: {
          copyright: 'Copyright © 2024-present GustafU233C'
        }
      }
    },

    //FRENCH
    fr: {
      label: 'Français',
      lang: 'fr',
      /*link: '/fr/index', */
      
      //https://vitepress.dev/reference/default-theme-config
      themeConfig: { 
        //https://github.com/vuejs/vitepress/discussions/3240 other framework parts in English...
        docFooter: {
          prev: "Page précédente",
          next: "Page suivante"
        },
        darkModeSwitchLabel: "L'apparence",
        returnToTopLabel: "Retour en haut",
        outlineTitle: "Sur cette page",

        nav: [
          { text: 'Acceuil', link: '/fr/index' },
          { text: 'La Documentation de Site du Web', link: '/fr/siteprivacypolicy' },
          { text: 'La Documentation du Projet', link: '/fr/projecteula' },
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
            text: 'La Documentation du Projet',
            items: [
              { text: "CLUF du Projet", link: '/fr/projecteula'}
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
          { icon: 'github', link: 'https://github.com/GustafU233C/gustafu233c' }
        ],

        footer: {
          copyright: "Le Droit d'Auteur (Copyright) © 2024-présent GustafU233C"
        }
      }
    }
  },
})
