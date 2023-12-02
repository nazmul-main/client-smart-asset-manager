/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";


const ModalCoRequst = ({ isOpen, closeModal, asset, refetch }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const { assetName, assetImage, assetType, price, additionalInfo, Status, _id } = asset;

    const handleUpdateClick = () => {
        setIsEditMode(true);
    };








    const handleSaveClick = (e) => {


        e.preventDefault();
        const form = e.target;
        const assetName = form.assetName.value;
        const price = form.price.value;
        const assetType = form.assetType.value;
        const assetImage = form.assetImage.value;
        const additionalInfo = form.additionalInfo.value;

        const rqpAsset = {
            assetName: assetName,
            assetType: assetType,
            price: price,
            additionalInfo: additionalInfo,
            assetImage: assetImage,
        };
        console.log(rqpAsset);


        fetch(`http://localhost:5001/api/v1/coustom-assets/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rqpAsset),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Updadeted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()

            });


        setIsEditMode(false);
    };

    const handleCancelClick = () => {
        setIsEditMode(false);
        closeModal();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md w-1/2">

                        <div className="py-3 space-y-3">
                            {isEditMode ? (
                                // Show input fields in edit mode
                                <>
                                    <form onSubmit={handleSaveClick}>


                                        <div className="md:flex gap-4 ">
                                            <div className="mb-4 w-full">
                                                <label className="block text-sm font-medium text-gray-600">Asset Name</label>
                                                <input defaultValue={assetName} type="text" id="assetName" name="assetName" className="mt-1 p-2 w-full border rounded-md" />
                                            </div>

                                            <div className="mb-4 w-full">
                                                <label className="block text-sm font-medium text-gray-600">Price</label>
                                                <input defaultValue={price} type="text" id="price" name="price" className="mt-1 p-2 w-full border rounded-md" />
                                            </div>
                                        </div>

                                        <div className="md:flex gap-4">
                                            <div className="mb-4 w-full">
                                                <label className="block text-sm font-medium text-gray-600">Asset Type</label>
                                                <select id="assetType" name="assetType" className="mt-1 p-2 w-full border rounded-md">
                                                    <option selected>Choose a Type</option>
                                                    <option value="Returnable">Returnable</option>
                                                    <option value="Non-returnable">Non-returnable</option>
                                                </select>
                                            </div>

                                            <div className="mb-4 w-full">
                                                <label className="block text-sm font-medium text-gray-600">Asset Image</label>
                                                <input defaultValue={assetImage} type="text" id="assetImage" name="assetImage" className="mt-1 p-2 w-full border rounded-md" />
                                            </div>
                                        </div>




                                        <div className="mb-4 w-full">
                                            <label className="block text-sm font-medium text-gray-600">Additional Information</label>
                                            <textarea defaultValue={additionalInfo} id="additionalInfo" name="additionalInfo" className="mt-1 p-2 w-full border rounded-md"></textarea>
                                        </div>

                                        <div>
                                            <button
                                                // onClick={handleSaveClick}
                                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-5"
                                            >
                                                Save
                                            </button>
                                            <p
                                                onClick={handleCancelClick}
                                                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 inline"
                                            >
                                                Cancel
                                            </p>
                                        </div>
                                    </form>

                                </>
                            ) : (
                                // Show details in view mode
                                <>
                                    <div className="flex items-center justify-center">
                                        <img className="w-40 h-40" src={assetImage} alt="" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold pt-1 md:pt-2">{assetName}</h2>
                                    <h2 className="text-md"><span className="font-semibold">Price: </span>${price}</h2>
                                    <h2 className="text-md"><span className="font-semibold">Type: </span>{assetType}</h2>
                                    <h2 className="text-md"><span className="font-semibold">additionalInfo: </span>{additionalInfo.slice(0, 200)}...</h2>
                                    <h2 className="text-xl font-bold"><span className="font-semibold">Status: </span>{Status}</h2>
                                    <div>
                                        <button
                                            onClick={handleUpdateClick}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-5"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={handleCancelClick}
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>


                    </div>
                </div>
            )}
        </>
    );
};

export default ModalCoRequst;







/* 




*/