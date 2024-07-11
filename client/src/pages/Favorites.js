import React, { useEffect } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import ProductsCatalog from '../components/ProductsCatalog/ProductsCatalog';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LoaderPage from '../components/LoaderPage/LoaderPage';

const FavoritesPage = () => {
  const { favoriteProducts } = useFavorites();
  
  if (!favoriteProducts) {
    return <LoaderPage />
  }

  return (
    <>
      <main>
        <h1>Mis favoritos</h1>
        {favoriteProducts.length > 0 ? (
          <ProductsCatalog products={favoriteProducts} />
        ) : (
          <p>No tienes productos favoritos.</p>
        )}
      </main>
    </>
  );
}

export default FavoritesPage;
