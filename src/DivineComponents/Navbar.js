"use client";
import { useState, useEffect } from "react";
import img from "../../public/Assets/logo.png";
import fake from '../../public/NutralProfileImg.webp'
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { GiQueenCrown } from "react-icons/gi";
'../../src/app/divine-dous/premium'

// variable to store all paths
const paths = {
    Home: ["dashbord", "myprofile"],
    Matches: ["newmatches", "mymatches", "nearme"],
    Search: ["search"],
};

export default function Navbar() {

    const [secondNavbarItems, setSecondNavbarItems] = useState([]);
    const pathname = usePathname();
    useEffect(() => {
        const lastPath = pathname.split("/").pop();
        for (const [key, array] of Object.entries(paths)) {
            if (array.includes(lastPath)) {
                handleFirstNavbarItemClick(key);
            }
        }
    }, []);

    const handleFirstNavbarItemClick = (item) => {
        switch (item) {
            case "Matches":
                setSecondNavbarItems([
                    { link: "/divine-dous/newmatches", value: "New Matches" },
                    { link: "/divine-dous/mymatches", value: "My Matches" },
                    { link: "/divine-dous/nearme", value: "Near Me" },
                ]);
                break;
            case "Search":
                setSecondNavbarItems([
                    { link: "/divine-dous/search", value: "Basic" },
                    // { link: '/advanced-search', value: 'Advanced' }
                ]);
                break;
            case "Home":
                setSecondNavbarItems([
                    // { link: "/divine-dous/dashbord", value: "Basic" },
                    { link: "/divine-dous/myprofile", value: "My Profile" },
                ]);
                break;
            default:
                setSecondNavbarItems([
                    { link: "/divine-dous/myprofile", value: "My Profile" },
                ]);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('#dropdownAvatarNameButton') && !event.target.closest('#dropdownAvatarName')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div>
            {/* First Navbar */}
            <nav
                className={` px-3 py-0 md:py-1 lg:py-2 md:px-12 lg:px-36 bg-white w-full text-black flex justify-center md:justify-between items-center  transition duration-300 ease-in-out z-30 drop-shadow-lg shadow-md`}
            >
                <Link href="/">
                    <Image
                        src={img}
                        width={150}
                        height={150}
                        alt="DivinsDuos logo"
                        style={{ width: "6rem", height: "3rem" }}
                        className="hidden md:flex"
                    />
                </Link>
                <ul className="flex justify-between gap-0 md:gap-5 lg:gap-16 text-sm lg:text-base font-medium">
                    {Object.keys(paths).map((ObjectKey) => (
                        <li
                            key={ObjectKey}
                            onClick={() => {
                                handleFirstNavbarItemClick(ObjectKey);
                                // setActiveFirstNavItem("Search");
                            }}
                            // className="cursor-pointer px-5 py-1"
                            className={`cursor-pointer px-5 py-2 md:py-1 ${paths[ObjectKey] &&
                                    paths[ObjectKey].includes(
                                        pathname.split("/").pop()
                                    )
                                    ? "border-b-2 border-red-400"
                                    : ""
                                }`}
                        >
                            {ObjectKey}
                        </li>
                        
                    ))}
                     <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="lg:hidden flex items-center flex-row gap-1 md:gap-2" type="button" onClick={toggleDropdown}>
                         <Image class="w-6 md:w-8 lg:w-9  rounded-full" src={fake} alt="user photo" />
                         <FaChevronDown className="text-xs md:text-sm" />
                     </button>
                </ul>


                <div className="hidden lg:flex flex-row items-center gap-7">
                    <Link href='/divine-dous/premium' className="hidden lg:flex flex-row items-center px-5 py-2 border-2 gap-3 text-base font-medium bg-red-400 text-white rounded-lg"> < GiQueenCrown className="text-2xl "/> Premium</Link>
                    <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center flex-row gap-1 md:gap-2" type="button" onClick={toggleDropdown}>
                        <Image class="w-6 md:w-8 lg:w-9  rounded-full" src={fake} alt="user photo" />
                        <FaChevronDown className="text-xs md:text-sm" />
                    </button>
                </div>
            </nav>
            {isOpen && (<div id="dropdownAvatarName" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow text-black absolute right-1 md:right-10 lg:right-32 text-sm md:text-base ">
                <div class="px-3 md:px-4 flex flex-col gap-3 py-2  ">
                    <div class="font-medium text-base md:text-xl  ">Pro User</div>
                    <div class="">name@flowbite.com</div>
                    <Link href='' className="lg:hidden flex flex-row items-center gap-3  font-medium text-red-400 block">Premium < GiQueenCrown className="text-base md:text-xl"/></Link>
                </div>
                <div class="py-2">
                    <a href="#" class="block px-3 md:px-4 ">Sign out</a>
                </div>
            </div>
            )}
            {/* Second Navbar */}
            <nav className="text-white pt-2 md:pt-3 ">
                <ul className="flex justify-center gap-2 md:gap-5 lg:gap-10 text-sm  lg:text-base font-medium">
                    {secondNavbarItems.map((item, index) => (
                        <li key={index} className='shadow-md px-3 md:px-6 rounded-lg lg:px-10 py-1 lg:py-2 bg-red-400 border-black text-center'>
                            <Link href={item.link} className='  '>
                                {item.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
