import Countdown from 'react-countdown'

import { useNavigate } from 'react-router-dom'

const SimpleIndex = () => {
  const navigate = useNavigate()
  return <>
    <div className="flex flex-col justify-center items-center bg-red-400 h-screen">
      <h1 className='text-9xl'>Happy Birthday Caca!</h1>
      <Countdown date={Date.now() + 30000} className='text-red-400' onComplete={() => navigate('/after-simple')} />
    </div>
  </>
}

export { SimpleIndex }