"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// TODO: fix the styling
export default function page() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const router = useRouter()
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
        const response = await axios.post("/api/users/register/", formData);
        if (response.status === 200) {
            router.push("/login")
        }
        console.log(response);
    };

    return (
        <div className="h-screen w-full bg-red-400 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-2xl">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <h1 className="text-xl text-center font-bold">Sign Up</h1>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                        type="text"
                        name="username"
                        placeholder="Name"
                        value={formData.username}
                        onChange={handleFormChange}
                    />
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
                        Submit
                    </button>
                    <Link href="/login">
                        <button className="bg-white hover:bg-red-400 text-red-400  hover:text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-red-400 w-full">
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
