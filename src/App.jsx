import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [color, setColor] = useState("wheat")

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none border-none px-7 py-1 text-white rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "red"}}
            onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none border-none px-7 py-1 text-white rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "blue"}}
            onClick={()=>setColor("blue")}>Blue</button>
            <button className='outline-none border-none px-7 py-1 text-white rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "black"}}
            onClick={()=>setColor("black")}>Black</button>
            <button className='outline-none border-none px-7 py-1 text-white rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "green"}}
            onClick={()=>setColor("green")}>Green</button>
            <button className='outline-none border-none px-7 py-1 text-black rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "yellow"}}
            onClick={()=>setColor("yellow")}>Yellow</button>
            <button className='outline-none border-none px-7 py-1 text-black rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "pink"}}
            onClick={()=>setColor("pink")}>Pink</button>
            <button className='outline-none border-none px-7 py-1 text-white rounded-lg font-bold shadow-lg'
            style={{backgroundColor: "purple"}}
            onClick={()=>setColor("purple")}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
