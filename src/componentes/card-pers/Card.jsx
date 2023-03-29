import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const {name, image}= props.pers;
    const navigate = useNavigate();
return (
    <div class="card col-3  mx-2 my-2 g-0 shadow">
        <img src={image} class="card-img-top" alt={name}/>
        <div class="card-body  text-center  d-flex flex-column justify-content-between ">
            <h5 class="card-title">{name}</h5>
            <div className='text-center'>
                <a href="#" class="btn btn-primary" onClick={()=>navigate('/home')}>Go home</a>
            </div>
        </div>
    </div>
)
};

export default Card;