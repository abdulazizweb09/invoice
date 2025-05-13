import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBudget from "./StatusBudget";
import { useNavigate } from "react-router-dom";

function MyCard({
  date = "Due  19 Aug 2021",
  name = "Jensen Huang",
  total = "1,800.90",
  status = "draft",
  ke = "1",
}) {

  let navigate = useNavigate();
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <div
      onClick={(e) => {
        handleDetails(ke);
      }}
      key={ke}
    >
      <Card className="mt-7 dark:bg-[#1E2139] border-2 hover:border-blue-300 cursor-pointer transition-all">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>#{ke}</CardTitle>
            <CardDescription>{date}</CardDescription>
            <span>{name}</span>
            <span>£{total}</span>
            <StatusBudget status={status} />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default MyCard;
