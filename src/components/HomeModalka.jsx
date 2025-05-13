import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircleIcon } from "lucide-react";
import FormModal from "./FormModal";
import { useAppStore } from "../lib/zustand";

function HomeModalka({details,res}) {
  let { isOpen, setOpen } = useAppStore();
 
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {details === "details" ? (
            <div>
              <p className="ml-56 mr-8 cursor-pointer">Edit</p>
            </div>
          ) : (
            <button className="bg-button items-center text-white pr-4 cursor-pointer ml-10 gap-2 flex p-2 rounded-3xl">
              <PlusCircleIcon />
              New Invoice
            </button>
          )}
        </SheetTrigger>
        <SheetContent
          side="left"
          className="left-[87px] min-w-[700px] overflow-y-auto"
        >
          <FormModal res={res} />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default HomeModalka;
