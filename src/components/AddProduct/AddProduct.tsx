import React, {FormEvent, useState} from "react";
import { CreateProductReq, ProductEntity, } from "types";
import { Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import {Item2} from "../commons/item2";
import CircularProgress from '@mui/material/CircularProgress';
import {Item} from "../commons/item";

export const AddProduct = () => {

  const [form,setForm] = useState<CreateProductReq>({
    name: '',
    count: 0,
  })
  const [loading,setloading] = useState<boolean>(false);
  const [result,setresult] = useState<string | null>(null);

  const FormUpdate = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    setloading(true);

    try {

    const res = await fetch(`http://localhost:3001/product`,{
       method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });


      const data: ProductEntity  = await res.json();
      setloading(false)


      setresult ( `Dodano Produkt: ${data.name}`);


     }finally {
      setloading(false)
    }
  };
  if (loading === null) {
    return <CircularProgress/>

  }

  if (result !==null) {
    return <div>
      <p><Item>{result}</Item></p>
      <Button startIcon={<AddCircleIcon/>} variant='contained' onClick={() => setresult  (null)} >Dodaj Kolejny</Button>
    </div>
  }

  return <form onSubmit={sendForm}>

    <p>
    <label>
      <Item2>
        <h1>
            Dodaj produkt
        </h1>
    </Item2>

      <TextField
          id="outlined-basic" label="Nazwa produktu" variant="outlined"
                 type="text"
                 value={form.name}
                 onChange={e => FormUpdate('name', e.target.value)}
      />
    </label>
  </p>

    <p>
      <label>
        <TextField id="outlined-basic" label="Ilość" variant="outlined"
                   type="Number"
                   value={form.count}
                   onChange={e => FormUpdate('count', Number(e.target.value))}
        />
      </label>
    </p>

    <Button startIcon={<AddCircleIcon/>} variant='contained' type='submit'>dodaj</Button>
  </form>
};