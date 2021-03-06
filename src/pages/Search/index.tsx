import React, { useState } from 'react';
import Result from '../../core/components/Result';
import { makeRequest } from '../../core/utils/request';
import './style.css';

const Search = () => {

    const [user, setUser] = useState('');
    const [userData, setUserData] = useState();

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
       event.preventDefault();
        makeRequest({url: `${user}`, method: 'GET'})
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className="search-container">
            <form>
                <div className="box-search">
                    <h1>Encontre um perfil no Github</h1>
                    <input 
                        type="text" 
                        placeholder="Usuário Github"
                        value={user}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        required
                    />
                    <input type="submit" className="btn btn-primary submit-button" value="Encontrar"/>
                </div>
            </form>
            <div className="result-container">
                <Result />
            </div>
        </div>
    );
}

export default Search;