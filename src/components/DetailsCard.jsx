import React from "react";

function DetailsCard({ res }) {
  return (
    <div className="details-status">
      {res && (
        <div className="details-status dark:bg-[#1E2139] text-[12px] rounded-lg bg-white p-12 mt-6">
          <div className="flex justify-between">
            <div>
              <p className="flex text-[16px] mb-2 font-bold">
                <span className="text-[#7E88C3]">#</span> {res.id}
              </p>
              <p>{res.description}</p>
            </div>
            <div className="text-[11px] text-color mb-5">
              <p>{res.clientAddress?.street}</p>
              <p>{res.clientAddress?.city}</p>
              <p>{res.clientAddress?.postCode}</p>
              <p>{res.clientAddress?.country}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <div>
                <p className="text-color mb-3">Invoice Date</p>
                <p className="text-[15px] font-bold">{res.createdAt}</p>
              </div>
              <div className="mt-12">
                <p className="text-color mb-3">Payment Due</p>
                <p className="text-[15px] font-bold">{res.paymentDue}</p>
              </div>
            </div>
            <div className="ml-24">
              <p className="text-color mb-3">Bill To</p>
              <p className="text-[15px] font-bold mb-2">{res.clientName}</p>
              <p className="text-color mt-3.5">{res.senderAddress?.street}</p>
              <p className="text-color mt-1">{res.senderAddress?.city}</p>
              <p className="text-color mt-1">{res.senderAddress?.postCode}</p>
              <p className="text-color mt-1">{res.senderAddress?.country}</p>
            </div>
            <div className="ml-28">
              <p className="text-color">Sent to</p>
              <p className="mt-3 font-bold text-[15px]">{res.clientEmail}</p>
            </div>
          </div>
          <div className="w-full dark:bg-[#252945] bg-[#F9FAFE] mt-12 rounded-t-lg p-8">
            <div className="flex mt- text-[11px] justify-between">
              <p className="mr-56 text-color">Item Name</p>
              <p className="text-color mr-14">QTY.</p>
              <p className="text-color mr-14">Price</p>
              <p className="text-color">Total</p>
            </div>
            {res.items &&
              res.items.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex mt-8 font-bold justify-between"
                  >
                    <p className="text-[12px] mr-56">{value.name}</p>
                    <p className="mr-20 text-color">{value.quantity}</p>
                    <p className="mr-14 text-color">{value.price}</p>
                    <p>{value.total}</p>
                  </div>
                );
              })}
          </div>
          <div className="px-8 dark:bg-[#0C0E16] py-6 rounded-b-lg text-white justify-between flex bg-[#373B53]">
            <p className="text-[11px]">Amount Due</p>
            <p className="text-2xl font-bold">£ {res.total}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsCard;
