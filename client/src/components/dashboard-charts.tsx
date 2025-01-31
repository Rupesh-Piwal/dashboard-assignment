"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { colors } from "@/lib/colors";
import { ActivityItem } from "./activity-item";

const barChartData = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1900 },
  { name: "Mar", total: 1500 },
  { name: "Apr", total: 2200 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 2400 },
];

const pieChartData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
];

const areaChartData = [
  { name: "Jan", users: 100, revenue: 1400 },
  { name: "Feb", users: 200, revenue: 1800 },
  { name: "Mar", users: 300, revenue: 2200 },
  { name: "Apr", users: 400, revenue: 2600 },
  { name: "May", users: 500, revenue: 3000 },
  { name: "Jun", users: 600, revenue: 3400 },
];

// Mock activity data for the ActivityItem
const activities = [
  {
    user: { name: "John Doe", avatar: "https://example.com/avatar1.jpg" },
    action: "logged in",
    timestamp: "2 hours ago",
  },
  {
    user: { name: "Jane Smith", avatar: "https://example.com/avatar2.jpg" },
    action: "updated profile",
    timestamp: "3 hours ago",
  },
  {
    user: { name: "Alice Johnson", avatar: "https://example.com/avatar3.jpg" },
    action: "commented on a post",
    timestamp: "5 hours ago",
  },
];

export function DashboardCharts() {
  return (
    <div className="space-y-4">
      {/* First Row: Total Users and Activity Feed */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Total Users Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] p-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaChartData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={colors.primary}
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor={colors.primary}
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  width={40}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke={colors.primary}
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Feed Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                user={activity.user}
                action={activity.action}
                timestamp={activity.timestamp}
              />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Second Row: Monthly Activity and Device Distribution */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* Monthly Activity Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">
              Monthly Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] p-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  width={40}
                />
                <Tooltip />
                <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                  {barChartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 2 === 0 ? colors.primary : colors.secondary}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Distribution Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">
              Device Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] p-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  label
                >
                  {pieChartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        [colors.primary, colors.secondary, colors.tertiary][
                          index % 3
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
