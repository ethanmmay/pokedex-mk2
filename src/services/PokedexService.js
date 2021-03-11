import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi } from './AxiosService'

class PokedexService {
  async getPokemon() {
    try {
      const res = await pokeApi.get('pokemon')
      logger.log(res.data.results)
      AppState.pokedex = res.data.results
    } catch (error) {
      logger.log(error)
    }
  }

  async getPokemonDetails(name) {
    try {
      const res = await pokeApi.get('pokemon/' + name)
      AppState.activePokemon = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const pokedexService = new PokedexService()
