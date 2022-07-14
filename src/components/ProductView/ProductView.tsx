import React from 'react';
import {Header} from "../Header/Header";
import {ListProduct} from "../Product/ListProduct";
import {AddProduct} from "../AddProduct/AddProduct";


export const ProductView = () => {
    return(
        <>
            <Header/>
            <ListProduct/>
            <AddProduct/>
        </>
    );
}