/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalCoRequst from "./ModalCoRequst";


const ReqCart = ({ asset, refetch }) => {
    const { assetName, assetImage, assetType, price } = asset;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className=" items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 shadow-md  ">
                <div className="h-52 ">
                    <img className=" w-full  h-full object-cover bg-red-500  rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg" src={assetImage} alt="" />
                </div>
                <div className="flex flex-col justify-between items-start p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{assetName}</h5>
                    <p className="mb-3 font-normal text-gray-700 ">Price: {price}</p>
                    <p className="mb-3 font-normal text-gray-700 ">Type: {assetType}</p>
                    <div>
                        <button className="btn btn-primary" onClick={openModal}>
                            View Details
                        </button>
                        <ModalCoRequst asset={asset} isOpen={isModalOpen} closeModal={closeModal} refetch={refetch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReqCart;