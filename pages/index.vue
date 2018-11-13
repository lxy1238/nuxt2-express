<template>
  <div>
    首页
    <mu-button color="primary">{{ title }}</mu-button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import axios from 'axios'
export default {
  async asyncData () {
    let { data } = await axios.get('http://localhost:3001/api/user')
    console.log(data)
    return {title: data}
  },
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      a: 'test'  
    }
  },
  async mounted () {
    let { data } = await axios.get('/api/user')
    console.log(data)
  }
}
</script>
