import React from "react";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronFirst, ChevronLast } from "lucide-react";
// import { SidebarContext } from "react-pro-sidebar";


export default function NavBarComponent() {
    const [isOpen, setIsOpen] = React.useState(false);

    const openSideBar = () => {
        setIsOpen(!isOpen)
    }
    //TO-DO: Fix icon alignment
    //TO-DO: hover
    //TO-DO: icon on the header
    return(
        <div className={`menu-container round-box p-14 gap-9 items-center duration-300 ease-in-out ${isOpen ? 'w-20' : 'w-52'}`}>
            <div className="flex flex-row items-center mb-7 ">
                <button onClick={openSideBar} className=" py-2">
                    {isOpen ? <ChevronLast className="min-w-6"/> : <ChevronFirst className="min-w-6"/>}
                </button>
                <h1 className={`${!isOpen ? "block" : "hidden"} font-righteous text-xl`}>ROOMIE</h1>
            </div>
            <ul className="flex flex-col gap-8 items-start">
                {Navigation.map((nav) => {
                    const {Icon} = nav
                    return(
                        <li key={nav.title} >
                            <Link 
                                to={`/${nav.title.toLowerCase()}`}
                                // onClick={() => setIsOpen((prev) => !prev)}
                                className="flex flex-row gap-4 items-center min-w-6"
                            >   
                                <FontAwesomeIcon icon={Icon} />
                                <span className={` ${!isOpen ? "block" : "hidden"}`}>{nav.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}