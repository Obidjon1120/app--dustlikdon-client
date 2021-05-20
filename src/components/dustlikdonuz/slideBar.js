import React from 'react';
import {AiOutlineCalendar, AiOutlineEye} from 'react-icons/ai'
import {BiMessageDots} from 'react-icons/bi'
import image64 from './img/Rectangle64.png'
import image66 from './img/Rectangle66.png'
import image67 from './img/Rectangle67.png'
import image11 from './img/image11.png'
const SlideBar = () => {
    let showDate = new Date()
    let displayTodayDate = showDate.getHours() +":"+showDate.getMinutes()+"/"+showDate.getDate()+"."+showDate.getMonth()+"."+showDate.getFullYear()
    return (
        <div className="container d-flex">
            <div className="sildebarLeft color p-4 mt-4">
                <div className="d-flex align-items-center mb-2 w-75 justify-content-between">
                <a href="##">Jamiyat haqida</a>
                <div className="d-flex ml-2 text-secondary">
                    <AiOutlineCalendar className="m-1"/>
                    <p className="m-0">{displayTodayDate}</p>
                </div>
                <div className="d-flex text-secondary">
                    <AiOutlineEye className="m-1"/>
                    <p className="m-0">321</p>
                </div>
                <div className="d-flex text-secondary">
                    <BiMessageDots className="m-1"/>
                    <p className="m-0">100</p>
                </div>
            </div>
                <h4>Eksport qiluvchi tadbirkorlik subektlariga!!!</h4>
                <p>
                    “O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari tomonidan istisno tariqasida maxalliy
                    tadbirkorlik sub'ektlariga eksport qilish sharti bilan birja savdolari orqali bug’doy sotilmoqda.
                    Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat solig’isiz
                    1 610 000 so‘mdan, qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.
                    Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                    natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi
                    tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.
                </p>
                <div className="chiziq"></div>
                <div className="d-flex justify-content-between pt-2">
                    <h5>Mavzuga izoh</h5>
                    <p>2 ta fikr</p>
                </div>
                <div className="d-flex mt-4">
                    <img src={image64} alt="no"/>
                    <form>
                        <textarea type="text" placeholder="Izoh qoldirishiz mumkin" className="p-2 ml-2 d-flex form-control"/>
                    </form>
                </div>
                <div className="d-flex mt-4">
                    <img src={image66} alt="no"/>
                    <div className="pl-2">
                        <h5>Nigina Karimova</h5>
                        <p className="m-0">Tushunmovchilik bo’yicha qayerga murojaat qilsam bo’ladi?</p>
                    </div>
                </div>
                <div className="d-flex mt-4 align-items-center">
                    <img src={image67} alt="no"/>
                    <div className="pl-2">
                        <h5>Sahar Kenjayev</h5>
                        <p className="m-0">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                            natijasida xosil bo‘lgan qiymat soligining ortiqcha <a href="/#">batafsil</a></p>
                    </div>
                </div>
            </div>
            <div className="slidebarRightTop mt-4">
                <div className="color p-4 mb-2">
                    <h2>Media</h2>
                    <div className="d-flex align-items-center mb-2 w-75 justify-content-between">
                        <div className="d-flex text-secondary">
                            <AiOutlineCalendar className="mt-1 mr-1"/>
                            <p className="m-0">{displayTodayDate}</p>
                        </div>
                        <a href="##">Foto galeriya</a>
                    </div>
                    <p className="xizmatlar">"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi...</p>
                    <div className="chiziq"></div>
                    <div className="d-flex align-items-center mb-2 w-75 justify-content-between">
                        <div className="d-flex text-secondary">
                            <AiOutlineCalendar className="mt-1 mr-1"/>
                            <p className="m-0">{displayTodayDate}</p>
                        </div>
                        <a href="##">Foto galeriya</a>
                    </div>
                    <p className="xizmatlar">Xisobot: Buxgalteriya balansi 2-kvartal</p>
                    <div className="chiziq"></div>
                    <div className="d-flex align-items-center mb-2 w-75 justify-content-between">
                        <div className="d-flex text-secondary">
                            <AiOutlineCalendar className="mt-1 mr-1"/>
                            <p className="m-0">{displayTodayDate}</p>
                        </div>
                        <a href="##">Vedio galeriya</a>
                    </div>
                    <p className="xizmatlar">Aksiyadorlik kompaniya tizim korxonalari</p>
                    <div className="chiziq"></div>
                    <div className="d-flex align-items-center mb-2 w-75 justify-content-between">
                        <div className="d-flex text-secondary">
                            <AiOutlineCalendar className="mt-1 mr-1"/>
                            <p className="m-0">{displayTodayDate}</p>
                        </div>
                        <a href="##">Foto galeriya</a>
                    </div>
                    <p className="xizmatlar">Xisobot: Buxgalteriya balansi 2-kvartal</p>
                </div>
                <div className="color1  p-4 text-center">
                    <h2>Shikoyatlar mavjudmi? Onlayn tarzda yuboring</h2>
                    <img src={image11} alt="" className="m-auto"/>
                    <h2>Davlat interaktiv xizmatlari yagona portali</h2>
                </div>
            </div>
        </div>
    );
};

export default SlideBar;