"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

// TODO: fix the styling and fetch other details similarly
export default function page() {
    const [user, setUser] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await axios.put("/api/users/update/", user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("/api/users/myprofile/");
                if (response.data && response.data.user) {
                    console.log(response.data);
                    setUser(response.data.user);
                } else {
                    console.log("Something went wrong!");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="h-screen w-full bg-red-400 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-2xl">
                {user.email ? (
                    <form
                        className="flex flex-col gap-5"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                            type="text"
                            name="username"
                            placeholder="Name"
                            value={user.username}
                            onChange={handleFormChange}
                        />
                        <input
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-red-400"
                            type="email"
                            name="email"
                            placeholder="user@email.com"
                            value={user.email}
                            onChange={handleFormChange}
                        />
                        <button
                            className="bg-red-400 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <div>
                        <p>Please Log in</p>
                    </div>
                )}
            </div>
        </div>
    );
}
