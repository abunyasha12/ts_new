<template>
  <v-container class="fill-height">
    <v-responsive class="align-start fill-height" style="padding-top: 10%">
      

      <v-row justify="center">

        <v-card
          color="teal"
          width="572"
          >
          <v-img
          :src="flowers"
          cover
          class="text-white">
            <v-card-title>НТП2 сила</v-card-title>
            <v-card-text>Сегодня {{ currentDate }}</v-card-text>

            <v-row align="center" justify="center" class="pb-8">
              <v-col cols=5>
                <TSButton
                  href="https://okc.ertelecom.ru/stats/line_ts/ntp2/index"
                  text="Очередь"
                >
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/stats/breaks/ntp-two"
                  text="Перерывы"
                >
                </TSButton>

                <TSButton
                  href="https://okc2.ertelecom.ru/wfm/vueapp/day"
                  text="Обеды и назначения">          
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/ts/useful/sait-index"
                  text="SaitIndex">
                </TSButton>

                <TSButton
                  href="https://perm.db.ertelecom.ru/cgi-bin/ppo/excells/wcc_main.login"
                  text="WebARM">
                </TSButton>

                <TSButton
                  href="https://cfp.ucce.ertelecom.ru/desktop/container/"
                  text="Finesse">
                </TSButton>

                <TSButton
                  href="http://kbn.ertelecom.ru/pages/viewpage.action?pageId=9601190"
                  text="КБН">
                </TSButton>

                <TSButton
                  href="https://cloud.ertelecom.ru/Products/Files/DocEditor.aspx?fileid=922151"
                  text="График наставников">
                </TSButton>

              </v-col>

              <v-col cols=5>
                <TSButton
                  href="https://okc.ertelecom.ru/stats/lk/index"
                  text="ЛК">
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/stats/ure/main/ure"
                  text="Единая отчетная среда">
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/stats/testing/lk/profile"
                  text="Тестирование">
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/stats/premium/ntp2/spec_month"
                  text="Премиум">
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/test/gok/ntp-two/errors"
                  text="ГОК">
                </TSButton>

                <TSButton
                  href="https://ticket.ertelecom.ru/secure/Dashboard.jspa?selectPageId=70903"
                  text="ГОК(ticket)">
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/stats/csi/index"
                  text="Оценки">
                </TSButton>

                <TSButton
                  href="https://okc.ertelecom.ru/stats/taxi_kc/taxi/registration"
                  text="Такси">
                </TSButton>

              </v-col>

            </v-row>

          </v-img>
          
        </v-card>

      </v-row>

    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'
let theme = useTheme()

const currentDate = computed(():string => {
        const td = new Date()
        const yr = td.getFullYear()
        let mn = td.getMonth() + 1
        let dy = td.getDate()

        return dy + "." + mn + "." + yr
    })

const flowers = computed(():string => {
  return (theme.global.name.value === "light") ? "./assets/light.jpg" : "./assets/dark.jpg"
})
</script>
