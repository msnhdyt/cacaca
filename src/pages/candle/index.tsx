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
      semoga apa yang ayang harapin tercapai,
      semoga ayang sehat selalu,
      dilancarkan rezekinya,
      dimudahkan urusannya,
      Aamiin...
      <br />
    `
  },
  {
    sentence: `
      puisi untuk ayang ...
      <br />
      <br />
      karya pacar caca 
      <br />
      <br />
      grung grung grung ... <br />
      mobil motor berlalu lalang melintasi jalan <br />
      gemuruh orang terdengar nyaring <br />
      kipas berhembus <br />
      kucing mengeong <br />
      anjing menggonggong <br />
      tak membuatku merasa ramai <br /> 
      tanpamu semuanya terasa sepi <br />
      <br />
      sungguh beruntung aku memilikimu <br />
      Kehadiranmu begitu berharga dan berarti bagiku <br />
      Engkau adalah sinar dalam kegelapanku <br />
      <br />
    `,
    audio: true
  },
  {
    sentence: `
      Setiap langkahku terasa lebih ringan <br />
      Ketika kau berjalan di sebelahku, tangan dalam tangan <br />
      Kau memberiku keberanian dan keyakinan <br />
      Untuk menghadapi segala tantangan, tak terbatas ruang dan waktu <br />
      <br />
      Senyummu, begitu mempesona dan tulus <br />
      Menghiasi hari-hariku dengan kebahagiaan tiada tara <br />
      Setiap sorot matamu, memancarkan kasih dan kelembutan <br />
      Seolah-olah dunia terhenti dan hanya kita berdua yang ada <br />
      <br />
      Terima kasih telah hadir dalam hidupku <br />
      Mengisi setiap hari dengan kebahagiaan yang tak terhingga <br />
      Engkau adalah harta terindah yang kumiliki <br />
      Kehadiranmu, hadiah terindah, takkan pernah kusia-siakan <br />
    `,
    audio: true
  },
  {
    sentence: 'Sekian dari aku ayang....',
    audio: true
  },
  {
    sentence: 'Waktunya tiup lilin',
    action: 'Tiup Lilin'
  }
]
const CandleIndex = () => {
  const [showIndex, setShowIndex] = useState<number>(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false)
  const [poetryIndex, setPoetryIndex] = useState<number>(0)
  const [isCandleOn, setIsCandleOn] = useState<boolean>(true)
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
              onClick={() => {
                if(showIndex < show.length-1){
                  setShowIndex(showIndex + 1)
                  if(show[showIndex+1].audio) setPoetryIndex(poetryIndex + 1)
                }
                if(show[showIndex].action) { 
                  setIsCandleOn(false)
                  setIsAudioPlaying(false)
                }
              }} >
                {
                  show[showIndex].action ? show[showIndex].action : 'next'
                }
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-row justify-center"> 
        {
          isCandleOn &&  <img src="/src/assets/giphy-candle.webp" alt="" className="" />
        }
        {
          show[showIndex].action && <img className='absolute left-96 top-52' width={100} src="./src/assets/images/tiup.png" alt="" />
        }
      </div>
    </div>
    <button onClick={() => setIsAudioPlaying(!isAudioPlaying)} className='absolute bottom-0 text-slate-700'>{isAudioPlaying ? 'pause' : 'play'}</button>
    <ReactHowler src={'/src/assets/audios/Backsound Puisi.mp3'} 
      playing={isAudioPlaying} 
      volume={0.2} 
      loop={true} />
    <ReactHowler src={'/src/assets/audios/1.mp3'} 
      playing={poetryIndex === 1} 
      volume={0.5} />
    <ReactHowler src={'/src/assets/audios/2.mp3'} 
      playing={poetryIndex === 2} 
      volume={0.5} />
  </>
}

export { CandleIndex }