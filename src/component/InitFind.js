import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ProductList from './product/ProductList';

import './InitFind.css';

const InitFind = () => {

    const [findInput, setFindInput] = useState('');
    const [productsList, setProductsList] = useState([]);

    const handleFindClick = async () => {
        console.log('aca', productsList);
        setProductsList(productsList.filter(x => x.id === 0));
        if (findInput.length >= 3) {
            axios.get(process.env.REACT_APP_BASE_API_URI + "/product/" + findInput)
                .then(res => {
                    const products = res.data;
                    setProductsList([...products]);
                })

        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleFindClick()
        }
    }

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={6}>
                    <Grid container justify="center">
                        <TextField onKeyDown={handleKeyDown} onChange={e => setFindInput(e.target.value)} fullWidth id="txtFind" label="Buscar" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid item >
                    <Button onClick={handleFindClick} id="btnFind" variant="contained" color="primary">
                        Buscar
                    </Button>
                </Grid>
            </Grid>
            <ProductList productsList={productsList}></ProductList>
        </div>
    );
}

export default InitFind;
