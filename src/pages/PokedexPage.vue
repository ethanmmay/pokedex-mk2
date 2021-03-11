<template>
  <div class="w-100">
    <div class="col-12">
      <div class="row mt-5">
        <div class="col-4">
          <div id="example-1">
            <div v-for="item in state.pokedex" :key="item.name" @click="getPokemonDetails( item.name )">
              {{ item.name[0].toUpperCase() + item.name.slice(1) }}
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="card pokemon" :v-if="state.activePokemon">
            <div class="card-body">
              <h4 class="card-title">
                {{ state.activePokemon.name }}
              </h4>
              <p class="card-text">
                Weight: {{ state.activePokemon.weight }}
              </p>
            </div>
            <img class="card-img-top" :src="state.activePokemon.sprites.front_default" alt="pokemon">
            <!-- <button></button> -->
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
      pokedex: computed(() => AppState.pokedex),
      activePokemon: computed(() => AppState.activePokemon)
    })

    onMounted(async() => {
      await pokedexService.getPokemon()
    })

    return {
      state,
      async getPokemonDetails(name) {
        await pokedexService.getPokemonDetails(name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
div {
    font-family: 'Press Start 2P', cursive;
}

img {
    max-height: 200px;
    max-width: 200px;
    height: auto;
    width: auto;
}
</style>
