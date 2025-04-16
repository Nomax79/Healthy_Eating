"use client"

import { PieChart as Chart } from "@/components/ui/chart"

export function PieChart() {
  const data = [
    { name: "Protein", value: 45, color: "#22c55e" },
    { name: "Carbs", value: 120, color: "#3b82f6" },
    { name: "Chất béo", value: 35, color: "#f59e0b" },
  ]

  return (
    <Chart
      data={data}
      index="name"
      category="value"
      colors={data.map((item) => item.color)}
      valueFormatter={(value) => `${value}g`}
      className="aspect-square"
    />
  )
}
