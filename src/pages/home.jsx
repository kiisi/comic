import { useEffect, useRef } from "react";

export default function Home() {

    const navbarRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbarRef.current.classList.add('black');
        } else {
            navbarRef.current.classList.remove('black');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-black">
            <nav ref={navbarRef} className="navbar h-[50px] fixed top-0 left-0 right-0 w-full bg-black px-4 flex justify-between items-center">
                <div>
                    <i className="fa-solid fa-bars-staggered text-white"></i>
                </div>
                <figure>
                    <img src="/logo.png" alt="Logo" className="h-[35px]" />
                </figure>
                <div>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </div>
            </nav>
            <div className="bg-black">
                <figure className="hero-border-radius shadow-xxl overflow-hidden">
                    <img src="/images/hero-cover-01.jpg" alt="Hero Cover 01" className="w-full shadow-xxl" />
                </figure>
                <div className="grid place-items-center">
                    <div className="w-[65px] h-[65px] mt-[-30px] rounded-full bg-white shadow-xxl grid place-items-center">
                        <i className="fa-solid fa-play text-[#D12827] text-[22px]"></i>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between bg-black px-4 py-4">
                <i className="fas fa-info stroke-transparent text-[20px]"></i>
                <i className="fas fa-envelope stroke-transparent text-[20px]"></i>
            </div>
            <div className="pulse z-[100] fixed right-[20px] bottom-[20px]">
                <div className="h-[50px] w-[50px] bg-[#ff3b30] shadow-[0px_2px_2px_#00000066] rounded-full grid place-items-center ">
                    <img src="/images/flame.png" alt="flame" className="h-[40px] w-[40px]" />
                </div>
            </div>
            <figure className="grid place-items-center pb-10">
                <img src="/images/hero-gen-logo.png" alt="hero gen logo" className="h-[93px]" />
                <figcaption className="text-white text-[15px] opacity-90 font-extrabold mt-4 mb-2">HERO GEN #7</figcaption>
                <div className="flex items-center gap-[4px] mb-2">
                    {
                        [...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star text-[#D8334A]"></i>
                        ))
                    }
                </div>
                <div className="flex items-center gap-[4px] text-[#D8334A] text-[12px] font-extrabold">
                    <p>	• <span className="text-white opacity-50">NNADIEKWE </span></p>
                    <p>	• <span className="text-white opacity-50">HUNGBEME </span></p>
                    <p>	• <span className="text-white opacity-50"> OJERINDE</span> • </p>
                </div>
            </figure>
        </div>
    )
}