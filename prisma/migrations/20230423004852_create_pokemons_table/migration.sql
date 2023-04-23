-- CreateTable
CREATE TABLE "pokemons" (
    "user_id" INTEGER NOT NULL,
    "pokemon_id" INTEGER NOT NULL,
    "life" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("user_id", "pokemon_id"),
    CONSTRAINT "pokemons_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
