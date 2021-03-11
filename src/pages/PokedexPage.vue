<template>
  <div class="">
     {{state.pokedex}}
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { pokedexService } from '../services/PokedexService'

export default {
  name: 'Pokedex',
  setup() {
    const state = reactive ({
        state: computed(() => AppState)
    })
    onMounted (async() => {
        pokedexService.getPokemon()
    })

    return {
        state
    }
  }
}
</script>

<style scoped lang="scss">

</style>
