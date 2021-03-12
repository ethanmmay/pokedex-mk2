import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi } from './AxiosService'

class PokedexService {
  async getPokemon() {
    try {
      const res = await pokeApi.get('pokemon')
      AppState.pokedex = res.data.results
    } catch (error) {
      logger.log(error)
    }
  }

  async getPokemonDetails(name) {
    try {
      const res = await pokeApi.get('pokemon/' + name)
      AppState.activePokemon = res.data
      AppState.activeSprite = res.data.sprites.front_default
    } catch (error) {
      logger.log(error)
    }
  }
}

export const pokedexService = new PokedexService()
