<template>
  <div class="col-6">
    <div class="card pokemon">
      <!-- <img class="card-img-top" :src="" alt="pokemon"> -->
      <div class="card-body">
        <h4 class="card-title">
          Name: {{ pokedex.name }}
        </h4>
        <p class="card-text">
          Type: {{}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      pokedex: computed(() => AppState.pokedex)
    })
  }
}
</script>

<style>

</style>
