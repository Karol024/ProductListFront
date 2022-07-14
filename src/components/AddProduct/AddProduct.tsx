import React, { FormEvent, useEffect, useState} from "react";
import { CreateProductReq, ProductEntity } from "types";


export const AddProduct = () => {
    const [form,setForm] = useState<CreateProductReq>({
        name: '',
        count: 0,
    })
    const [ladowanie,setLadowanie] = useState<boolean>(false);
    const [rezultat,setRezultat] = useState<string | null>(null);

    const FormularzUpdate = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLadowanie(true);

        try {


            const res = await fetch(`http://localhost:3001/product`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: ProductEntity  = await res.json();

            setLadowanie(false);
            setRezultat(`Dodano produkt ${data.name} o ID ${data.id}`);
        }finally {
            setLadowanie(false);
        }
    };

    if (ladowanie) {
        return <p>wczytywanie...</p>
    }

    if (rezultat !==null) {
        return <div>
            <p><strong>{rezultat}</strong></p>
            <button onClick={() => setRezultat(null)}>Dodaj Kolejne</button>
        </div>
    }


    return <form onSubmit={sendForm}>
        <h2>Dodaj prezent</h2>

        <p>
            <label>
                Name: <br/>
                <input
                    type="text"
                    value={form.name}
                    onChange={e => FormularzUpdate('name', e.target.value)}
                />
            </label>
        </p>

        <p>
            <label>
                Count: <br/>
                <input
                    type="number"
                    value={form.count}
                    onChange={e => FormularzUpdate('count', Number(e.target.value))}
                />
            </label>
        </p>

        <button type={"submit"}>Dodaj</button>
    </form>
};