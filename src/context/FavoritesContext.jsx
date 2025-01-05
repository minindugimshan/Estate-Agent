import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('propertyFavorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem('propertyFavorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (property) => {
    if (!favorites.some(fav => fav.id === property.id)) {
      setFavorites([...favorites, property])
    }
  }

  const removeFavorite = (propertyId) => {
    setFavorites(favorites.filter(fav => fav.id !== propertyId))
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      clearFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavorites() {

  return useContext(FavoritesContext)
}
