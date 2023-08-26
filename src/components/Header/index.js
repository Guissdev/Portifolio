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
            <navi className='cabecalho'>
                <ul className='navi'>
                    <li className='itens'>guilherme-santos</li>
                    <li className='itens'>_hello</li>
                    <li className='itens'>_sobre-mim</li>
                    <li className='itens'>_projetos</li>
                    <li className='itens'>_contato</li>
                </ul>
            </navi>
        
                
        </header >
    )
}

export default Header;
