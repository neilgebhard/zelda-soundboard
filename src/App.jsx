import { useRef, forwardRef } from 'react'

// matches names of the audio files
const sounds = [
  'chest',
  'house',
  'temple',
  'theme',
  'link-to-the-past',
  'rupee-collect',
  'saria-song',
]

const Audio = forwardRef(({ src, play }, ref) => {
  return (
    <div>
      <audio src={`${src}.mp3`} ref={ref} />
      <button
        className='border border-black rounded px-3 py-2 hover:scale-105 active:scale-95 duration-75 text-white bg-green-800'
        onClick={play}
      >
        {src
          .split('-')
          .map((sound) => sound[0].toUpperCase() + sound.substr(1))
          .join(' ')}
      </button>
    </div>
  )
})

function App() {
  const refs = useRef([])

  const play = (i) => {
    refs.current.forEach((sound) => {
      sound.pause()
      sound.currentTime = 0
    })
    refs.current[i].play()
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-800'>
      <div>
        <h1 className='text-center font-bold text-2xl mb-8 text-slate-50'>
          Zelda Sound Effects
        </h1>
        <div className='inline-flex gap-5 flex-wrap justify-center'>
          {sounds.map((sound, i) => (
            <Audio
              src={sound}
              key={sound}
              ref={(el) => (refs.current[i] = el)}
              play={() => play(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
