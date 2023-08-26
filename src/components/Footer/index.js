import { BiLogoLinkedin } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import React, { useState, useEffect } from 'react';
import './footer.css'

const Footer = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const isScrollable = maxScroll > 0;

            if (!isScrollable) {
                setIsFooterVisible(true);
            } else {
                setIsFooterVisible(scrollY >= maxScroll);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <footer>
            <navi className='rodape'>
                <ul className={isFooterVisible ? 'visible-footer' : 'hidden-footer'}>
                    <li className="itens">
                        encontre me:
                    </li>
                    <li className='itens'>
                        <BiLogoLinkedin
                            size={20}
                            className='contatol'
                        />
                    </li>
                    <li className='itens'>
                        <FaWhatsapp
                            size={20}
                            className='contatow'
                        />
                    </li>
                    <li className='itens'>
                        @Guissdev
                        <AiFillGithub
                            size={20}
                            className='github'
                        />
                    </li>
                </ul>
            </navi>
        </footer>
    )
}

export default Footer