"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
  data: { name: string; value: number; color: string }[]
  index: string
  category: string
  colors: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

export function PieChart({ data, index, category, colors, valueFormatter, className }: PieChartProps) {
  const chartData = {
    labels: data.map((item) => item[index]),
    datasets: [
      {
        label: category,
        data: data.map((item) => item[category]),
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.label || ""

            if (label) {
              label += ": "
            }
            if (context.parsed !== null) {
              label += context.parsed
              if (valueFormatter) {
                label = valueFormatter(context.parsed)
              }
            }
            return label
          },
        },
      },
    },
  }

  return <Pie data={chartData} options={options} className={className} />
}
