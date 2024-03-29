import { useEffect, useRef, useState } from 'react'
import { APPLE_START, CANVAS_SIZE, DIRECTIONS, SCALE, SNAKE_START, SPEED } from '../Constants'
import { useInterval } from '../Interval'
import './snake.css'

const Snake = () => {

    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START)
    const [apple, setApple] = useState(APPLE_START)
    const [dir, setDir] = useState([0, -1])
    const [speed, setSpeed] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const startGame = () => {
        setSnake(SNAKE_START)
        setApple(APPLE_START)
        setDir([0, -1])
        setSpeed(SPEED)
        setGameOver(false)
    }

    const endGame = () => {
        setSpeed(null)
        setGameOver(true)
    }

    const moveSnake = ({ keyCode }) =>{
        if (
            (keyCode === 38 && dir[1] === 1) || // Tecla cima (oposto a baixo)
            (keyCode === 40 && dir[1] === -1) || // Tecla baixo (oposto a cima)
            (keyCode === 37 && dir[0] === 1) || // Tecla esquerda (oposto a direita)
            (keyCode === 39 && dir[0] === -1) // Tecla direita (oposto a esquerda)
        ) {
            return;
        }

        // Movimentar a cobra na direção adequada
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
    };

    const createApple = () =>
        apple.map((_, i) => Math.floor(Math.random() * (CANVAS_SIZE[i]) / SCALE))

    const checkCollision = (piece, snk = snake) => {
        if (
            piece[0] * SCALE >= CANVAS_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= CANVAS_SIZE[1] ||
            piece[1] < 0
        )
            return true
        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) return true
        }
        return false
    }

    const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple()
            while (checkAppleCollision(newApple, newSnake)) {
                newApple = createApple()
            }
            setApple(newApple)
            return true
        }
        return false
    }

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake))
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]
        snakeCopy.unshift(newSnakeHead)
        if (checkCollision(newSnakeHead)) endGame()
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop()
        setSnake(snakeCopy)
    }

    useEffect(() => {
        const context = canvasRef.current.getContext('2d')
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1])
        context.fillStyle = '#43D9AD'
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
        context.fillStyle = 'lightgreen'
        context.fillRect(apple[0], apple[1], 1, 1)

    }, [snake, apple, gameOver])

    useInterval(() => gameLoop(), speed)

    return (
        <div className="game-container" role='button' tabIndex='0' onKeyDown={e => moveSnake(e)}>
            <canvas
                className="game-canvas"
                ref={canvasRef}
                width={`${CANVAS_SIZE[1]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
            {gameOver && <div className="game-over">GAME OVER!</div>}
            <button className="start-button" onClick={startGame}>Começar o jogo</button>
        </div>
    );
}

export default Snake