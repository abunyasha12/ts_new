<template>
  <v-app>
    
    <v-app-bar :elevation="2" class="justify-center mb-16">
      <v-btn
          icon="mdi-theme-light-dark"
          @click="switchTheme()"
        />
    </v-app-bar>

    <MainTSPage />

  </v-app>
</template>

<script lang="ts" setup>
  import MainTSPage from '@/components/MainTSPage.vue'

  import { ref, computed, Ref } from 'vue'
  import { useTheme } from 'vuetify/lib/framework.mjs'

  let theme = useTheme()

  const savedTheme = computed(():string => {
        return localStorage.theme === undefined ? "dark" : localStorage.theme
    })

  theme.global.name.value = savedTheme.value
  function switchTheme() {
        theme.global.name.value = (theme.global.name.value === "light") ? "dark" : "light"
        localStorage.theme = theme.global.name.value
    }

</script>
