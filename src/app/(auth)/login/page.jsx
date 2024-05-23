"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

import { IoMdClose } from "react-icons/io";
import img from '../../../../public/Assets/logo.png'
import Image from 'next/image';
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";


// TODO: fix the styling
export default function page() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("/api/users/login/", formData);
            if (response.status === 200) {
                router.push("/divine-dous/myprofile");
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        {/* <div className="h-screen w-full bg-red-400 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-2xl">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-xl text-center font-bold">Login</h1>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                        type="email"
                        name="email"
                        placeholder="user@email.com"
                        value={formData.email}
                        onChange={handleFormChange}
                    />
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange}
                    />
                    <button
                        className="bg-red-400 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                    <Link href="/sign-up">
                        <button className="bg-white hover:bg-red-400 text-red-400  hover:text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-red-400 w-full">
                            Sign Up
                        </button>
                    </Link>
                </form>
            </div>
        </div> */}
            <div className='fixed  bg-red-400 h-full w-full flex justify-center items-center z-50'>
                <div className='w-[90%] md:w-[50%] lg:w-[36%] xl:w-[28%] h-fit  relative  bg-white rounded-lg  mt-10 '>
                    <div className='absolute top-2 left-2 text-gray-600 cursor-pointer' ><IoMdArrowBack size={20} /></div>
                    <div className='px-5 md:px-9 py-7 z-10'>
                        <div className='flex justify-center mb-2'>
                            <Image src={img} width={120} height={100} alt='DivinsDuos logo' style={{ width: '8rem', height: "4rem" }} />
                        </div>
                        <h1 className='text-base md:text-lg text-center py-3 text-gray-700'>Welcome back! Please Login</h1>
                        <form className='flex flex-col gap-y-4 my-6' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="" className='text-sm text-gray-600'>Mobile No. / Email ID</label>
                                <input type="email"
                                    name="email"
                                    placeholder="user@email.com"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className='block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="" className='text-sm text-gray-600'>Password</label>
                                <input type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    className='block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500'
                                    placeholder='Enter Password' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-row items-center gap-1'>
                                    <input type="checkbox" name="vehicle1" className='text-xs ' /><label className='text-xs text-gray-600'>Remember me</label>
                                </div>
                                <Link href="" > <span className='text-xs font-semibold text-blue-600 hover:underline '>Forgot Password?</span></Link>
                            </div>
                            <button className='bg-[#FF9A8A]  py-2 rounded-lg w-full'>Login</button>
                        </form>
                        <div className='text-sm text-center text-gray-500 flex flex-row justify-center gap-2' >
                            <span>New to DivineDuos? </span>
                            <Link href='/sign-up' ><span className='font-semibold flex items-center hover:underline gap-2'>Sign up Free <FaArrowRightLong size={12} /></span> </Link> </div>
                    </div>
                </div>
            </div>
        </>
    );
}
