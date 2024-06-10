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
            <nav ref={navbarRef} className="z-[999] navbar h-[50px] fixed top-0 left-0 right-0 w-full bg-black px-4 flex justify-between items-center">
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

            <section className="bg-black">
                <figure className="hero-border-radius shadow-xxl overflow-hidden">
                    <img src="/images/hero-cover-01.jpg" alt="Hero Cover 01" className="w-full shadow-xxl" />
                </figure>
                <div className="grid place-items-center">
                    <div className="w-[65px] h-[65px] mt-[-30px] rounded-full bg-white shadow-xxl grid place-items-center">
                        <i className="fa-solid fa-play text-[#D12827] text-[22px]"></i>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-between bg-black px-4 py-4">
                <i className="fas fa-info stroke-transparent text-[20px]"></i>
                <i className="fas fa-envelope stroke-transparent text-[20px]"></i>
            </section>

            <section className="pulse z-[100] fixed right-[20px] bottom-[20px]">
                <div className="h-[50px] w-[50px] bg-[#ff3b30] shadow-[0px_2px_2px_#00000066] rounded-full grid place-items-center ">
                    <img src="/images/flame.png" alt="flame" className="h-[40px] w-[40px]" />
                </div>
            </section>

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

            <section className="px-4 pb-10">
                <header className="pb-4 font-bold text-white text-[24px] lg:text-[28px]">
                    <h1>Recently Released</h1>
                </header>
                <div className="flex gap-3 lg:gap-4">
                    <div className="flex flex-col flex-1 gap-3 lg:gap-4">
                        <figure className="h-[300px] w-full relative">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold hover:underline mt-auto text-left ">
                                    Hero Gen #7
                                </button>
                            </div>
                            <img src="/images/hero-cover-01.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px] object-top" />
                        </figure>
                        <figure className="h-[350px] w-full relative">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold hover:underline mt-auto text-left ">
                                    Vanguards Discovery #2
                                </button>
                            </div>
                            <img src="/images/VanguardsDiscovery02fit.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold hover:underline mt-auto text-left ">
                                    Trials Of The Spear #4
                                </button>
                            </div>
                            <img src="/images/trialsofthespear04.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 lg:gap-4">
                        <figure className="h-[350px] w-full relative">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold hover:underline mt-auto text-left ">
                                    Metalla #4
                                </button>
                            </div>
                            <img src="/images/metalla4fit.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold hover:underline mt-auto text-left ">
                                    Blade of the Black Bird #1
                                </button>
                            </div>
                            <img src="/images/Blackbird01.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[300px] w-full relative">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold hover:underline mt-auto text-left ">
                                    Tear sheet #6
                                </button>
                            </div>
                            <img src="/images/tearsheet06fit.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-10">
                <header className="mb-2">
                    <h1 className="text-white text-[24px] lg:text-[28px] font-bold">This Season</h1>
                    <p className="text-white font-semibold uppercase text-[13px]">17TH APRIL - 26TH JUN 2024</p>
                </header>
                <div>
                    <iframe className="rounded-[30px] border-[1px] border-[#dee2e6]" width="100%" height="200px" src="https://www.youtube.com/embed/_MLMz61zJSo?=1&amp;loop=1&amp;playlist=_MLMz61zJSo" allow="accelerometer; mute; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
            </section>

            <section className="px-4 pb-10">
                <header className="mb-2">
                    <h1 className="text-white text-[24px] lg:text-[28px] font-bold">Comic Republic Originals</h1>
                </header>
                <div className="flex gap-3 lg:gap-4">
                    <div className="flex flex-col flex-1 gap-3 lg:gap-4">
                        <figure className="h-[300px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Character Bible <br />
                                    2 Issues
                                </button>
                            </div>
                            <img src="/images/characterbibleheroes.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Amadioha <br />
                                    3 Issues
                                </button>
                            </div>
                            <img src="/images/Amadioha03.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Avonome <br />
                                    11 Issues
                                </button>
                            </div>
                            <img src="/images/Avonome11.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Blade of the
                                    Blackbird <br />
                                    1 Issue
                                </button>
                            </div>
                            <img src="/images/Blackbird01.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Chibok <br />
                                    1 Issue
                                </button>
                            </div>
                            <img src="/images/Chibok.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Dead Republic <br />
                                    2 Issues
                                </button>
                            </div>
                            <img src="/images/Deadrepublic1.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Galactic Core <br />
                                    9 Issues
                                </button>
                            </div>
                            <img src="/images/GCore09.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Guardianprime Genesis <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/guardianprimegenesis.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Hero Kekere <br />
                                    12 Issues
                                </button>
                            </div>
                            <img src="/images/HeroKekere12.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Metalla <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/metalla4fit.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Nneoma&rsquo;s Chronicles #1<br />
                                    1 Issue
                                </button>
                            </div>
                            <img src="/images/Nneoma01.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Scion Immortal <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/scionimmortal04.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Tear Sheet <br />
                                    6 Issues
                                </button>
                            </div>
                            <img src="/images/tearsheet06fit.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Triple Kill <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/triplekill4.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Vanguards <br />
                                    21 Issues
                                </button>
                            </div>
                            <img src="/images/VanguardsDiscovery02.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 lg:gap-4">
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Aje <br />
                                    5 Issues
                                </button>
                            </div>
                            <img src="/images/Aje05.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Assegai <br />
                                    8 Issues
                                </button>
                            </div>
                            <img src="/images/Assegai08.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Beatz <br />
                                    7 Issues
                                </button>
                            </div>
                            <img src="/images/beatz7.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Blackmoon <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/Blackmoon04A.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    CR Dark <br />
                                    1 Issue
                                </button>
                            </div>
                            <img src="/images/crdark.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Eru <br />
                                    9 Issues
                                </button>
                            </div>
                            <img src="/images/Eru09.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Guardianprime <br />
                                    10 Issues
                                </button>
                            </div>
                            <img src="/images/guardianprime10.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Hero Generation <br />
                                    7 Issues
                                </button>
                            </div>
                            <img src="/images/Herogen07.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Ireti Bidemi <br />
                                    7 Issues
                                </button>
                            </div>
                            <img src="/images/IretiBidemi_7.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Ndoli <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/Ndoli04.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Presurrection <br />
                                    3 Issues
                                </button>
                            </div>
                            <img src="/images/Presurrection2.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Tatashe <br />
                                    5 Issues
                                </button>
                            </div>
                            <img src="/images/Tatashe05.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Trials of the Spear <br />
                                    4 Issues
                                </button>
                            </div>
                            <img src="/images/trialsofthespear04.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[350px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Uhuru <br />
                                    3 Issues
                                </button>
                            </div>
                            <img src="/images/Uhuru03.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                        <figure className="h-[300px] w-full relative group">
                            <div className="h-[120px] w-full bottom-0 p-[15px] left-0 absolute bg-soft-overlay flex flex-col">
                                <button className="text-white text-[14px] lg:text-[18px] font-bold group-hover:underline mt-auto text-left ">
                                    Visionary <br />
                                    5 Issues
                                </button>
                            </div>
                            <img src="/images/visionary04fit.jpg" alt="Comic" className="h-full w-full object-cover rounded-[5px]" />
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    )
}