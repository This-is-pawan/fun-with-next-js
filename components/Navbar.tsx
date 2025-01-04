import Link from "next/link"


const Navbar = () => {
  return (
    <div>
      <nav className="w-[80vw] flex gap-x-5  m-atuo">
<Link href='/'>Home</Link>
<Link href='/about' >About</Link>
<Link href='/contact' >Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar
