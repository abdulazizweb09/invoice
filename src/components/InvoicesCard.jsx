import React, { useEffect, useState } from "react";
import CardScleton from "./CardScleton";
import { getInvoices } from "../request";
import MyCard from "./MyCard";
import { useAppStore } from "../lib/zustand";
import { toast } from "sonner";

function InvoicesCard() {
  let [invoices, setInvoices] = useState([]);
  let [loading, setLoading] = useState(false);
  let { filter } = useAppStore();

  useEffect(
    function () {
      setLoading(true);
      getInvoices("invoices", filter)
        .then((res) => {
          setInvoices(res);
        })
        .catch((err) => {
          setEror(true);
          toast.error('Nimadur hato ketti')
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [filter]
  );

  if (loading) {
    return <CardScleton />;
  }

  return (
    <div>
      {invoices.map((value, index) => {
        return (
          <MyCard
            key={index}
            status={value.status}
            ke={value.id}
            id={value.invoiceId}
            name={value.clientName}
            total={value.total}
            date={value.createdAt}
          />
        );
      })}
    </div>
  );
}

export default InvoicesCard;
