import React, {MouseEvent} from "react";
import {ProductEntity} from 'types';
import {Link} from "react-router-dom";



interface Props {
    product: ProductEntity;
    onProductsChange: () => void;
    className? : string | undefined
}

export const ProductTableRow = (props: Props) => {

        const deleteProduct = async (e: MouseEvent) => {
            e.preventDefault();

            if (!window.confirm(`Jestes pewny czy chcesz usunąć ${props.product.name}?`)) {
                return;
            }

            const res = await fetch(`http://localhost:3001/product/${props.product.id}`, {
                method: 'DELETE',
            });

            if (res.status === 400 || res.status === 500) {
                const error = await res.json();
                alert(`Błąd: ${error.message}`);
                return;
            }
            props.onProductsChange();
        };

        return (
            <tr>
                <Link className="link" to={`/product/${props.product.id}`}>

                        {props.product.name}

                    </Link>

                <td className="td">
                     {props.product.count}
                </td>

                <td>
                    <a  href="" onClick={deleteProduct}>

                    </a>
                </td>
            </tr>

        );
    };


