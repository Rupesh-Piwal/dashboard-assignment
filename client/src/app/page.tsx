import MetricCard from "@/components/metric-card";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Views"
          value="7,265"
          change="+11.01%"
          isPositive={true}
        />
        <MetricCard
          title="Visits"
          value="3,671"
          change="-0.03%"
          isPositive={false}
        />
        <MetricCard
          title="New Users"
          value="156"
          change="+15.03%"
          isPositive={true}
        />
        <MetricCard
          title="Active Users"
          value="2,318"
          change="+6.08%"
          isPositive={true}
        />
      </div>
    </div>
  );
}
