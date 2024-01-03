import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import Button from "../Button/Index";
import IconsBrand from "../../Icons/iconsBrand";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Headroom>
                <header
                    className={`px-10 py-3 transition-all duration-300 ease-in-out ${menuOpen ? "bg-slate-800 rounded-bl-3xl rounded-br-3xl" : ""} ${
                        scroll ? "bg-slate-800 fixed w-full transition-all duration-1000 ease-in rounded-bl-3xl rounded-br-3xl" : ""
                    }`}>
                    <div className={`flex justify-between items-center`}>
                        <div className="font-bold text-lg text-white w-28">
                            <IconsBrand />
                        </div>

                        <nav className="text-white hidden md:block">
                            <ul className="flex space-x-4">
                                <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
                                    Home
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
                                    About
                                </NavLink>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
                                    Contact
                                </NavLink>
                            </ul>
                        </nav>
                        <Button className="text-2xl md:hidden text-white" onClick={handleClick}>
                            {!menuOpen ? <FaBarsStaggered className="text-lg" /> : <IoMdClose />}
                        </Button>
                    </div>

                    {/* Mobile Navbar Responsive */}
                    {menuOpen && (
                        <nav data-aos="fade-down" data-aos-duration="600" className="text-white h-60 flex mt-8 md:hidden">
                            <ul className="flex flex-col text-start gap-y-4 w-full">
                                <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-4 py-2  hover:bg-slate-500 hover:rounded-md ${isActive ? "text-yellow-500" : ""}`}>
                                    <FaHome className="text-base" />
                                    Home
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 hover:bg-slate-500 hover:rounded-md ${isActive ? "text-yellow-500" : ""}`}>
                                    <FaAddressCard className="text-base" />
                                    About
                                </NavLink>
                                <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 hover:bg-slate-500 hover:rounded-md ${isActive ? "text-yellow-500" : ""}`}>
                                    <MdConnectWithoutContact className="text-base" />
                                    Contact
                                </NavLink>
                            </ul>
                        </nav>
                    )}
                </header>
            </Headroom>
        </>
    );
}
