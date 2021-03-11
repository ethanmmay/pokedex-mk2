<template>
  <div class="">
    <div class="col-12">
      <div class="row">
        <div class="col-4 offset-2">
          <div class="row" :v-for="pokemon in state.pokedex" :key="pokemon.name">
            <div v-if="pokemon">
              {{ pokemon.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { pokedexService } from '../services/PokedexService'

export default {
  name: 'Pokedex',
  setup() {
    const state = reactive({
      pokedex: computed(() => AppState.pokedex)
    })

    onMounted(async() => {
      await pokedexService.getPokemon()
    })

    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
</style>
