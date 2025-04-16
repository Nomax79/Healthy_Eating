"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { ChevronLeft, ChevronRight, Coffee, UtensilsCrossed, Soup, Plus, Edit, Download, Share2 } from "lucide-react"

export function WeeklyMealPlannerScreen() {
  const [currentWeek, setCurrentWeek] = useState(0)

  // Generate dates for the current week
  const generateWeekDates = () => {
    const today = new Date()
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay() + currentWeek * 7)

    return Array(7)
      .fill(null)
      .map((_, i) => {
        const date = new Date(startOfWeek)
        date.setDate(startOfWeek.getDate() + i)
        return date
      })
  }

  const weekDates = generateWeekDates()

  // Format month range for display
  const getMonthRange = () => {
    const firstDay = weekDates[0]
    const lastDay = weekDates[6]

    const months = [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ]

    if (firstDay.getMonth() === lastDay.getMonth()) {
      return months[firstDay.getMonth()]
    } else {
      return `${months[firstDay.getMonth()]} - ${months[lastDay.getMonth()]}`
    }
  }

  // Get Vietnamese weekday name
  const getVietnameseWeekday = (date) => {
    const weekdays = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    return weekdays[date.getDay()]
  }

  return (
    <DesktopLayout title="Lên kế hoạch tuần">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Kế hoạch tuần</h2>
            <p className="text-lg text-muted-foreground">Lên kế hoạch bữa ăn cho cả tuần</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-green-200">
              <Download className="h-4 w-4 mr-2" />
              Xuất PDF
            </Button>
            <Button variant="outline" className="border-green-200">
              <Share2 className="h-4 w-4 mr-2" />
              Chia sẻ
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Tạo thực đơn tuần
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="ghost" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)}>
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <h2 className="text-xl font-bold text-green-700">{getMonthRange()}</h2>

          <Button variant="ghost" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {weekDates.map((date, index) => {
            const isToday = date.toDateString() === new Date().toDateString()

            return (
              <Card key={index} className={`border ${isToday ? "border-green-300 bg-green-50" : "border-gray-200"}`}>
                <CardHeader className="p-3 pb-0">
                  <CardTitle className="text-center">
                    <div
                      className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-1 ${isToday ? "bg-green-600 text-white" : "bg-gray-100"}`}
                    >
                      <span className="font-medium">{date.getDate()}</span>
                    </div>
                    <div className="text-sm">{getVietnameseWeekday(date)}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-2">
                  <div className="space-y-3">
                    <div className="bg-white rounded-md p-2 text-sm border border-gray-100 shadow-sm">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Coffee className="h-3 w-3 mr-1" />
                        <span>Sáng</span>
                      </div>
                      <p className="font-medium">Sữa chua Hy Lạp</p>
                      <p className="text-xs text-muted-foreground">450 kcal</p>
                    </div>

                    <div className="bg-white rounded-md p-2 text-sm border border-gray-100 shadow-sm">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <UtensilsCrossed className="h-3 w-3 mr-1" />
                        <span>Trưa</span>
                      </div>
                      <p className="font-medium">Salad gà</p>
                      <p className="text-xs text-muted-foreground">650 kcal</p>
                    </div>

                    <div className="bg-white rounded-md p-2 text-sm border border-gray-100 shadow-sm">
                      <div className="flex items-center text-xs text-muted-foreground mb-1">
                        <Soup className="h-3 w-3 mr-1" />
                        <span>Tối</span>
                      </div>
                      <p className="font-medium">Cá hồi & Quinoa</p>
                      <p className="text-xs text-muted-foreground">750 kcal</p>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <Button variant="ghost" size="sm" className="text-green-600 h-7 text-xs">
                      <Edit className="h-3 w-3 mr-1" />
                      Chỉnh sửa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tổng quan dinh dưỡng tuần</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Calories trung bình</span>
                  <span className="font-medium">1,850 kcal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Mục tiêu</span>
                  <span className="font-medium">2,000 kcal</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Protein trung bình</span>
                  <span className="font-medium">95g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Mục tiêu</span>
                  <span className="font-medium">120g</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Carbs trung bình</span>
                  <span className="font-medium">180g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Mục tiêu</span>
                  <span className="font-medium">200g</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Chất béo trung bình</span>
                  <span className="font-medium">65g</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Mục tiêu</span>
                  <span className="font-medium">70g</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DesktopLayout>
  )
}
