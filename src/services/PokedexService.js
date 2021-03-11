import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi } from './AxiosService'

class PokedexService {
  async getPokemon() {
    try {
      const res = await pokeApi.get()
      AppState.pokemon = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const pokedexService = new PokedexService()
