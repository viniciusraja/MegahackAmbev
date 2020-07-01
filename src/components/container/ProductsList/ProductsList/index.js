import React from 'react';

import ProductsList from './ProductsList'

export default (props) => {
  return (
    <ProductsList categoryId={props.categoryId} products={props.products} productsListTitle={props.productsListTitle} productsListSubtitle={props.productsListSubtitle} 
    />
  );
};
