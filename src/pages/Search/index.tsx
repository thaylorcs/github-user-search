import React, { ButtonHTMLAttributes } from 'react';
import Result from '../../core/components/Result';
import './style.css';

const Search = () => {

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
    }

    return (
        <div className="search-container">
            <form>
                <div className="box-search">
                    <h1>Encontre um perfil no Github</h1>
                    <input 
                        type="text" 
                        placeholder="Usuário Github" 
                        required
                    />
                    <input type="submit" className="btn btn-primary" value="Encontrar"/>
                </div>
            </form>
            <div className="result-container">
                <Result />
            </div>
        </div>
    );
}

export default Search;