import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { deleteById } from "../request";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function DeleteModalka({id }) {
  let navigate = useNavigate();
 async function handleDelete(id) {
   try {
     await deleteById(id, "invoices");
     toast.success("Invoice deleted successfully");
     navigate("/");
   } catch (err) {
     toast.error(err.message);
   }
 }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mr-2 rounded-3xl py-4 btn-bg text-white px-6 cursor-pointer">
            Delete
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete invoice #{id}? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end items-center gap-2">
            <DialogClose asChild>
              <button className="p-5 cursor-pointer">Cancel</button>
            </DialogClose>
            <DialogClose asChild>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
                className="h-12 w-24 cursor-pointer bg-[#EC5757] rounded-3xl text-white"
              >
                Delete
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteModalka;
