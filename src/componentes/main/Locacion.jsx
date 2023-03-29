import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../card-locat/Card';

const Locacion = () => {

    const [locac, setlocac] = useState()

    useEffect(() => {
    getLocacion()
    }, [])
    

    const getLocacion = async()=>{
        const urlLocacion = 'https://rickandmortyapi.com/api/location'
        const {data} = await axios(`${urlLocacion}`)
        console.log(data);
        setlocac(data);
    }
    getLocacion()
    

return (
    <>
    <div className='container'>
        <div className='row'>
            {
             locac?.results?.map((loc)=> <Card loc={loc}  />)   
            }
        </div>
    </div>
    </>
)
};

export default Locacion;