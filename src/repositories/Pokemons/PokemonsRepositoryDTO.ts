namespace PokemonsRepositoryDTO {
  export interface IPokemonsRepository {
    save(data: SaveDTO): SaveResponseDTO;
  }

  export type SaveDTO = {
    id: number;
    userId: number;
    life: number;
  };

  export type SaveResponseDTO = Promise<void>;
}

export { PokemonsRepositoryDTO };
