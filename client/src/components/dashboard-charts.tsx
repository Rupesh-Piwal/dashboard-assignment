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

export function DashboardCharts() {
  return (
    <div className="space-y-4">
      {/* Total Users Area Chart */}
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

      {/* Lower charts grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
