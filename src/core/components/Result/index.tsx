import React from 'react';
import profile from '../../assets/perfil-thaylor.jpg';
import Button from '../Button';
import './style.css'

const Result = () => {
    return (
        <div className="result-box">
            <div className="result-image">
                <img src={profile} alt=""/>
                <Button text="Ver perfil" />
            </div>
            
            <div>
                <h2 className="result-title">Informações</h2>
            </div>
        </div>
    );
}

export default Result;