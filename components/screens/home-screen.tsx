"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Calendar, Utensils, ShoppingBag, Target, PieChart, ChevronRight, ArrowRight } from "lucide-react"
import { PieChart as NutritionChart } from "@/components/charts/pie-chart"

export function HomeScreen() {
  const [currentDate] = useState(new Date())

  // Thêm style tùy chỉnh cho thanh tiến trình
  const progressStyle = {
    "--progress-foreground": "hsl(142.1, 76.2%, 36.3%)",
  } as React.CSSProperties

  // Format date as "Thứ Hai, ngày 15 tháng 4"
  const formattedDate = () => {
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1

    const weekdays = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    const weekday = weekdays[currentDate.getDay()]

    return `${weekday}, ngày ${day} tháng ${month}`
  }

  return (
    <DesktopLayout title="Trang chủ">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Chào buổi sáng, An!</h2>
            <p className="text-lg text-muted-foreground">{formattedDate()}</p>
          </div>
          <Link href="/weekly-planner">
            <Button className="bg-green-600 hover:bg-green-700">
              <Calendar className="h-5 w-5 mr-2" />
              Lên kế hoạch tuần
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Tóm tắt hôm nay</span>
                  <Link href="/nutrition">
                    <Button variant="ghost" size="sm" className="text-green-700">
                      Chi tiết <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Calories</span>
                    <span className="font-medium">1.200 / 2.000 kcal</span>
                  </div>
                  <Progress value={60} className="h-3 bg-green-200" style={progressStyle} />

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-sm text-muted-foreground">Protein</div>
                      <div className="text-xl font-medium text-green-700">45g</div>
                      <div className="text-xs text-green-600">75% mục tiêu</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-sm text-muted-foreground">Carbs</div>
                      <div className="text-xl font-medium text-green-700">120g</div>
                      <div className="text-xs text-green-600">60% mục tiêu</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-sm text-muted-foreground">Chất béo</div>
                      <div className="text-xl font-medium text-green-700">35g</div>
                      <div className="text-xs text-green-600">70% mục tiêu</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thực đơn hôm nay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Utensils className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bữa sáng</h3>
                        <p className="text-sm text-muted-foreground">Sữa chua Hy Lạp với mật ong</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">450 kcal</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Utensils className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bữa trưa</h3>
                        <p className="text-sm text-muted-foreground">Salad gà nướng với bơ</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">650 kcal</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Utensils className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bữa tối</h3>
                        <p className="text-sm text-muted-foreground">Cá hồi với Quinoa</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">750 kcal</span>
                  </div>

                  <Link href="/meal-plan">
                    <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">
                      Xem chi tiết thực đơn
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mục tiêu của bạn</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-xs text-muted-foreground">Mục tiêu chính</div>
                      <div className="font-medium">Giảm cân</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-xs text-muted-foreground">Chế độ ăn</div>
                      <div className="font-medium">Cân bằng</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-xs text-muted-foreground">Calories mỗi ngày</div>
                      <div className="font-medium">2.000 kcal</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-xs text-muted-foreground">Số bữa mỗi ngày</div>
                      <div className="font-medium">3 bữa</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tiến độ giảm cân</span>
                      <div>
                        <span className="font-medium">5kg</span>
                        <span className="text-muted-foreground"> / 10kg</span>
                      </div>
                    </div>
                    <Progress value={50} className="h-2 bg-gray-100" style={progressStyle} />
                  </div>

                  <Link href="/goals">
                    <Button variant="outline" className="w-full mt-2 border-green-200">
                      Cập nhật mục tiêu
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Phân bổ dinh dưỡng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="w-48 h-48">
                    <NutritionChart />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Truy cập nhanh</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/nutrition">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col gap-2 border-green-200 hover:border-green-300 hover:bg-green-50"
                    >
                      <PieChart className="h-6 w-6 text-green-600" />
                      <span>Dinh dưỡng</span>
                    </Button>
                  </Link>

                  <Link href="/shopping-list">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col gap-2 border-green-200 hover:border-green-300 hover:bg-green-50"
                    >
                      <ShoppingBag className="h-6 w-6 text-green-600" />
                      <span>Mua sắm</span>
                    </Button>
                  </Link>

                  <Link href="/goals">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col gap-2 border-green-200 hover:border-green-300 hover:bg-green-50"
                    >
                      <Target className="h-6 w-6 text-green-600" />
                      <span>Mục tiêu</span>
                    </Button>
                  </Link>

                  <Link href="/suggestions">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col gap-2 border-green-200 hover:border-green-300 hover:bg-green-50"
                    >
                      <Utensils className="h-6 w-6 text-green-600" />
                      <span>Gợi ý</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DesktopLayout>
  )
}
