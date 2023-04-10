import axios, { AxiosInstance } from "axios";
import { ExternalError } from "../../errors/ExternalError";
import { PokeApiProviderDTO } from "./PokeApiProviderDTO";

class PokeApiProvider implements PokeApiProviderDTO.IPokeApiProvider {
  private service: AxiosInstance;
  private readonly url = "https://pokeapi.co/api/v2";

  constructor() {
    this.service = axios.create({
      baseURL: this.url,
    });
    this.service.interceptors.response.use(
      ({ data }) => data,
      (error) => {
        if (!error.response) {
          throw new ExternalError("PokeApiProvider is down");
        }

        if (error.response.data.message && error.response.data.data) {
          throw new ExternalError(
            error.response.data.message,
            error.response.data.data
          );
        }

        throw new ExternalError("Internal error");
      }
    );
  }

  public async getPokemonList({ offset = 0, limit = 1279 }) {
    return (await this.service.get(
      `/pokemon?${offset}&${limit}`
    )) as PokeApiProviderDTO.GetPokemonListResponseDTO;
  }

  public async getPokemonByName({ name }) {
    return (await this.service.get(
      `/pokemon/${name}`
    )) as PokeApiProviderDTO.GetPokemonByNameResponseDTO;
  }
}

export { PokeApiProvider };
