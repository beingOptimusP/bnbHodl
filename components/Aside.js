import { FaHome } from 'react-icons/fa'
import { RiDeviceRecoverLine } from 'react-icons/ri'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function Aside({ setsidebarp }) {
    const [sideBar, setsideBar] = useState(false)
    // console.log(sideBar)
    setsidebarp(sideBar)
    return (
        <>
            <aside className="z-30  bg-white dark:bg-gray-800 ">
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <a className="flex ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="">
                        <img className="mr-2 w-6 h-8" src="logo.png" />
                        <span class="self-center">The BNBHODL Bar</span>
                    </a>
                    {/* <div  className="absolute right-0 top-0 p-4">
                        <GiHamburgerMenu onClick={() => { setsideBar(!sideBar) }} className=" block lg:hidden text-2xl dark:text-white text-black m-1" />
                    </div> */}
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <Link href="/">
                            <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
                                <FaHome />
                                <span className="ml-4">Dashboard</span>
                            </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <Link href="/recovery">
                            <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
                                <RiDeviceRecoverLine />
                                <span className="ml-4">Recovery</span>
                            </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <ul className="mt-6">
                        <li className="relative px-6 py-3">
                            <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="/dashboard">
                                <FaHome />
                                <span className="ml-4">Dashboard</span>
                            </a>
                        </li>
                    </ul> */}
                </div>
            </aside>
        </>
    )
}