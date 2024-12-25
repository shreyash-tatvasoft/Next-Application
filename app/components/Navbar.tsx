"use client"

import Link from "next/link"
import { ROUTES, themeColorKey } from "../utils/constatnt"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material"
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Navbar = () => {
    const [isToggleMode, setToggleMode] = useState(false)
    const pathName = usePathname()

    const toggleMode = () => {
        setToggleMode(!isToggleMode)
    }

    const linkTags = [
        { id : 1, linkName : "Home", navTo: ROUTES.HOME_PAGE},
        { id : 2, linkName : "Contact Us", navTo: ROUTES.CONTACT_PAGE},
        { id : 3, linkName : "About", navTo: ROUTES.ABOUT_US_PAGE},
    ]

    return (
        <div className={`${!isToggleMode ? "" : "dark"}`}>
            <div className={`px-10 py-5 bg-slate-200 dark:bg-slate-800 flex justify-between items-center`}>
                <p className="font-bold text-slate-950 dark:text-white cursor-pointer text-2xl">
                    <Link href={ROUTES.MAIN_PAGE}>
                        Next App
                    </Link>
                </p>
                <div className="flex flex-row gap-2.5 items-center">
                    <div className="flex flex-row gap-10 px-5 border-r-2 border-slate-700 dark:border-white-700">
                        {linkTags.map(linkItem =>
                            <p className={`font-semi-bold  cursor-pointer text-xl
                                   ${pathName === linkItem.navTo ?  'text-violet-800 dark:text-blue-600'  :"text-slate-950 dark:text-white"} ,
                            `} key={linkItem.id}>
                                <Link href={linkItem.navTo}>
                                    {linkItem.linkName}
                                </Link>
                            </p>
                        )}
                    </div>
                    <div>
                        {!isToggleMode ?
                            <IconButton onClick={toggleMode}>
                                <DarkModeIcon sx={{ color: "black", height: "25px", width: "25px" }} />
                            </IconButton>
                            :
                            <IconButton onClick={toggleMode}>
                                <LightModeIcon sx={{ color: "white", height: "25px", width: "25px" }} />
                            </IconButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar