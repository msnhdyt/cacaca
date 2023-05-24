import ReactHowler from 'react-howler'
import { useState } from 'react'
import { Button } from 'antd'

const show = [
  {
    sentence: `
      Hai sayang ...
    `
  },
  {
    sentence: `
      Aku mau nanya entar ayang jawab yaa ...
    `
  },
  {
    sentence: 'Ayang masih sayang aku ga?'
  },
  {
    sentence: 'Ehee... aku juga masih sayang'
  },
  {
    sentence: 'Ga kerasa ya ayang, ayang dah 23 tahun, dah tuaa :p'
  },
  {
    sentence: 'Rasanya gimana ayang udah 23 tahun?'
  },
  {
    sentence: 'Apa yang paling ayang banggakan sampe sekarang?'
  },
  {
    sentence: 'Sejauh ini ada sesuatu yang masih belum tercapai ga ayang?'
  },
  {
    sentence: 'Apa rencana ayang beberapa tahun ke depan?'
  },
  {
    sentence: 'Kalo keinginan terbesar ayang apa buat sekarang?'
  },
  {
    sentence: 'Kalo ayang bahagia ga sama aku?'
  },
  {
    sentence: 'Sebahagia apa ayang?'
  },
  {
    sentence: 'Ayang ada sesuatu yang mau disampein ke aku ga?'
  },
  {
    sentence: 'Terakhir, Harapan-harapan ayang kedepannya apa?'
  },
  {
    sentence: 'Ayaaang...'
  },
  {
    sentence: 'Ayaaaaaaaang...'
  },
  {
    sentence: 'Jawab ish ayang!'
  },
  {
    sentence: 'ehe.'
  },
  {
    sentence: `
      Selamat ulang tahun ayang... 
      semoga apa yang kamu harapin tercapai,
      semoga ayang sehat selalu,
      dilancarkan rezekinya,
      dimudahkan urusannya,
      Aamiin...
      <br />
      <br />
      Ayaaang...
      <br />
      Aku mau bilang makasi buat semuanya ayang, 
      makasi udah mau bertahan sama aku 

    `
  },
]
const CandleIndex = () => {
  const [showIndex, setShowIndex] = useState<number>(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false)
  return <>
    <div className="bg-black h-screen relative flex flex-row">
      <div className="w-1/2 h-full flex flex-col justify-center">
        <div className="bg-slate-900 m-6 h-[90%] rounded-lg p-4 relative">
          <div className="text-slate-500" dangerouslySetInnerHTML={{__html: show[showIndex].sentence }}></div>
          <div className='absolute right-5 bottom-5'>
            <Button 
              type='primary' 
              style={{backgroundColor: 'rgb(51 65 85)'}}
              className='text-slate-400'
              onClick={() => setShowIndex(showIndex + 1)} >next</Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-row justify-center"> 
        <img src="./src/assets/giphy-candle.webp" alt="" className="" />
      </div>
    </div>
    <button onClick={() => setIsAudioPlaying(!isAudioPlaying)} className='absolute bottom-0 text-slate-700'>{isAudioPlaying ? 'pause' : 'play'}</button>
    <ReactHowler src={'src/assets/audios/y2mate.com - No Copyright1 Hour Sad and Emotional Piano Music Collection with quotes.mp3'} 
      playing={isAudioPlaying} 
      volume={0.2} />
  </>
}

export { CandleIndex }