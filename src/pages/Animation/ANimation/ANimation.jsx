import { useState, useEffect } from 'react'
import './ANimation.css' // อย่าลืมเพิ่ม CSS ที่จำเป็น
import 'bootstrap/dist/css/bootstrap.min.css'

const fieldWidth = 765
const fieldHeight = 400
const ballSize = 200

const ANimation = () => {
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [vX, setVX] = useState(5)
  const [vY, setVY] = useState(5)
  const [goRight, setGoRight] = useState(true)
  const [goDown, setGoDown] = useState(true)
  const [imageType, setImageType] = useState('none')
  const [setlectedImage, setSelectedImage] = useState('none')

  const maxX = fieldWidth - ballSize - 2
  const maxY = fieldHeight - ballSize - 2

  const getRandomSpeed = (min, max) => Math.random() * (max - min) + min

  const calculate = () => {
    let newX = x
    let newY = y
    let newRotation = rotation

    // Move right
    if (goRight) {
      newX += vX
      if (newX >= maxX) {
        setGoRight(false)
        newX = maxX - (newX - maxX)
        setVX(getRandomSpeed(2, 7))
      }
    } else {
      newX -= vX
      if (newX <= 0) {
        setGoRight(true)
        newX = -newX
        setVX(getRandomSpeed(2, 7))
      }
    }

    // Move down
    if (goDown) {
      newY += vY
      if (newY >= maxY) {
        setGoDown(false)
        newY = maxY - (newY - maxY)
        setVY(getRandomSpeed(2, 7))
      }
    } else {
      newY -= vY
      if (newY <= 0) {
        setGoDown(true)
        newY = -newY
        setVY(getRandomSpeed(2, 7))
      }
    }

    newRotation += goRight ? vX : -vX
    setX(newX)
    setY(newY)
    setRotation(newRotation)
  }

  const process = () => {
    if (running) {
      calculate()
    }
  }

  useEffect(() => {
    const interval = setInterval(process, 25)
    return () => clearInterval(interval)
  }, [running, x, y, rotation])

  const toggleRun = () => {
    setRunning((prev) => !prev)
  }

  const changeImage = (type) => {
    setImageType(type)
    setSelectedImage(type);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        toggleRun()
      }

      const types = ['none', 'NBA', 'football1', 'vol', 'che', 'cartoons', 'logo1'];
      const index = parseInt(event.key);
      if (!isNaN(index) && index >= 0 && index < types.length) {
        setImageType(types[index]);
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className='animate-container'>
      <div
        id='field'
        style={{
          width: fieldWidth,
          height: fieldHeight,
          position: 'relative',
          border: '1px solid black',
        }}
      >
        <div
          id='ball'
          style={{
            width: ballSize,
            height: ballSize,
            position: 'relative',
            left: x,
            top: y,
            backgroundImage:
              imageType !== 'none' ? `url('./${imageType}.png')` : 'none',
            backgroundSize: '120%',
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>

      <button
        id='run'
        onClick={toggleRun}
        className={`btn ${running ? 'btn-danger' : 'btn-success'}`}
      >
        {running ? 'Pause' : 'Run'}
      </button>
      <span>
        <button
          id='button-images'
          onClick={() => changeImage('none')}
          className='btn btn-outline-danger'
        >
          None
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('NBA')}
          className='btn btn-outline-primary'
        >
          Basketball
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('football1')}
          className='btn btn-outline-primary'
        >
          Football
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('vol')}
          className='btn btn-outline-primary'
        >
          Volleyball
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('che')}
          className='btn btn-outline-primary'
        >
          Human
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('cartoons')}
          className='btn btn-outline-primary'
        >
          Cartoon
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('logo1')}
          className='btn btn-outline-primary'
        >
          Logo
        </button>
      </span>
      <br />
      <br />
    </div>
  )
}

export default ANimation
