import { useState } from 'react'

function App() {
	const [text, setText] = useState('')
  

  const handleSendForm = () => {
      alert(text)
  }

	return (
		<div className='flex-1 w-full min-h-screen bg-gray-950 px-4 py-4'>
			<h1 className='text-3xl text-white font-bold text-center'>Hello World</h1>
        <form action={handleSendForm} className='flex-1 flex items-center justify-center'>
          <div className="border  focus-within:border-blue-200 rounded-xl overflow-hidden">
            <input  className='bg-white  px-2 text-2xl py-2 outline-none' value={text} onChange={e=> setText(e.currentTarget.value)} placeholder='fuck you'/>
            <button className='bg-indigo-800 text-2xl p-2 text-white '  type='submit'>Click</button>

          </div>
        </form>
		</div>
	)
}

export default App
