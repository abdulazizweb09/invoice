import React from "react";
import StatusBudget from "./StatusBudget";
import DeleteModalka from "./DeleteModalka";
import { updateById } from "../request";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import HomeModalka from "./HomeModalka";

function DetailsInfo({ res }) {
  let navigate = useNavigate();
  function handleEdit(id) {
    updateById(id, "invoices", "paid")
      .then((res) => {
        navigate("/");
        toast.success("Succes fully paid");
      })
      .catch((err) => {
        toast.error("Nimadur hato ketti");
      });
  }

  return (
    <div>
      {res && (
        <div className="flex justify-between rounded-lg dark:bg-[#1E2139] details-status items-center bg-white p-5 mt-8">
          <p className="mr-4">Status</p>
          <StatusBudget status={res.status} />
          <HomeModalka details="details" res={res} />
          <DeleteModalka id={res.id} name={res.invoiceId} />
          {res.status === "paid" ? (
            <div className="hidden"></div>
          ) : (
            <button
              onClick={() => {
                handleEdit(res.id);
              }}
              className="cursor-pointer text-white rounded-3xl py-4 px-6 btn-paid"
            >
              Mark as Paid
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default DetailsInfo;
