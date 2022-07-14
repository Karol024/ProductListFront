import React, {MouseEvent} from "react";
import {ProductEntity} from 'types';
import {Link} from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Item} from "../commons/item";

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
                        <Item>
                        {props.product.name}
                        </Item>
                    </Link>

                <td className="td">
                    <Item> {props.product.count} </Item>
                </td>

                <td>
                    <a  href="" onClick={deleteProduct}>
                        <DeleteForeverIcon/>
                    </a>
                </td>
            </tr>

        );
    };


