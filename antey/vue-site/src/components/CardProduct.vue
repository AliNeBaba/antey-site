<template>
  <div>
    <template v-if="showCardSide">
      <img :src="good.imgURL" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ good.brandName }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ good.name }}</h6>
        <p class="card-text">{{ good.rating }} <card-rating :rating="good.rating" /></p>
        <h5 class="card-title">Цена: {{ good.price }} &#8381;</h5>
      </div>
    </template>
    <template v-else>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Тип - {{ good.type }}</li>
        <li v-for="(property, name) in good.properties" :key="name" class="list-group-item">{{ name }}{{ property }}</li>
      </ul>
      <a :href="good.infoURL" class="card-link" target="_blank">Подробнее о товаре</a>
    </template>
    <div class="card-footer">
      <button class="btn btn-info"
        type="button"
        @click="showCardSide = !showCardSide"
        >
        <span v-if="showCardSide">Подробно</span>
        <span v-else>Скрыть</span>
      </button>
      <price-to-calc @change-calc="dataPreparation" />
    </div>
  </div>
</template>
<script>
import PriceToCalc from '@/components/PriceToCalc.vue'
import StarsRating from '@/components/StarsRating.vue'
export default {
  name: 'CardProduct',
  props: ['good'],
  data () {
    return {
      showCardSide: true
    }
  },
  emits: ['changeCalcData'],
  components: {
    'card-rating': StarsRating,
    'price-to-calc': PriceToCalc
  },
  methods: {
    dataPreparation (action) {
      this.$emit('changeCalcData', {
        name: `${this.good.brandName} ${this.good.name}`,
        number: action === 'add' ? 1 : -1,
        price: this.good.price
      })
    }
  }
}
</script>
