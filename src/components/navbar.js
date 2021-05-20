import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {Link} from "react-router-dom";
import Header from "./header";


const Navbar = () => {
    return (
        <>
        <Header/>
        <div className="color p-2">
            <div className="container d-flex ">
                <div className="btn btn-success">
                    <AiFillHome />
                </div>
                <ul className="list-unstyled d-flex mb-0 align-items-center">
                    <li><Link className="text-dark" to="/lifecycle">Jamiyat haqida</Link></li>
                    <li><Link className="text-dark" to="/hooks">Struktura</Link></li>
                    <li><Link className="text-dark" to="/employee">Yangiliklar</Link></li>
                    <li><Link className="text-dark" to="/lessonqirq">Elektron murojatlar</Link></li>
                    <li><Link className="text-dark" to="/Posts">Intraktiv xizmatlar</Link></li>
                    <li><Link className="text-dark" to="/counterreduxhome">Aloqa</Link></li>
                    <li><Link className="text-dark" to="/dustlikdonuz">Dustlikdon.uz</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Navbar;