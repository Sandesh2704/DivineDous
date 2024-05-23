"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import img from "../../public/Assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav
                className={`fixed  top-0 px-3 md:px-12 lg:px-28 py-1 w-full text-${
                    scrollY > 10 ? "black" : "white"
                }   flex justify-between items-center bg-${
                    scrollY > 10 ? "white" : "transparent"
                }  transition duration-300 ease-in-out z-30 drop-shadow-lg`}
            >
                <Link href="/">
                    <Image
                        src={img}
                        width={150}
                        height={150}
                        alt="DivinsDuos logo"
                        className="w-20 md:w-24 lg:w-32 "
                        // style={{ width: "8rem", height: "4rem" }}
                    />
                </Link>
                <div className="gap-5 flex items-center">
                    <Link href="/login">
                        <button
                            className="px-5 py-2 lg:py-3 bg-[#FF9A8A] rounded-lg text-xs md:text-sm lg:text-sm text-black font-semibold"
                        >
                            Login
                        </button>
                    </Link>
                    <h1 className="hidden md:flex gap-1 cursor-pointer items-center " onClick={toggleDropdown}>
                        Help <FaAngleDown />
                    </h1>
                </div>
            </nav>
            {isOpen && (
                <div
                    className="z-10 bg-white top-12 lg:top-16 divide-y divide-gray-100 rounded-lg shadow text-black absolute right-1 md:right-10 lg:right-28 text-xs "
                >
                    <div className="px-3 md:px-4 flex flex-col gap-3 py-2 w-52 ">
                        <div className="font-medium text-base ">
                        India{' '} <span className="text-blue-400"> +91 **********</span>
                        </div>
                        <div className="">
                        You can now call us between 10am - 7pm (IST). For Instant Support, we recommend that you connect with us on Chat & we will be there to assist you.
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
