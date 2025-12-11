import Link from 'next/link'
export default function Nav(){
return (
<header className="bg-sky-700 text-white p-4 flex items-center justify-between">
<div className="font-bold text-lg">GD Finland List</div>
<nav className="space-x-4">
<Link href='/' className="hover:underline">Home</Link>
<Link href='/levels' className="hover:underline">Levels</Link>
<Link href='/about' className="hover:underline">About</Link>
<Link href='/admin' className="hover:underline">Admin</Link>
</nav>
</header>
)
  }
