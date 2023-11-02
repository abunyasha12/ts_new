/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  aliases: {
    TSButton: VBtn,
  },
  defaults: {
    TSButton: {
      color: "primary",
      width: "300",
      rel: "noopener noreferrer",
      target: "_blank",
      variant: "elevated",
      class: "ma-1 pa-1 overflow-x-hidden",
    }
  }
})
