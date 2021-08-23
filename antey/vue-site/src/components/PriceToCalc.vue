<template>
  <td>
    <button
      type="button"
      class="btn btn-success rounded mx-2"
      @click="runCurrentEmit('add')"
      >
      +
    </button>
    {{ counter }}
    <button
      v-show="counter"
      type="button"
      class="btn btn-primary rounded mx-2"
      @click="runCurrentEmit('remove')"
      >
      &ndash;
    </button>
  </td>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  emits: ['changeCalc'],
  methods: {
    runCurrentEmit (action) {
      this.$emit('changeCalc', action)
      this.counter += action === 'add' ? 1 : -1
    }
  }
}
</script>
