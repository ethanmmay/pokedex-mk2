import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi, teamApi } from './AxiosService'

class TeamService {
  async getTeam() {
    try {
      const res = await teamApi.get('')
      AppState.team = res.data
      logger.log(AppState.team)
    } catch (error) {
      logger.log(error)
    }
  }

  async catchPokemon() {
    try {
      const active = AppState.activePokemon
      const res = await teamApi.post('', { name: active.name, types: active.types, description: active.url, weight: active.weight, height: active.height, img: active.sprites.front_default })
    } catch (error) {
      logger.log(error)
    }
  }
}

export const teamService = new TeamService()
