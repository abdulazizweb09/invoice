import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function CardScleton({length=7}) {
  return (
    <div className="container mx-auto">
      {Array(length)
        .fill(0)
        .map((_, index) => {
          return (
            <Card className="mt-7 dark:bg-[#1E2139]" key={index}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 rounded-md bg-slate-300 w-[72px]" />
                  <Skeleton className="h-4 rounded-md bg-slate-300 w-[72px]" />
                  <Skeleton className="h-4 rounded-md bg-slate-300 w-[72px]" />
                  <Skeleton className="h-4 rounded-md bg-slate-300 w-[72px]" />
                  <Skeleton className="h-4 rounded-md bg-slate-300 w-[72px]" />
                </div>
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
}

export default CardScleton;
