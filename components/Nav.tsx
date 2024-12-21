import Image from "next/image"

const Nav = () => {
  return (
    <div className="z-[6001] opacity-90 text-white md:mt-16 mt-10 mr-auto md:ml-16 ml-1 " >
      <Image 
        src="Wisdom Logo-W.svg" 
        alt="Wisdom Logo-W.svg"
        width={70}  
        height={70}
      />
    </div>
  )
}

export default Nav;
