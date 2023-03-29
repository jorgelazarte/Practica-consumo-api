import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    const {name, type, url}=props.loc
return (
    <div class="card col-3 mx-2 my-2">        
            <div class="card-body text-center d-flex flex-column justify-content-between">
                <h5 class="card-title text-center">{name}</h5>
                <div className='text-center'>
                    <a href="#" class="btn btn-primary" onClick={()=>navigate('/home')}>Go somewhere</a>
                </div>
            </div>
    </div>
)
};

export default Card;