<template>
    <main class="bg-light">

        <section class="container-xxl container-fluid py-lg-5 py-sm-3 py-1 mb-5">
          <div class="row align-items-center">
            <h1 class="font-weight-bold text-center text-uppercase h2 p-3">{{ currentService.header }}</h1>

            <div class="col-xxl-3">
                <p class="container text-center text-uppercase p-3">
                  {{ currentService.description }}
                </p>
            </div>

            <div class="container-xl col p-5">
             <table class="table table-striped table-hover align-middle">
               <caption>*Здесь указаны только основные виды работ.</caption>
               <thead>
                 <tr>
                   <th scope="col">Основные виды работ (на {{ currentService.onTheDate }})*</th>
                   <th scope="col">Цена &#8381;</th>
                   <th scope="col">Добавьте в калькулятор</th>
                 </tr>
               </thead>
               <tbody>
                <jobs-table
                  :jobs="currentService.price"
                  @change-calc-data="dataToCalc($event, 'jobs')"
                  />
               </tbody>
               <tfoot>
                 <td colspan="2">Подробно будет внизу. Предварительно:</td>
                 <td>{{ calcJobs }}</td>
               </tfoot>
             </table>
            </div>
          </div>
        </section>

        <section class="main-services py-lg-5 py-sm-3 py-1">
          <div class="container">
            <div class="row g-3">
              <card-product
                v-for="(good, index) in currentService.goods"
                :key="index" class="card" style="width: 18rem;"
                :good="good"
                @change-calc-data="dataToCalc($event, 'products')"
                />
            </div>
          </div>
        </section>

        <div class="company-info container p-4 bg-light rounded">
        </div>
    </main>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
import JobsTable from '@/components/JobsTable.vue'
export default {
  name: 'ServicePage',
  props: ['current'],
  data () {
    return {
      currentService: {},
      selectedService: {
        jobs: [],
        products: []
      }
    }
  },
  components: {
    'card-product': CardProduct,
    'jobs-table': JobsTable
  },
  created: function () {
    this.putCurrentService(this.$route.params.current)
  },
  methods: {
    dataToCalc (data, target) {
      const i = this.selectedService[target].findIndex(el => el.name === data.name)
      if (i === -1) {
        this.selectedService[target].push(data)
      } else {
        this.selectedService[target][i].number += data.number
        if (!this.selectedService[target][i].number) {
          this.selectedService[target].splice(i, 1)
        }
      }
    },
    putCurrentService (based) {
      this.axios
        .get(`/jsons/${based}.json`)
        .then(response => {
          this.currentService = response.data
        })
        .catch(error => {
          console.log(error)
          this.$router.push({ name: 'NotFound' })
        })
    },
    calcSum (target) {
      let sum = 0
      for (let i = 0; i < this.selectedService[target].length; i++) {
        sum += this.selectedService.[target][i].price * this.selectedService[target][i].number
      }
      return sum
    }
  },
  computed: {
    calcJobs () {
      return this.calcSum('jobs')
    },
    calcProducts () {
      return this.calcSum('products')
    },
    calcTotal () {
      return this.calcSum('jobs') + this.calcSum('products')
    }
  },
  watch: {
    current (newCurrent, oldCurrent) {
      this.putCurrentService(this.current)
    }
  }
}
</script>
