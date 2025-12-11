import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
export default function Levels(){
const [levels, setLevels] = useState([])
const [q, setQ] = useState('')


async function fetchLevels(){
const res = await fetch('/api/levels')
const data = await res.json()
setLevels(data)
}


useEffect(()=>{ fetchLevels() },[])


const filtered = levels.filter(l=>l.name.toLowerCase().includes(q.toLowerCase()))


async function vote(id){
await fetch('/api/vote', {
method:'POST', headers:{'Content-Type':'application/json'},
body:JSON.stringify({id})
})
fetchLevels()
}


return (
<div className='min-h-screen'>
<Nav />
<main className='p-8'>
<h1 className='text-2xl font-bold'>Levels</h1>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder='Search levels' className='border p-2 mt-4'/>
<ul className='mt-4 space-y-2'>
{filtered.map(l=>(
<li key={l.id} className='p-3 bg-white rounded shadow flex justify-between items-center'>
<div>
<div className='font-semibold'>{l.name}</div>
<div className='text-sm text-gray-600'>By {l.author || 'Unknown'}</div>
</div>
<div className='flex items-center space-x-3'>
<div className='text-lg font-bold'>{l.votes || 0}</div>
<button onClick={()=>vote(l.id)} className='bg-sky-600 text-white px-3 py-1 rounded'>Vote</button>
</div>
</li>
))}
</ul>
</main>
</div>
)
  }
