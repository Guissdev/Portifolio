import './game.css'
import Snake from '../Snake'

const Game = () => {
    return (
        <div className='game'>
            <img className='background-image' src='./images/Background.png' alt='Background' />
            <Snake />
            <div className='instructions'>
                <div className='text'>
                    <p className='instruction-text'>// Use as teclas de</p>
                    <p className='instruction-text'>// flechas para jogar</p>
                </div>
                

                <div className='arrows'>
                    <div className='up-arrow'>
                        <img src='./images/Up.png' />
                    </div>
                    <div className='arrows3'>
                        <img src='./images/Left.png' />
                        <img src='./images/Down.png' />
                        <img src='./images/Right.png' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Game