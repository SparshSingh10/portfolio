import { useState } from "react";
import { navLinks } from "../constants";

function NavItems() {
    // dhek bhai tu chahta tho simple bhi ul ke andar li aur usme anchor tag ke saath bana sakta tha par isse ye faida hai ki data base mai change kre ga tho reflect kre ge 
    // const navLinks = [
    //                     {id: 1,name: 'Home',href: '#home',},
    //                     { id:2, name:'About', href:'#about',},
    //                     { id:3, name:'Work', href:'#work',},
    //                     { id:4, name:'Contact',href:'#contact',},
    //                 ];
    return (
        <ul className="nav-ul">
            {navLinks.map((item) => (
                <li key={item.id} className="nav-li">
                    <a href={item.href} className="nav-li_a" >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // bhai ye cross or menu button ko show karne ke liye

    const toggleMenu = () => setIsOpen(!isOpen);
    // bhai ye button ko click karne pe chale ga aur value rverse krde ga
    // const closeMenu = () => setIsOpen(false);

    // bhai iska pata chale tho muje bhi bataio

    return (
        // dhek bhai header fixed raheta hia top left right se 0 distance pe z index bada,uske andar ka div max width with mx auto aur usme bhi ek div (flex justify-between items-center mx-auto kardo) ke andar 
        // bas 2 cheex anchor and button(hidden for >sm means sm:hidden (matlab hota hai sm se zada hidden)) navbar(small mai anchor aur button ho ge,large mai anchor or navbar) 
        // mobile ka tho alag se banio header ke just under na ki koi div mai kyoki iska alag khel hai isko apni badi jagha chayie display krne ke liye
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Sparsh
                    </a>
                    {/* button to switch  */}
                    <button onClick={toggleMenu} style={{ backgroundColor: "white" }} className="sm:hidden">
                        <img src={isOpen ? "/assets/close4.png" : "/assets/menu3.svg"} alt="toggle" className="w-6 h-6" />
                    </button>

                    {/* Desktop menu (visible on larger screens) */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            {/* mobile version */}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
