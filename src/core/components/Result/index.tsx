import React from 'react';
import profile from '../../assets/perfil-thaylor.jpg';
import Button from '../Button';
import ProfileInfo from './components/ProfileInfo';
import Social from './components/Social';
import './style.css'

const Result = () => {
    return (
        <div className="result-box">
            <div className="result-image">
                <img src={profile} alt="" />
                <Button text="Ver perfil" />
            </div>
                <div className="info-box">

                    <h2 className="result-title">Informações</h2>
                    <ProfileInfo field="Empresa" value="Infracommerce" />
                    <ProfileInfo field="Website/Blog" value="https://thaylor.carvalho.com" />
                    <ProfileInfo field="Localidade" value="São Paulo" />
                    <ProfileInfo field="Membro desde" value="01/01/2021" />
                </div>
        </div>
    );
}

export default Result;