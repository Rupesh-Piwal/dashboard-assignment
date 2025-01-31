import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  isPositive = true,
  className,
}) => {
  return (
    <Card
      className={cn("bg-background/50 backdrop-blur-sm border-none", className)}
    >
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <div className="flex items-baseline justify-between mt-2">
          <h3 className="text-2xl font-bold">{value}</h3>
          <span
            className={cn(
              "text-sm font-medium",
              isPositive
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-600 dark:text-rose-400"
            )}
          >
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
