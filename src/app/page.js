"use client"
import Hero from "../components/Hero/Hero.jsx";
import DottedDivider from "../components/DottedDivider/DottedDivider.jsx";
import Orders from "@/components/Orders/Orders.jsx";
import Totals from "@/components/Totals/Totals.jsx";
import PickUp from "@/components/PickUp/PickUp.jsx"
import Payment from "@/components/Payment/Payment.jsx";
import OrderNotes from "@/components/OrderNotes/OrderNotes.jsx";
import SendNote from "@/components/SendNote/SendNote.jsx";
import { useState } from "react";


export default function Home() {

const [url,] = useState(
  "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
);

  return (
    <main className="flex flex-col items-center justify-center pt-10 pb-10 bg-Grey100">
      <div className="flex items-center justify-start lg:w-2/6 w-11/12 mb-6">
        <a href="#" className="flex items-center justify-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="20"
            viewBox="0 0 6 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.70711 5.29289C6.09763 5.68342 6.09763 6.31658 5.70711 6.70711L2.41421 10L5.70711 13.2929C6.09763 13.6834 6.09763 14.3166 5.70711 14.7071C5.31658 15.0976 4.68342 15.0976 4.29289 14.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289L4.29289 5.29289C4.68342 4.90237 5.31658 4.90237 5.70711 5.29289Z"
              fill="#9CA3AF"
            />
          </svg>
          Back to orders
        </a>
      </div>
      <div className="inline-block lg:w-2/6 w-11/12 p-4 bg-white rounded-xl shadow-md justify-center">
        <Hero />
        <DottedDivider />
        <Orders />
        <Totals />
        <PickUp />
        <Payment />
        <OrderNotes />
        <DottedDivider />
        <SendNote/>
      </div>
    </main>
  );
}
