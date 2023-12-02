/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';

const ModalAssetUpdate = ({ isOpen, closeModal, asset, refetch }) => {
    const { name, type, quantity, _id } = asset
    const handleCancelClick = () => {
        closeModal();
    };


    const handleSaveClick = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const quantity = form.quantity.value;

        const rqpAsset = {
            name: name,
            type: type,
            quantity: quantity,
        };


        fetch(`http://localhost:5001/api/v1/assets/update-assets-done/${_id}`, {
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



    };


    if (!isOpen) {
        return null; // Render nothing if modal is not open
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            {/* Modal content goes here */}


            <div className="bg-white p-8 rounded shadow-md ">
                <form onSubmit={handleSaveClick}>
                    <h2 className='text-xl font-bold my-6 uppercase border-y-4 py-2 '>Update Your asset </h2>

                    <div className="md:flex gap-4 ">
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600 text-start py-1">Asset Name</label>
                            <input defaultValue={name} type="text" id="assetName" name="name" className="mt-1 p-2 w-full border rounded-md" />
                        </div>


                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600 text-start py-1">Quantity</label>
                            <input defaultValue={quantity} type="number" name="quantity" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                    </div>

                    <div className="md:flex gap-4">
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600 text-start py-1">Asset Type</label>
                            <select id="type" name="type" className="mt-1 p-2 w-full border rounded-md">
                                <option selected>{type}</option>
                                <option value="Returnable">Returnable</option>
                                <option value="Non-returnable">Non-returnable</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-5"
                        >
                            Update
                        </button>
                        <p
                            onClick={handleCancelClick}
                            className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline"
                        >
                            Cancel
                        </p>
                    </div>
                </form >
            </div >

        </div >
    );
};

export default ModalAssetUpdate;
