"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Weight, Dumbbell, Heart, Utensils, Save } from "lucide-react"

// Thêm style tùy chỉnh cho thanh tiến trình
const progressStyle = {
  "--progress-foreground": "hsl(142.1, 76.2%, 36.3%)",
} as React.CSSProperties

export function SetGoalsScreen() {
  const [selectedGoal, setSelectedGoal] = useState("lose-weight")
  const [selectedDiet, setSelectedDiet] = useState("balanced")
  const [mealsPerDay, setMealsPerDay] = useState(3)

  return (
    <DesktopLayout title="Đặt mục tiêu">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-green-700">Cá nhân hóa kế hoạch</h2>
          <p className="text-lg text-muted-foreground">Đặt mục tiêu sức khỏe và sở thích để nhận thực đơn phù hợp.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mục tiêu chính của bạn là gì?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer border-2 ${selectedGoal === "lose-weight" ? "border-green-500 bg-green-50" : "border-gray-200"}`}
                    onClick={() => setSelectedGoal("lose-weight")}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Weight
                        className={`h-10 w-10 mb-3 ${selectedGoal === "lose-weight" ? "text-green-600" : "text-gray-500"}`}
                      />
                      <h3 className="text-lg font-medium">Giảm cân</h3>
                      <p className="text-sm text-muted-foreground mt-2">Giảm calo với dinh dưỡng cân bằng</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedGoal === "gain-muscle" ? "border-green-500 bg-green-50" : "border-gray-200"}`}
                    onClick={() => setSelectedGoal("gain-muscle")}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Dumbbell
                        className={`h-10 w-10 mb-3 ${selectedGoal === "gain-muscle" ? "text-green-600" : "text-gray-500"}`}
                      />
                      <h3 className="text-lg font-medium">Tăng cơ</h3>
                      <p className="text-sm text-muted-foreground mt-2">Chế độ giàu protein với thặng dư calo</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedGoal === "maintain" ? "border-green-500 bg-green-50" : "border-gray-200"}`}
                    onClick={() => setSelectedGoal("maintain")}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Heart
                        className={`h-10 w-10 mb-3 ${selectedGoal === "maintain" ? "text-green-600" : "text-gray-500"}`}
                      />
                      <h3 className="text-lg font-medium">Duy trì</h3>
                      <p className="text-sm text-muted-foreground mt-2">Dinh dưỡng cân bằng với calo duy trì</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer border-2 ${selectedGoal === "health" ? "border-green-500 bg-green-50" : "border-gray-200"}`}
                    onClick={() => setSelectedGoal("health")}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Utensils
                        className={`h-10 w-10 mb-3 ${selectedGoal === "health" ? "text-green-600" : "text-gray-500"}`}
                      />
                      <h3 className="text-lg font-medium">Cải thiện sức khỏe</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Thực phẩm giàu dinh dưỡng cho sức khỏe tổng thể
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Số bữa ăn mỗi ngày</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-lg">Số bữa ăn</span>
                    <span className="text-lg font-medium text-green-700">{mealsPerDay}</span>
                  </div>

                  <Slider
                    value={[mealsPerDay]}
                    min={2}
                    max={6}
                    step={1}
                    onValueChange={(value) => setMealsPerDay(value[0])}
                    className="py-4"
                  />

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>2 bữa</span>
                    <span>6 bữa</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Chế độ ăn ưa thích</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedDiet} onValueChange={setSelectedDiet} className="grid grid-cols-2 gap-4">
                  {[
                    { value: "balanced", label: "Cân bằng", description: "Phân bổ dinh dưỡng đều đặn" },
                    { value: "keto", label: "Keto", description: "Ít carb, nhiều chất béo" },
                    { value: "vegetarian", label: "Ăn chay", description: "Không thịt, có trứng và sữa" },
                    { value: "vegan", label: "Thuần chay", description: "Hoàn toàn từ thực vật" },
                    { value: "paleo", label: "Paleo", description: "Thực phẩm tự nhiên, không chế biến" },
                    { value: "mediterranean", label: "Địa Trung Hải", description: "Dầu olive, cá, rau củ" },
                  ].map((diet) => (
                    <div key={diet.value} className="flex items-start space-x-3 border rounded-md p-3">
                      <RadioGroupItem value={diet.value} id={diet.value} className="mt-1" />
                      <div>
                        <Label htmlFor={diet.value} className="text-base font-medium cursor-pointer">
                          {diet.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{diet.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thông tin cá nhân</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Cân nặng hiện tại (kg)</Label>
                    <input type="number" id="weight" className="w-full p-2 border rounded-md" placeholder="70" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target-weight">Cân nặng mục tiêu (kg)</Label>
                    <input type="number" id="target-weight" className="w-full p-2 border rounded-md" placeholder="65" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Chiều cao (cm)</Label>
                    <input type="number" id="height" className="w-full p-2 border rounded-md" placeholder="170" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Tuổi</Label>
                    <input type="number" id="age" className="w-full p-2 border rounded-md" placeholder="30" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" className="border-green-200">
            Đặt lại
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="h-4 w-4 mr-2" />
            Lưu và tạo kế hoạch
          </Button>
        </div>
      </div>
    </DesktopLayout>
  )
}
