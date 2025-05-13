import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInvoice } from "../request";
import DetailsInfo from "../components/DetailsInfo";
import DetailsCard from "../components/DetailsCard";

function Details() {
  let [res, setRes] = useState([]);
  let [loading, setLoading] = useState(false);
  let [eror, setEror] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(
    function () {
      setLoading(true);
      getInvoice("invoices", id)
        .then((res) => {
          setRes(res);
        })
        .catch((err) => {
          setEror(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [id]
  );

  function hom() {
    navigate("/");
  }
  if (eror) {
    return <Eror />;
  }

  return (
    <div>
      <div
        onClick={hom}
        className="flex cursor-pointer mt-16 gap-6 items-center"
      >
        {/* <img src={left} alt="" /> */}
        <h3 className="text-[12px]">Go back</h3>
      </div>
      <DetailsInfo res={res} />
      <DetailsCard res={res} />
    </div>
  );
}

export default Details;
