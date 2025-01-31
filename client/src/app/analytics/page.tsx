"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const monthlyData = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 2000, expenses: 9800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 3800 },
  { name: "Jul", revenue: 3490, expenses: 4300 },
];

const dailyVisitors = [
  { name: "Mon", visitors: 4000 },
  { name: "Tue", visitors: 3000 },
  { name: "Wed", visitors: 2000 },
  { name: "Thu", visitors: 2780 },
  { name: "Fri", visitors: 1890 },
  { name: "Sat", visitors: 2390 },
  { name: "Sun", visitors: 3490 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue vs Expenses</CardTitle>
            <CardDescription>
              Bar chart comparing monthly revenue and expenses
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#66BB6A" />
                <Bar dataKey="expenses" fill="#FF1744" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Daily Visitors</CardTitle>
            <CardDescription>
              Line chart showing daily visitor count
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={dailyVisitors}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#adfa1d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
