import Image from "next/image"
import Link from "next/link";

const Nav = () => {
  return (
    <div className="z-[6001] opacity-90 text-white md:mt-16 mt-10 mr-auto md:ml-16 ml-1 " >
      <Link href="/" >
      <Image 
        src="Wisdom Logo-W.svg" 
        alt="Wisdom Logo-W.svg"
        width={70}  
        height={70}
      />
      </Link>
    
    </div>
  )
}

export default Nav;
