import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const PaymentFrom = () => {

    const [error , setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error) {
            console.log('payment error: ' , error);
            setError(error.message)
        }
        else{
            console.log('payment success: ' , paymentMethod);
            setError('')
        }
    }



    return (
        <div className="">
            <form onSubmit={handleSubmit}>
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
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600  font-semibold">{error}</p>
            </form>
        </div>
    );
};

export default PaymentFrom;