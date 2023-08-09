import './header.css';
/*import React, { useState, useEffect } from 'react';*/

const Header = () => {
    /*const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            setIsHeaderVisible(window.pageYOffset === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    */

    return (
        <header>
            <div className='cabecalho'>
                <h4 className='name'>guilherme-santos</h4>
                <h4 className='navi'>_hello</h4>
                <h4 className='navi'>_sobre-mim</h4>
                <h4 className='navi'>_projetos</h4>
                <h4 className='navi'>_contato</h4>
            </div>
        </header>
    )
}

export default Header;
