<template>
    <header-site />
    <router-view />
    <footer-site />
</template>

<script>
import HeaderSite from './components/HeaderSite.vue'
import FooterSite from './components/FooterSite.vue'

export default {
  name: 'App',
  components: {
    'header-site': HeaderSite,
    'footer-site': FooterSite
  }
}
</script>
