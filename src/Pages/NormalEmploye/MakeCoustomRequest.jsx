
const MakeCoustomRequest = () => {

    const handleCustomRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const assetName = form.assetName.value;
        const price = form.price.value;
        const assetType = form.assetType.value;
        const assetImage = form.assetImage.value;
        const whyNeed = form.whyNeed.value;
        const additionalInfo = form.additionalInfo.value;
        console.log(assetName,  additionalInfo, assetType, assetImage, whyNeed);

        const updatedAsset = {
            assetName: assetName,
            assetType: assetType,
            price: price,
             
            additionalInfo: additionalInfo,
            assetImage: assetImage,
            whyNeed: whyNeed,
        };

        console.log(updatedAsset);

    }

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md ">

                <h2 className="text-2xl font-semibold mb-6 text-center"> Custom Asset Request</h2>

                <form onSubmit={handleCustomRequest} action="#" method="post">

                    <div className="md:flex gap-4 ">
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600">Asset Name</label>
                            <input type="text" id="assetName" name="assetName" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600">Price</label>
                            <input type="text" id="price" name="price" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>

                    <div className="md:flex gap-4">
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600">Asset Type</label>
                            <select id="assetType" name="assetType" className="mt-1 p-2 w-full border rounded-md">
                                <option selected>Choose a Type</option>
                                <option value="Electronic">Electronic </option>
                                <option value="Furniture">Furniture</option>
                                <option value="IT Equipment">IT Equipment</option>
                                <option value="Office Supplies">Office Supplies</option>
                                <option value="Surveillance">Surveillance</option>
                                <option value="Safety Equipment">Safety Equipment</option>
                                <option value="Communication Equipment">Communication Equipment</option>
                                <option value="Power Supplies">Power Supplies</option>
                            </select>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-600">Asset Image</label>
                            <input type="text" id="price" name="assetImage" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>


                    <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-600">Why you need this</label>
                        <textarea id="whyNeed" name="whyNeed" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>

                    <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-600">Additional Information</label>
                        <textarea id="additionalInfo" name="additionalInfo" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>

                    <div>
                        <button type="submit" className="bg-green-500 text-white px-4 w-full py-2 rounded-md hover:bg-freen-600">Request</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default MakeCoustomRequest;