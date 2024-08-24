import { useState } from 'react'


function App() {
  const [color,setColor] = useState("#64748b")
  return (
    <>
    <div className="h-screen w-full duration-200 text-white"
    style= {{backgroundColor:color}}> 
    <div className="fixed flex  justify-center  bottom-12 inset-x-0">
      <div className="flex p-4 bottom-12  gap-4 bg-white rounded-3xl shadow-lg">
        <button onClick={()=>setColor("green")} className="bg-green-700 px-3 py-1 rounded-3xl shadow-lg">Green</button>
        <button onClick={()=>setColor("blue")} className="bg-blue-900 px-3 py-1 rounded-3xl shadow-lg">Blue</button>
        <button onClick={()=>setColor("black")} className="bg-black px-3 py-1 rounded-3xl shadow-lg">Black</button>
        <button onClick={()=>setColor("white")} className="bg-white text-black px-3 py-1 rounded-3xl shadow-lg">White</button>
        <button onClick={()=>setColor("#334155")} className="bg-slate-700 px-3 py-1 rounded-3xl shadow-lg">Slate</button> 
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
