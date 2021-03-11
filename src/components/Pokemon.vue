<template>
  <div class="col-8">
          <div class="card pokemon" activePokemon: computed(() => AppState.activePokemon)>
            <div class="card-body">
              <h4 class="card-title">
                Hello
                <!-- {{ state.activePokemon.name }} -->
              </h4>
              <p class="card-text">
                <!-- Weight: {{ state.activePokemon.weight }} -->
              </p>
            </div>
            <img class="card-img-top" :src="state.activePokemon.sprites.front_default" alt="pokemon">
          </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      pokedex: computed(() => AppState.pokedex),
      activePokemon: computed(() => AppState.activePokemon)
    })
  }
}
</script>

<style>

</style>
