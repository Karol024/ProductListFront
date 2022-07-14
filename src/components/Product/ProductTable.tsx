import React from "react";
import {ProductEntity} from 'types';
import {ProductTableRow} from "./ProductTableRow";
import {Item} from "../commons/item";

interface Props {
    products: ProductEntity[];
    onProductsChange: () => void;
}

export const ProductTable = (props: Props) =>(
    <table>
<thead>
           <tr>
                <Item>
                    Produkt
                </Item>

                <th>
                    <Item>
                    Ilość
                </Item>
                </th>

                <th>
                    <Item>
                    Usuń
                    </Item>
                </th>
     </tr>
    </thead>
        <tbody>
        {
            props.products.map(product => (
                <ProductTableRow product={product} key={product.id} onProductsChange={props.onProductsChange}/>
            ))
        }
        </tbody>
    </table>
);












