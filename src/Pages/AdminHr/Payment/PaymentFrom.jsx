import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const PaymentFrom = () => {
    const axiosSequre = useAxiosSecure()
    const {user} = useAuth()
    console.log(user.email);

    const handleMakeAdmin = user => {
        axiosSequre.patch(`/users-admin/${user?.email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }




    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // TODO: dsfassdfadf
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error: ', error);
            setError(error.message)
        }
        else {
            console.log('payment success: ', paymentMethod);
            setError('')
        }
    }



    return (
        <div className="">
            <form onSubmit={handleSubmit} className="border-4 p-8">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button onClick={() => handleMakeAdmin(user)}  className="my-2 p-1 px-2 rounded-md text-center bg-green-600 text-white"  type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600  font-semibold">{error}</p>
                <h2>{user.email}    </h2>
            </form>
        </div>
    );
};

export default PaymentFrom;




/* 
<button  onClick={() => handleMakeAdmin(item)}  
className="btn  btn-sm cursor-default bg-[#D1A054] py-2">
<FaUsers className=" text-white text"> </FaUsers>
   </button>}

*/