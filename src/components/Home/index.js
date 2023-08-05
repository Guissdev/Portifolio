import Game from '../Game';
import './home.css'

const Home = () => {
    return (
        <div className='presentation'>
            <div className='greeting'>
                <h3>Olá a todos. Me chamo</h3>
                <h1>Guilherme Santos</h1>
                <h2>&gt; Desenvolvedor Front-end</h2>

                <br />
                <br />

                <p>// seja bem vindo ao meu portifólio</p>
                <p>// você também pode conferir meu perfil do github</p>
                <p className='link'><span className='const-word'>const </span><span className='github-link'>githubLink</span> = <a href='https://github.com/Guissdev' target='_blank'><span className='link-name'>"https://github.com/Guissdev"</span></a></p>
            </div>
            <Game />
        </div>
    );
}

export default Home