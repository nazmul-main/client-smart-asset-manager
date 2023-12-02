/* eslint-disable react/prop-types */
import useAuth from "../../Hooks/useAuth";
import moment from 'moment';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const RequestedModal = ({ isOpen, closeModal, asset }) => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const requesterEamil = user?.email;
    const requesterName = user?.displayName;
    const { name, type, image } = asset;
    const currentDate = moment().format('YYYY-MM-DD');
    const status = 'pending';

    if (!isOpen) {
        return null;
    }

    const handleCancelClick = () => {
        closeModal();
    };

    const handleRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const note = form.note.value;

        const reqInfo = {
            assetName: name,
            assetImage: image,
            emailRequester: requesterEamil,
            nameRequester: requesterName,
            requestDate: currentDate,
            additionalnote: note,
            assetType: type,
            status: status,
            userInfo: user
        }
        console.log(reqInfo);


        // Send to Backend
        axiosPublic.post('/assets-request', reqInfo)
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Well done',
                        text: 'Requested successful',
                        footer: '<a href="">Thank you</a>'
                    });
                }
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });



    };

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-40 flex items-center justify-center">
            <form onSubmit={handleRequest}>
                <div className="bg-white rounded-md p-8 max-w-md mx-auto shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4"> Additional Notes 📝</h2>
                    <div className="mr-2">
                        <textarea name="note" rows={5} cols={50} className="outline-none border border-black p-2" placeholder="Provide Some Notes" />
                    </div>
                    <div className="py-3">
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-5"
                        >
                            Request
                        </button>
                        <p
                            onClick={handleCancelClick}
                            className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline"
                        >
                            Cancel
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RequestedModal;
