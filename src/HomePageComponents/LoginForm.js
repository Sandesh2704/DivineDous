"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import img from "../../public/Assets/logo.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm({ toggleLoginForm }) {
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
            <div className="fixed  bg-black/50 h-full w-full flex justify-center  z-50">
                <div className="w-[90%] md:w-[50%] lg:w-[36%] xl:w-[28%] h-fit  relative  bg-white rounded-lg  mt-10 ">
                    <div
                        onClick={toggleLoginForm}
                        className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                    >
                        <IoMdClose size={20} />
                    </div>
                    <div className="px-5 md:px-9 py-7 z-10">
                        <div className="flex justify-center mb-2">
                            <Image
                                src={img}
                                width={120}
                                height={100}
                                alt="DivinsDuos logo"
                                style={{ width: "8rem", height: "4rem" }}
                            />
                        </div>
                        <h1 className="text-base md:text-lg text-center  text-gray-700">
                            Welcome back! Please Login
                        </h1>
                        <form
                            className="flex flex-col gap-y-4 my-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor=""
                                    className="text-sm text-gray-600"
                                >
                                    Mobile No. / Email ID
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                    placeholder="Enter mobile no. / Email id"
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor=""
                                    className="text-sm text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                    placeholder="Enter Password"
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-row items-center gap-1">
                                    <input
                                        type="checkbox"
                                        name="vehicle1"
                                        className="text-xs "
                                    />
                                    <label className="text-xs text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                                <Link href="">
                                    {" "}
                                    <span className="text-xs font-semibold text-blue-600 hover:underline ">
                                        Forgot Password?
                                    </span>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-y-2 mt-4 ">
                                <button
                                    className="bg-[#FF9A8A]  py-2 rounded-lg w-full"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <div className="flex flex-row items-center">
                                    <hr className="bg-gray-300 h-[0.09rem] w-full" />
                                    <span className="px-2 text-sm text-gray-500">
                                        or
                                    </span>
                                    <hr className="bg-gray-300 h-[0.09rem] w-full" />
                                </div>
                                <button className="bg-[#FF9A8A]  py-2 rounded-lg w-full">
                                    Login With OTP
                                </button>
                            </div>
                        </form>
                        <div className="text-sm text-center text-gray-500 flex flex-row justify-center gap-2">
                            <span>New to DivineDuos? </span>
                            <Link href="/sign-up" onClick={toggleLoginForm}>
                                <span className="font-semibold flex items-center hover:underline">
                                    Sign up Free <FaChevronRight size={12} />
                                </span>{" "}
                            </Link>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
