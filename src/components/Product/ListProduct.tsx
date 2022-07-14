import React, {useEffect, useState} from "react";
import {ProductEntity} from 'types'
import {ProductTable} from "./ProductTable";
import {CircularProgress} from "@mui/material";


export const ListProduct = () => {
  const [productsList,setproductsList] = useState<ProductEntity[]| null> (null);

    const refreshProducts = async () => {
        setproductsList(null);
        const res = await fetch('http://localhost:3001/product');
        const data = await res.json(); //rozkodowujemy dane
        setproductsList(data.productsList);
    };

  useEffect(() => {
    refreshProducts();

  }, []);


  if (productsList=== null) {
      return <p>wczytywanie...</p>
  }

return <>
    < ProductTable  products={productsList} onProductsChange={refreshProducts}/>
</>;
};