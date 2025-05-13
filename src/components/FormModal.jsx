import React, { useState } from "react";
import { addInvoice, updateByData } from "../request";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useAppStore } from "../lib/zustand";

function FormModal({ res }) {
  let [country, setCountry] = useState(
    res?.clientAddress?.country || "United Kingdom"
  );
  let [street, setStreet] = useState(
    res?.clientAddress?.street || "19 Union Terrace"
  );
  let [city, setCity] = useState(res?.clientAddress?.city || "London");
  let [postCode, setPostCode] = useState(
    res?.clientAddress?.postCode || "E1 3EZ"
  );
  let [email, setEmail] = useState(res?.clientEmail || "alexgrim@mail.com");
  let [name, setName] = useState(res?.clientName || "Alex Grim");
  let [sendCountry, setSendCountry] = useState(
    res?.senderAddress?.country || "United Kingdom"
  );
  let [sendStreet, setSenderStree] = useState(
    res?.senderAddress?.street || "84 Church Way"
  );
  let [sendCity, setSenderCity] = useState(
    res?.senderAddress?.city || "Bradford"
  );
  let [sendCode, setSendCode] = useState(
    res?.senderAddress?.postCode || "BD1 9PB"
  );
  let [data, setData] = useState(res?.createdAt || "2021-08-18");
  let [sendData, setSendData] = useState(res?.paymentDue || "2021-08-19");
  let [desk, setDesk] = useState(res?.description || "Graphic Design");
  let random = Math.trunc(Math.random() * 100000);
  let payment = "rt" + Math.trunc(Math.random() * 1000);
  let [items, setItems] = useState(
    res?.items || [
      {
        id: crypto.randomUUID(),
        name: "Banner Design",
        quantity: 1,
        price: 156,
        get total() {
          return this.price * this.quantity;
        },
      },
    ]
  );
  let { setOpen } = useAppStore();
  console.log(res);

  function handleChange(e, id) {
    let changeItem = items.find((value) => {
      return value.id === id;
    });
    changeItem[e.target.name] = e.target.value;

    setItems((prev) => {
      let mapped = prev.map((value) => {
        if (value.id == changeItem.id) {
          return changeItem;
        } else {
          return value;
        }
      });
      return mapped;
    });
  }

  function handleSave() {
    let invois = {
      id: random,
      createdAt: data,
      paymentDue: sendData,
      description: desk,
      paymentTerms: payment,
      clientName: name,
      clientEmail: email,
      status: "draft",
      senderAddress: {
        street: street,
        city: city,
        postCode: postCode,
        country: country,
      },
      clientAddress: {
        street: sendStreet,
        city: sendCity,
        postCode: sendCode,
        country: sendCountry,
      },
      items: items,
      total: 1800.9,
    };
    console.log(invois);
    addInvoice(invois, "invoices")
      .then((res) => {
        toast.success("Succes 👍");
        setOpen(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSending() {
    let invois = {
      id: random,
      createdAt: data,
      paymentDue: sendData,
      description: desk,
      paymentTerms: payment,
      clientName: name,
      clientEmail: email,
      status: "pending",
      senderAddress: {
        street: street,
        city: city,
        postCode: postCode,
        country: country,
      },
      clientAddress: {
        street: sendStreet,
        city: sendCity,
        postCode: sendCode,
        country: sendCountry,
      },
      items: items,
      total: 1800.9,
    };
    console.log(invois);
    addInvoice(invois, "invoices")
      .then((res) => {
        toast.success("Succes 👍");
        setOpen(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAdd() {
    if (items.at(-1).name.trim() !== "") {
      setItems((prev) => {
        return [
          ...prev,
          {
            id: crypto.randomUUID(),
            name: "",
            quantity: 1,
            price: 0,
            get total() {
              return this.price * this.quantity;
            },
          },
        ];
      });
    } else {
      toast.info("Ismni Kiriting!");
    }
  }

  function handleDelete(id) {
    if (items.length === 1) {
      toast.error("Eng kamida bitta item bolishi kerak");
    } else {
      let filtered = items.filter((value) => {
        return value.id !== id;
      });
      setItems(filtered);
    }
  }
  function handleCancel() {
    setOpen(false);
  }
  function result(sum) {
    let total = 0;
    sum.forEach((value) => {
      total += value.price * value.quantity;
    });
    return total;
  }

  function handleUpdate(id) {
    let invois = {
      id: random,
      createdAt: data,
      paymentDue: sendData,
      description: desk,
      paymentTerms: payment,
      clientName: name,
      clientEmail: email,
      status: res?.status,
      senderAddress: {
        street: street,
        city: city,
        postCode: postCode,
        country: country,
      },
      clientAddress: {
        street: sendStreet,
        city: sendCity,
        postCode: sendCode,
        country: sendCountry,
      },
      items: items,
      total: result(items),
    };
    updateByData(id, "invoices", invois)
      .then((res) => {
        toast.success("edit succes 👍");
        setOpen(false);
      })
      .catch((err) => {
        toast.error("Nimadur hato ketti");
        setOpen(false);
      });
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg">
      {res ? (
        <h2 className="text-2xl font-bold mb-6">Edit #{res.id}</h2>
      ) : (
        <h2 className="text-2xl font-bold mb-6">New Invoice</h2>
      )}

      <p className="text-sm text-indigo-600 font-semibold mb-2">Bill From</p>
      <input
        className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <div className="flex gap-4 mt-2">
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <p className="text-sm text-indigo-600 font-semibold mt-6 mb-2">Bill To</p>
      <input
        className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800 mt-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800 mt-2"
        value={sendStreet}
        onChange={(e) => setSenderStree(e.target.value)}
      />
      <div className="flex gap-4 mt-2">
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={sendCity}
          onChange={(e) => setSenderCity(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={sendCode}
          onChange={(e) => setSendCode(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={sendCountry}
          onChange={(e) => setSendCountry(e.target.value)}
        />
      </div>

      <div className="flex gap-4 mt-6">
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={data}
          type="date"
          onChange={(e) => setData(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
          value={sendData}
          type="date"
          onChange={(e) => setSendData(e.target.value)}
        />
      </div>

      <input
        className="w-full border px-3 py-2 rounded-md bg-gray-50 text-sm text-gray-800 mt-4"
        value={desk}
        onChange={(e) => setDesk(e.target.value)}
      />

      <p className="font-bold mt-6">Item List</p>
      <div className="grid grid-cols-4 gap-5 mt-2 text-sm font-semibold text-gray-600">
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
      </div>

      <div className="gap-4 mt-2 items-center">
        {items.map((value) => {
          return (
            <div
              key={value.id}
              className="flex items-center mt-5 flex-wrap gap-2"
            >
              <input
                className="border px-3 w-[134px] py-2 rounded-md bg-gray-50 text-sm text-gray-800"
                defaultValue={value.name}
                name="name"
                onChange={(e) => {
                  handleChange(e, value.id);
                }}
              />
              <input
                className="border w-12 px-3 ml-2  py-2 rounded-md bg-gray-50 text-sm text-gray-800"
                defaultValue={value.quantity}
                type="number"
                name="quantity"
                onChange={(e) => {
                  handleChange(e, value.id);
                }}
              />
              <input
                className="border w-28 px-3 ml-24 py-2 rounded-md bg-gray-50 text-sm text-gray-800"
                defaultValue={value.price}
                type="number"
                name="price"
                onChange={(e) => {
                  handleChange(e, value.id);
                }}
              />
              <p className="ml-9 mr-7">{value.total.toFixed(2)}</p>
              <Trash2
                onClick={() => {
                  handleDelete(value.id);
                }}
                className="text-[#888EB0] cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={handleAdd}
        className="w-full cursor-pointer text-indigo-600 font-medium mt-4"
      >
        + Add New Item
      </button>
      {res ? (
        <div className="flex justify-end gap-9 items-center mt-5">
          <button className="cursor-pointer" onClick={handleCancel}>
            Cancel
          </button>
          <button
            onClick={() => {
              handleUpdate(res.id);
            }}
            className="bg-[#7C5DFA] text-white rounded-3xl px-6 py-4 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded-full text-gray-600 hover:text-gray-800"
          >
            Discard
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-gray-800 text-white rounded-full"
            >
              Save as Draft
            </button>
            <button
              onClick={handleSending}
              className="px-4 py-2 bg-indigo-600 text-white rounded-full"
            >
              Save & Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormModal;
