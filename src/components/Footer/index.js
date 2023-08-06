import { BiLogoLinkedin} from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='rodape'>
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