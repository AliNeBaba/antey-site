<template>
   <tr v-for="(price, job) in jobs" :key="job">
     <td>{{ job }}</td>
     <td>{{ price }}</td>
     <price-to-calc
       @change-calc="dataPreparation($event, job, price)"
       />
   </tr>
</template>
<script>
import PriceToCalc from '@/components/PriceToCalc.vue'
export default {
  name: 'JobsTable',
  props: ['jobs'],
  emits: ['changeCalcData'],
  components: {
    'price-to-calc': PriceToCalc
  },
  methods: {
    dataPreparation (action, currentJob, currentPrice) {
      this.$emit('changeCalcData', {
        name: currentJob,
        number: action === 'add' ? 1 : -1,
        price: currentPrice
      })
    }
  }
}
</script>
