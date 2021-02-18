import React from 'react';
import Button from '../../core/components/Button';
import Result from '../../core/components/Result';
import './style.css';

const Search = () => {
    return (
        <div className="search-container">
            <div className="box-search">
                <h1>Encontre um perfil no Github</h1>
                <input type="text" placeholder="Usuário Github" />
                <Button text="Encontrar" />
            </div>
            <div className="result-container">
                <Result />
            </div>
        </div>
    );
}

export default Search;