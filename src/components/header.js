import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"

const Header = () => {
    return (
        <div className="dustlikdon">
            <div className="container d-flex justify-content-between p-2">
                <div className="d-flex align-items-center">
                    <h2 className="p-2"><a href="#" className="text-decoration-none text-success">Dustlikdon.uz</a></h2>
                    <form className="input-group Search">
                        <div className="d-flex justify-content-center align-items-center pl-3"><AiOutlineSearch className="border-white " /></div>
                        <input type="text" placeholder="Saytdan izlash" className="form-control border-white font-weight-light"/>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    <h5 className="m-0 p-2"><a href="#/" className=" text-secondary">На русском</a></h5>
                    <button type="submit" className="text-decoration-none btn btn-outline-success p-2 call"><IoMdCall className="mb-1"/> 998 99 720 55 39</button>
                    {/*<p className="m-0"><a href="/" ></a></p>*/}
                </div>
            </div>
        </div>
    );
};

export default Header;