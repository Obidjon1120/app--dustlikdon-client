import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/all";
import image11 from "./img/Rectangle11.png"
import image9 from "./img/image9.png"
import image18 from "./img/Rectangle18.png"
const Cards = () => {

    const items = [
        {
            url: image9,
            title: "Elon !!!",
            text: "DO`STLIKDONMAXSULOTLARI AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soat 9:00 dan..."
        },
        {
            url: image9,
            title: "Eksport qiluvchi tadbirkorlik subektlariga...",
            text: "“O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy..."
        },
        {
            url: image18,
            title: "DO`STLIKDONMAXSULOTLARI AJ boshqaruv raisi...",
            text: "DO`STLIKDONMAXSULOTLARI AJ ning boshqaruv raisi tomonidan Do’stlik tumanidagi 2-sonli..."
        },
    ]
    return (
        <div className="container">
            <div className=" d-flex justify-content-between mt-2 mb-2">
                <div className="pt-2">
                    <h5>Yangiliklar</h5>
                </div>
                <div className="pt-2">
                    <FaArrowAltCircleLeft className="mr-2"/>
                    <FaArrowAltCircleRight/>
                </div>
            </div>
            <div className="row d-flex">
                {items.map((item, index)=>{
                    return(
                        <div className="col">
                            <div className="card h-100 shadow-sm">
                                <img src={item.url} className="card-img-top h-50" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                                <div className="card-footer bg-white text-left border-white">
                                    <button className="btn btn-outline-success">Batafsil..</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Cards;