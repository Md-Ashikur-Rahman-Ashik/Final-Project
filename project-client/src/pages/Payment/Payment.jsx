import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
// const stripePromise = loadStripe(
//   "pk_test_51PLkaZAcFzJoxH14eFoqTOI7pN4WqpBBfIzCpJJennzfb9DwWepzl8uDlhrko1HsNDG4P5QxGvSwlD6HV69WLxvT00uQqlmPJ4"
// );
// console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please pay to eat"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
