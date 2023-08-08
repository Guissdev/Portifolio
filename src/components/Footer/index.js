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
            <div className={isFooterVisible ? 'visible-footer' : 'hidden-footer'}>
                <h4>encontre me:</h4>
                    <BiLogoLinkedin
                        size={20}
                        className='contatolw'
                    />
                    <FaWhatsapp
                        size={20}
                        className='contatolw'
                    />
                    <h4>
                        @Guissdev
                        <AiFillGithub
                            size={20}
                            className='github'
                        />
                    </h4>
            </div>
        </footer>
    )
}

export default Footer