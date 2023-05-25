import { useState } from 'react'
import { Zoom } from 'react-slideshow-image'
import ReactHowler from 'react-howler'
import { useNavigate } from 'react-router-dom'

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 1.4,
  arrows: true
};

const images = [
  {
    label: 'ayang bunglon',
    src: '/src/assets/images/ayang bunglon.png'
  },
  {
    label: 'ayang ee',
    src: '/src/assets/images/ayang lagi ee.jpg'
  },
  {
    label: 'ayang dalam selimut',
    src: '/src/assets/images/domba dalam selimut.png'
  },
  {
    label: 'ayang mirip ibu evi',
    src: '/src/assets/images/emak.jpg'
  },
  {
    label: 'ayang mata dajal',
    src: '/src/assets/images/mata.png'
  },
  {
    label: 'salat serem',
    src: '/src/assets/images/pocong.png'
  },
  {
    label: 'ayang ga punya muka',
    src: '/src/assets/images/tanpa muka.png'
  },
]

const AfterSimpleIndex = () => {  
  // const [playSound, {duration, sound}] = useSound('src/assets/audios/Happy_Birthday_Kids_Songs.mp3', {
  //   volume: 0.2,
  //   interrupt: true,
  // })
  const [isShow, setIsShow] = useState<boolean>(true)
  const [isStart, setIstart] = useState<boolean>(false)
  const navigate = useNavigate()

  const onEnd = () => {
    navigate('/candle')
  }

  return <>
  <div className="bg-[url('/src/assets/images/beige-paintbrush-stroke-textured-background.jpg')] bg-repeat-round bg-contain">
    <div className='slide-container h-screen w-[500px] mx-auto border-2 border-solid border-gray-500 rounded-lg'>
      <Zoom {...zoomOutProperties} >
        {
          images.map((img, index) => {
            return <div key={index}>
              <h1 className='mx-auto text-center font-mono text-2xl py-3'>{img.label}</h1>
              <img style={{ height: '85vh', margin: 'auto', borderRadius: '8px' }} alt="Slide Image" src={img.src} />
            </div>
          })
        }
      </Zoom>
    </div>
  </div>
  {
    isShow && 
    <div className='h-screen w-full absolute top-0 left-0 bg-red-100 z-50'>
      <div className='flex flex-col justify-center items-center h-full'>
        <p className='text-xl bg-red-300 p-6 rounded-lg' onClick={() => { 
          setIsShow(false)
          setIstart(true)
        }}
        >diklik ya ayang</p> 
      </div>
    </div>
  }
  <ReactHowler src={'/src/assets/audios/Happy_Birthday_Kids_Songs.mp3'} 
    playing={isStart} 
    volume={0.2}
    onEnd={onEnd} />
  </>
}

export { AfterSimpleIndex }