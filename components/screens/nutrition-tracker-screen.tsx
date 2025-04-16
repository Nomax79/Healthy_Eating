"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Calendar, Plus, ArrowRight, ArrowLeft, Coffee, UtensilsCrossed, Soup } from "lucide-react"
import { PieChart } from "@/components/charts/pie-chart"

export function NutritionTrackerScreen() {
  // Thêm style tùy chỉnh cho thanh tiến trình
  const progressStyle = {
    "--progress-foreground": "hsl(142.1, 76.2%, 36.3%)",
  } as React.CSSProperties

  const [currentDate, setCurrentDate] = useState(new Date())

  // Format date as "Thứ Hai, ngày 15 tháng 4"
  const formattedDate = () => {
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1

    const weekdays = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
    const weekday = weekdays[currentDate.getDay()]

    return `${weekday}, ngày ${day} tháng ${month}`
  }

  // Navigate to previous/next day
  const navigateDay = (direction: number) => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + direction)
    setCurrentDate(newDate)
  }

  return (
    <DesktopLayout title="Theo dõi dinh dưỡng">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Dinh dưỡng của bạn</h2>
            <p className="text-lg text-muted-foreground">Theo dõi chế độ ăn uống hàng ngày</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-green-200">
              <Plus className="h-4 w-4 mr-2" />
              Ghi nhận thực phẩm
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Xem thực đơn
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigateDay(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-green-600" />
            <span className="text-xl font-medium">{formattedDate()}</span>
          </div>

          <Button variant="ghost" size="icon" onClick={() => navigateDay(1)}>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tóm tắt ngày</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Calories</span>
                      <div>
                        <span className="font-medium">1.200</span>
                        <span className="text-muted-foreground"> / 2.000 kcal</span>
                      </div>
                    </div>
                    <Progress value={60} className="h-3 bg-gray-100" style={progressStyle} />
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Protein</span>
                        <div>
                          <span className="font-medium">45g</span>
                          <span className="text-muted-foreground"> / 60g</span>
                        </div>
                      </div>
                      <Progress value={75} className="h-2 bg-gray-100" style={progressStyle} />
                      <div className="text-xs text-green-600 text-right">75% mục tiêu</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Carbs</span>
                        <div>
                          <span className="font-medium">120g</span>
                          <span className="text-muted-foreground"> / 200g</span>
                        </div>
                      </div>
                      <Progress value={60} className="h-2 bg-gray-100" style={progressStyle} />
                      <div className="text-xs text-green-600 text-right">60% mục tiêu</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Chất béo</span>
                        <div>
                          <span className="font-medium">35g</span>
                          <span className="text-muted-foreground"> / 50g</span>
                        </div>
                      </div>
                      <Progress value={70} className="h-2 bg-gray-100" style={progressStyle} />
                      <div className="text-xs text-green-600 text-right">70% mục tiêu</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chi tiết dinh dưỡng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Chất xơ</span>
                        <div>
                          <span className="font-medium">18g</span>
                          <span className="text-muted-foreground"> / 25g</span>
                        </div>
                      </div>
                      <Progress value={72} className="h-2 bg-gray-100" style={progressStyle} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Đường</span>
                        <div>
                          <span className="font-medium">24g</span>
                          <span className="text-muted-foreground"> / 36g</span>
                        </div>
                      </div>
                      <Progress value={67} className="h-2 bg-gray-100" style={progressStyle} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Natri</span>
                        <div>
                          <span className="font-medium">1.500mg</span>
                          <span className="text-muted-foreground"> / 2.300mg</span>
                        </div>
                      </div>
                      <Progress value={65} className="h-2 bg-gray-100" style={progressStyle} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Nước</span>
                        <div>
                          <span className="font-medium">1,2L</span>
                          <span className="text-muted-foreground"> / 2,5L</span>
                        </div>
                      </div>
                      <Progress value={48} className="h-2 bg-gray-100" style={progressStyle} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bữa ăn hôm nay</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Coffee className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bữa sáng</h3>
                        <p className="text-sm text-muted-foreground">Sữa chua Hy Lạp với mật ong</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">450 kcal</div>
                      <div className="text-xs text-muted-foreground">P: 15g | C: 45g | F: 12g</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <UtensilsCrossed className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bữa trưa</h3>
                        <p className="text-sm text-muted-foreground">Salad gà nướng với bơ</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">650 kcal</div>
                      <div className="text-xs text-muted-foreground">P: 35g | C: 25g | F: 40g</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Soup className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bữa tối</h3>
                        <p className="text-sm text-muted-foreground">Cá hồi với Quinoa</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">750 kcal</div>
                      <div className="text-xs text-muted-foreground">P: 40g | C: 60g | F: 35g</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Phân bổ dinh dưỡng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="w-64 h-64">
                    <PieChart />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vitamin & Khoáng chất</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Vitamin C</span>
                    <div>
                      <span className="font-medium">65mg</span>
                      <span className="text-muted-foreground"> / 90mg</span>
                    </div>
                  </div>
                  <Progress value={72} className="h-2 bg-gray-100" style={progressStyle} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Vitamin D</span>
                    <div>
                      <span className="font-medium">10μg</span>
                      <span className="text-muted-foreground"> / 15μg</span>
                    </div>
                  </div>
                  <Progress value={67} className="h-2 bg-gray-100" style={progressStyle} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Canxi</span>
                    <div>
                      <span className="font-medium">700mg</span>
                      <span className="text-muted-foreground"> / 1000mg</span>
                    </div>
                  </div>
                  <Progress value={70} className="h-2 bg-gray-100" style={progressStyle} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sắt</span>
                    <div>
                      <span className="font-medium">12mg</span>
                      <span className="text-muted-foreground"> / 18mg</span>
                    </div>
                  </div>
                  <Progress value={67} className="h-2 bg-gray-100" style={progressStyle} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lịch sử dinh dưỡng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Hôm qua</div>
                    <div className="font-medium">1,950 kcal</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">2 ngày trước</div>
                    <div className="font-medium">1,850 kcal</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">3 ngày trước</div>
                    <div className="font-medium">2,100 kcal</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">4 ngày trước</div>
                    <div className="font-medium">1,750 kcal</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">5 ngày trước</div>
                    <div className="font-medium">1,900 kcal</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DesktopLayout>
  )
}
