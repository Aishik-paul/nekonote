import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar bg-[#ff9f64] shadow-xl justify-between">

        <div>
        <ul className="flex gap-10 space-between">
          <li className='font-bold'>Home</li>
          <li className='font-bold'>Contact</li>
          <li className='font-bold'>Help Us</li>
        </ul>
        </div>

        <div className="search w-1/4">
          <label className="input px-4 rounded-4xl bg-transparent border-2 border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#fff9f2] focus-within:bg-[#fff9f2] focus-within:border-[#ff9f64]">
            <svg className="h-[1em] opacity100 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input className="bg-transparent w-full" type="search" required placeholder="Search" />
          </label>
        </div>
      </nav>

    </>
  );
}

export default Navbar;