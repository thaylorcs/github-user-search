import React from 'react';
import './style.css';

type Props = {
    title: string;
    value: string;
}

const Social = ({title, value}: Props) => {
    return (
        <div className="social">
            <p className="social-title">{title}: <span className="value">{value}</span></p>
        </div>
    );
}

export default Social;