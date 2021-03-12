<template>
  <div class="col-8" :v-if="state.activePokemon && state.activeSprite">
    <div class="card pokemon">
      <div class="card-body">
        <h4 class="card-title">
          {{ state.activePokemon.name }}
        </h4>
        <p class="card-text">
          Weight: {{ state.activePokemon.weight }}
        </p>
      </div>
      <img class="card-img-top" :src="state.activeSprite" alt="pokemon">
      <button @click="catchPokemon( state.activePokemon.name )">
        Catch
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { teamService } from '../services/TeamService'
export default {
  setup() {
    const state = reactive({
      activePokemon: computed(() => AppState.activePokemon),
      activeSprite: computed(() => AppState.activeSprite)
    })
    return {
      state,
      catchPokemon() {
        teamService.catchPokemon()
      }
    }
  }
}
</script>

<style scoped lang="scss">
img {
  max-height: 200px;
  max-width: 200px;
  height: auto;
  width: auto;
  margin-left: 15vh;
}
.pokemon {
  text-align: center;
}
</style>
