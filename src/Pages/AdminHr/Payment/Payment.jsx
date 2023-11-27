import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentFrom from './PaymentFrom';

// TODO add publisable key
const stripePromise = loadStripe('pk_test_51OHA6QGZSAYdJXf7bF8rArrhjcOQW0PZOYkyevDvOVab7uBX3M36RCoSvte2S1nuWNP1p34NwEcgL5yhw2auKkjU00hiaZTwuI')

const Payment = () => {
    return (
        <div className='w-full md:w-1/2 lg:w-1/3 py-12 px-4  mx-auto'>
            <div>
                <h2 className='text-xl font-bold text-gray-700-600  border-b-4 my-5  text-center '>Payment</h2>
                <Elements stripe={stripePromise}>
                    <PaymentFrom></PaymentFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;