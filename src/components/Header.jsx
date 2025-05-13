import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { queryGenerator } from "../lib/utils";
import { ArrowBigDownDashIcon } from "lucide-react";
import { useAppStore } from "../lib/zustand";
import HomeModalka from "./HomeModalka";
import { getInvoices } from "../request";

function Header() {
  let { setFilter } = useAppStore();
  let [counter, setCounter] = useState([])
  let [items, setItems] = useState({
    draft: false,
    paid: false,
    pending: false,
  });
  function handleChange(e) {
    setItems((prev) => {
      return { ...prev, [e]: !prev[e] };
    });
  }
  useEffect(
    function () {
      let result = queryGenerator(items);
    },
    [items.draft, items.paid, items.pending]
  );
  useEffect(
    function () {
      let result = queryGenerator(items);
      setFilter(result);
    },
    [items]
  );
  useEffect(
    function () {
      getInvoices("invoices")
        .then((res) => {
          setCounter(res);
        })
        .catch((err) => {
        })
    },
    []
  );
  return (
    <header>
      <div className="flex justify-between dark:text-white items-center mt-16">
        <div className="dark:text-white">
          <h1 className="dark:text-white text-3-5xl mb-2 font-bold">
            Invoices
          </h1>
          <p className="text-12">There are {counter.length} total invoices</p>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-3">
              Filter by status
              <ArrowBigDownDashIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Statutes</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex flex-col">
                {Object.entries(items).map(([key, value]) => {
                  return (
                    <label
                      key={key}
                      className={`${buttonVariants({
                        variant: "ghost",
                      })} justify-start items-center capitalize`}
                      htmlFor={key}
                    >
                      <Checkbox
                        onCheckedChange={() => {
                          handleChange(key);
                        }}
                        id={key}
                        value={key}
                        type="checkbox"
                        checked={value}
                      />
                      {key}
                    </label>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <HomeModalka />
        </div>
      </div>
    </header>
  );
}

export default Header;
