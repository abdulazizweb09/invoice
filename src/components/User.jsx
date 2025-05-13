import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { remuv } from "../store/setUser";
import { useNavigate } from "react-router-dom";
function User() {
  const { user } = useSelector((state) => state.user);  
  let dispatch = useDispatch();
  let navigate = useNavigate();
  function handleRemuv() {
    dispatch(remuv());
    navigate("/login");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="mb-6 ml-[31px] rounded-full">
          <Avatar className="cursor-pointer">
            <AvatarImage src={user?.photoURL || ""} />
            <AvatarFallback>
              {user?.displayName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[9999] ml-10 mb-2" align="end">
        <DropdownMenuItem
          onClick={() => handleRemuv()}
          className="cursor-pointer"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default User;
