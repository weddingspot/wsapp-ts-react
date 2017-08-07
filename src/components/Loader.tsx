import * as React from 'react';

const loaderSVG = require('../assets/img/loader/hearts.svg');

export function Loader() {
    return (
        <div className="Loader" >
            <img className="Loader--svg" src={loaderSVG} alt="" />
            <div className="Loader--text">LOADING</div>
        </div>
    );
}

export default Loader;