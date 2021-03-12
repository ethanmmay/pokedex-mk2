<template>
  <div class="w-100">
    <div class="col-12">
      <div class="row mt-5">
        <div class="col-4">
          <div id="example-1">
            <div v-for="item in state.team" :key="item.name" @click="getPokemonDetails( item.name )">
              {{ item.name[0].toUpperCase() + item.name.slice(1) }}
            </div>
          </div>
        </div>
        <Pokemon />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { pokedexService } from '../services/PokedexService'
import { teamService } from '../services/TeamService'

export default {
  name: 'Team',
  setup() {
    const state = reactive({
      team: computed(() => AppState.team),
      activePokemon: computed(() => AppState.activePokemon),
      activeSprite: computed(() => AppState.activeSprite)
    })

    onMounted(async() => {
      await teamService.getTeam()
    })

    return {
      state,
      async getPokemonDetails(name) {
        await pokedexService.getPokemonDetails(name)
      },
      async catchPokemon() {
        await teamService.catchPokemon()
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
