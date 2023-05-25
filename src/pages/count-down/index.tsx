// Countdown
import Countdown from 'react-countdown'

// Interfaces
import { CountdownRenderProps } from 'react-countdown/dist/Countdown'

// Antd
import { Row, Col } from 'antd'

// Use-sound
import { useSound } from 'use-sound'

import { useNavigate } from 'react-router-dom'

const CountDownIndex = () => {
  const [ playSound ] = useSound('src/assets/audios/10-second-sound.mp3', {
    volume: 0.2
  })
  const navigate = useNavigate()

  const renderer = ({days, hours, minutes, seconds}: CountdownRenderProps) => {

    const playSoundWithCondition = () => {
      if(days === 0 && hours === 0 && minutes === 0 && seconds === 10) playSound()
    }

    return <>
      {playSoundWithCondition()}
      <Row>
        <Col>
          <Row className='text-white text-8xl font-bold' justify='center'>
            {days <= 9 ? `0${days}` : days}:
          </Row>
          <Row justify='center' className='text-[#B08F56] text-2xl'>
            Days
          </Row>
        </Col>
        <Col>
          <Row justify='center' className='text-white text-8xl font-bold'>
            {hours <= 9 ? `0${hours}` : hours}:
          </Row>
          <Row justify='center' className='text-[#B08F56] text-2xl'>
            Hrs
          </Row>
        </Col>
        <Col>
          <Row justify='center' className='text-white text-8xl font-bold'>
            {minutes <= 9 ? `0${minutes}` : minutes}:
          </Row>
          <Row justify='center' className='text-[#B08F56] text-2xl'>
            Mns
          </Row>
        </Col>
        <Col>
          <Row justify='center' className='text-white text-8xl font-bold'>
            {seconds <= 9 ? `0${seconds}` : seconds}
          </Row>
          <Row justify='center' className='text-[#B08F56] text-2xl'>
            Secs
          </Row>
        </Col>
      </Row>
    </>
  }
  return <>
    <div className="w-full h-screen bg-[url('./src/assets/bg-birthday.jpg')] bg-cover bg-center">
      <div className='h-full flex flex-row justify-center items-center '>
        <Countdown 
          date={new Date('2023-05-26T00:00:00')}
          // date={Date.now() + 5000}
          renderer={renderer}
          onComplete={() => navigate('/simple')}
        />
      </div>
    </div>
  </>
}

export { CountDownIndex }