import React, {useEffect, useState} from "react";
import {ProductEntity} from 'types'
import {ProductTable} from "./ProductTable";
import {CircularProgress} from "@mui/material";
import {apiUrl} from "../../config/api";

export const ListProduct = () => {
  const [productsList,setproductsList] = useState<ProductEntity[]| null> (null);

    const refreshProducts = async () => {
        setproductsList(null);
        const res = await fetch(`${apiUrl}/product`);
        const data = await res.json(); //rozkodowujemy dane
        setproductsList(data.productsList);
    };

  useEffect(() => {
    refreshProducts();

  }, []);


  if (productsList=== null) {
      return <CircularProgress/>
  }

return <>
    < ProductTable  products={productsList} onProductsChange={refreshProducts}/>
</>;
};