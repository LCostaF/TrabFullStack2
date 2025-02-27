// Componente para apresentar a galeria de Pokemons

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemonNames } from "../slices/gallerySlice";
import { fetchCustomPokemon } from "../slices/customPokemonSlice";
import { setTotalPages } from "../slices/paginationSlice";
import { setPokemonTypes } from "../slices/filterSlice";
import { capitalize } from "../utils/stringUtils";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import PokemonTypeFilter from "./PokemonTypeFilter";
import { fetchPokemonByType } from "../services/apiService";
import PendingState from "./PendingState";
import RejectState from "./RejectState";


function PokemonGallery() {
  const dispatch = useDispatch();
  const { allPokemonNames, status, error } = useSelector((state) => state.gallery);
  const { pokemon: customPokemon } = useSelector((state) => state.customPokemon);
  const { currentPage, limit } = useSelector((state) => state.pagination);
  const { searchQuery, selectedType, typeFilteredPokemon } = useSelector((state) => state.filter);

  // Fetch both API and custom Pokemon
  useEffect(() => {
    if (allPokemonNames.length === 0) {
      dispatch(fetchAllPokemonNames());
    }
    dispatch(fetchCustomPokemon());
  }, [dispatch, allPokemonNames]);

  // Obtem Pokemons do tipo selecionado
  useEffect(() => {
    const fetchTypeData = async () => {
      // 0 seria "none", nenhum tipo selecionado
      if (selectedType !== 0) {
        try {
          const pokemonList = await fetchPokemonByType(selectedType);
          dispatch(setPokemonTypes(pokemonList));
        } catch (error) {
          console.error(`Erro ao obter Pokemons do tipo #${selectedType}:`, error);
        }
      } else {
        // Quando "none" está selecionado, reseta
        dispatch(setPokemonTypes([]));
      }
    };

    fetchTypeData();
  }, [dispatch, selectedType]);

  // Array com Pokemons e seus números
  // Combine API and custom Pokemon
  const pokemonWithNumbers = [
    ...allPokemonNames.map((name, index) => ({
      name,
      number: index + 1,
      isCustom: false
    })),
    ...customPokemon.map(pokemon => ({
      ...pokemon,
      isCustom: true
    }))
  ];

  // Filtro baseado na busca e no tipo
  const filteredPokemon = pokemonWithNumbers.filter(pokemon => {
    const matchesSearch = 
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pokemon.number.toString() === searchQuery;

    // "none" selecionado
    if (selectedType === 0) {
      return matchesSearch;
    }

    // For custom Pokemon, directly check the type property
    if (pokemon.isCustom) {
      return matchesSearch && pokemon.type === selectedType;
    }

    // Verifica se o Pokemon está na lista filtrada por tipo
    return matchesSearch && typeFilteredPokemon.some(
      typePokemon => typePokemon.pokemon.url.endsWith(`/${pokemon.number}/`)
    );
  });

  // Atualiza total de páginas com base no resultado dos filtros
  useEffect(() => {
    const totalFilteredPages = Math.ceil(filteredPokemon.length / limit);
    dispatch(setTotalPages(totalFilteredPages));
  }, [dispatch, filteredPokemon.length, limit]);

  const startIndex = (currentPage - 1) * limit;
  const paginatedPokemon = filteredPokemon.slice(startIndex, startIndex + limit);

  // Gerencia estados
  if (status === "pending") {
    <PendingState  />
  }

  if (status === "rejected") {
    <RejectState />
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <SearchBar />
        <PokemonTypeFilter />
      </div>
      <div className="row mt-4">
        {paginatedPokemon.length === 0 ? (
          <p>No Pokemon found</p>
        ) : (
          paginatedPokemon.map((pokemon) => {
            const imageUrl = pokemon.isCustom
              ? `/api/pokemon/${pokemon._id}/picture`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`;
            
            return (
              <PokemonCard
                key={pokemon.isCustom ? `custom-${pokemon._id}` : pokemon.number}
                name={capitalize(pokemon.name)}
                imageUrl={imageUrl}
                number={pokemon.number}
                isCustom={pokemon.isCustom}
              />
            );
          })
        )}
      </div>
      <Pagination />
    </div>
  );
}

export default PokemonGallery;