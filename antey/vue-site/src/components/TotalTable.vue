<template>
  <table class="table table-stripped">
    <thead>
      <tr>
        <th scope="col">Услуга / товар:</th>
        <th scope="col">Количество:</th>
        <th scope="col">Цена:</th>
        <th scope="col">Корректировать:</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="!(selectedService.jobs === 'undefined)'">
        <tr v-for="(item, key) in selectedService.jobs" :key="key">
          <td scope="row">{{ item.name }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.number * item.price }}</td>
          <td><price-to-calc @change-calc="dataPreparation($event, item)" /></td>
        </tr>
        <tr>
          <td scope="row">td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
      </template>
      <template v-if="!(selectedService.products === 'undefined)'">
        <tr v-for="(item, key) in selectedService.products" :key="key">
          <td scope="row">{{ item.name }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.number * item.price }}</td>
          <td><price-to-calc @change-calc="dataPreparation($event, item)" /></td>
        </tr>
        <tr>
          <td scope="row"></td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">td</td>
        <td>td</td>
      </tr>
    </tfoot>
  </table>
</template>
<script>
import PriceToCalc from '@/components/PriceToCalc.vue'
export default {
  name: 'TotalTable',
  props: ['selectedService'],
  emits: ['update:selectedService'],
  components: {
    'price-to-calc': PriceToCalc
  },
  methods: {
    dataPreparation (action, item) {
      console.log(action, item)
      this.$emit('update:selectedService, this.selectedService')
    }
  }
}
</script>
