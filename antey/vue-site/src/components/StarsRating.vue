<template>
  <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="20" fill="#C4C4C4"/>
    <rect :width="blockWidth" height="20" fill="#F0B429"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.11 0H0V20H100V0H88.89H69.44H50H30.56H11.11ZM79.17 7.461L84.85 11.18L82.36 18.09L88.89 13.82L95.42 18.09L92.93 11.18L99.46 6.913H91.38L88.89 0L86.39 6.913H80.01H78.32H71.94L69.44 0L66.95 6.91H60.57H58.88H52.49L50 0L47.51 6.913H41.12H39.43H33.05L30.56 0L28.06 6.91H21.68H19.99H13.61L11.11 0L8.62 6.91H0.54L7.07 11.18L4.58 18.09L11.11 13.82L17.64 18.09L15.15 11.18L20.83 7.46L26.52 11.18L24.02 18.09L30.56 13.82L37.09 18.09L34.59 11.18L40.28 7.46L45.96 11.18L43.47 18.09L50 13.82L56.53 18.09L54.04 11.18L59.72 7.46L65.41 11.18L62.91 18.09L69.44 13.82L75.98 18.09L73.48 11.18L79.17 7.46Z" fill="white"/>
  </svg>
</template>
<script>
export default {
  name: 'Rating',
  props: ['rating'],
  computed: {
    blockWidth () {
      return this.rating * 20
    }
  }
}
</script>
