import React from 'react';
import Button from '../../core/components/Button';
import './style.css';

const Search = () => {
    return (
        <div className="container-search">
            <h1>Encontre um perfil no github</h1>
            <input type="text" placeholder="Usuário Github" />
            <Button text="Procurar" />
        </div>
    );
}

export default Search;