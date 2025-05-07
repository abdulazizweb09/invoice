import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBudget from "./StatusBudget";

function MyCard({
  id = "RT3080",
  date = "Due  19 Aug 2021",
  name = "Jensen Huang",
  price = "1,800.90",
  status = "draft",
}) {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>#{id}</CardTitle>
            <CardDescription>{date}</CardDescription>
            <span>{name}</span>
            <span>£{price}</span>
            <StatusBudget status={status} />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default MyCard;
