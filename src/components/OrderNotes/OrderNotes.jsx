import React from 'react'
import LineDivider from '@/components/LineDivider/LineDivider.jsx'
import { useFetch } from '@/hooks/useFetch';

export default function OrderNotes() {

    const { data } = useFetch(
      "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
  );
  
  return (
    <div className="block ">
      <div className="flex items-start justify-center w-full">
        <p className="text-sm text-gray-800 font-medium w-40">Order Notes</p>
        <LineDivider />
      </div>
      <div className="block justify-start w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">
          Checkout note from you
        </p>
        <p className="text-sm text-gray-800 font-medium">
        {data?.customer_note}
        </p>
      </div>
      <div className="block justify-start w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">
          Note from Sunning Hill Farm
        </p>
        <p className="text-sm text-gray-800 font-medium">
          Thank you for your order!
        </p>
      </div>
    </div>
  );
}
