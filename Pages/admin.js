import Nav from '../components/Nav'
import { useState } from 'react'


export default function Admin(){
const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [msg, setMsg] = useState('')


async function addLevel(e){
e.preventDefault()
const res = await fetch('/api/addLevel', {
method:'POST', headers:{'Content-Type':'application/json'},
body:JSON.stringify({name, author: email})
})
if(res.ok){ setName(''); setMsg('Level added'); }
else setMsg('Error')
}


return (
<div className='min-h-screen'>
<Nav />
<main className='p-8'>
<h1 className='text-2xl font-bold'>Admin</h1>
<form onSubmit={addLevel} className='mt-6'>
<input value={name} onChange={e=>setName(e.target.value)} placeholder='Level name' className='border p-2'/>
<button className='ml-2 bg-green-600 text-white px-3 py-1 rounded'>Add Level</button>
</form>
<div className='mt-4 text-sm text-gray-600'>{msg}</div>
</main>
</div>
)
  }
