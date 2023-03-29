import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../card-pers/Card';

const Personaje = () => {
    const [apiPers, setapiPers] = useState();
    
    useEffect(() => {
    getDataPers()
    }, [])
    

    const getDataPers= async() =>{
    const urlPers="https://rickandmortyapi.com/api/character";
    const {data} = await axios.get(`${urlPers}`)
    
    setapiPers(data);
        
    }

    
return (
    <>
        <div className='container'>
            <h1 className='text-center'>Personajes</h1>
            <div className='row d-flex justify-content-center'>
                {
                    apiPers?.results?.map((pers)=> <Card pers= {pers} /> )
                }
            </div>
        </div>
    </>
)
};

export default Personaje;