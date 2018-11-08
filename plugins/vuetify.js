import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
// import { zhHans } from 'vuetify/lib/locale'

Vue.use(Vuetify, {
  theme: {
    primary: '#1867c0', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  lang: {
    locales: { 'zh-Hans': {
      dataIterator: {
        rowsPerPageText: '每頁記錄數：',
        rowsPerPageAll: '全部',
        pageText: '{0}-{1} 共 {2} 條',
        noResultsText: '沒有找到匹配記錄',
        nextPage: '下一頁',
        prevPage: '上一頁'
      },
      dataTable: {
        rowsPerPageText: '每頁行數：'
      },
      noDataText: '無可用數據'
    }},
    current: 'zh-Hans'
  }
})
