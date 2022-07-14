import React from "react";
import {ProductEntity} from 'types';
import {ProductTableRow} from "./ProductTableRow";


interface Props {
    products: ProductEntity[];
    onProductsChange: () => void;
}

export const ProductTable = (props: Props) =>(
    <table>
<thead>
           <tr>

                    Produkt


                <th>

                    Ilość

                </th>

                <th>

                    Usuń

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












