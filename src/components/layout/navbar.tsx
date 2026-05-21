'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 w-full bg-surface shadow-md border-border px-6 py-2">
            <div className="max-w-80% mx-auto px-6 h-full flex items-center justify-between">
                {/* Left side*/}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src={"/logo.png"} width="50" height="50" alt="Shiki" className="border-border border-2 rounded-full max-sm:hidden" />
                        <span className="font-display text-text font-extrabold text-3xl">Shiki</span>
                    </Link>
                </div>

                {/* Right side */}
                <div className="flex-1 flex justify-end items-center gap-5 text-text">
                    <Link href={"https://www.facebook.com/ShikiHTM/"} className="hover:text-muted transition-colors"><FaFacebook size={"24"} /></Link>
                    <Link href={"https://github.com/ShikiHTM"} className="hover:text-muted transition-colors"><FaGithub size={"24"}></FaGithub></Link>
                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ?
                            <FaSun size={24} />
                            : <FaMoon size={24} />
                        }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
