"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// fix UI of this component
export default function VerifyPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            const response = await axios.post("/api/users/verify", { token });
            console.log(response);
            if (response.status === 200) {
                setVerified(true);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl mb-4">
                Please click following btton to verify your email
            </h1>
            <button
                className="p-2 bg-red-400 text-white rounded w-40"
                onClick={verifyUserEmail}
            >
                Verify
            </button>

            {verified && (
                <div>
                    <h2 className="text-2xl">Your Email Is Verified</h2>
                    <Link
                        href="/login"
                        className="p-2 bg-red-400 text-white rounded w-full"
                    >
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl text-red-400">
                        Error verifying your account
                    </h2>
                </div>
            )}
        </div>
    );
}
