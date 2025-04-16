"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Coffee, UtensilsCrossed, Soup, Edit, Plus, ArrowRight } from "lucide-react"

export function TodaysMealPlanScreen() {
  const [currentDate] = useState(new Date())

  // Format date as "15 tháng 4"
  const formattedDate = () => {
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    return `${day} tháng ${month}`
  }

  return (
    <DesktopLayout title="Thực đơn hôm nay">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">{formattedDate()}</h2>
            <p className="text-lg text-muted-foreground">Thực đơn được cá nhân hóa cho bạn</p>
          </div>
          <div className="flex items-center text-lg">
            <span className="font-medium">1.850 kcal</span>
            <span className="mx-2">•</span>
            <span className="text-muted-foreground">Mục tiêu 2.000 kcal</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <Card className="border-green-100">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-medium flex items-center">
                <Coffee className="h-6 w-6 mr-3 text-green-600" />
                Bữa sáng
              </CardTitle>
              <span className="text-lg text-muted-foreground">450 kcal</span>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Sữa chua Hy Lạp</h3>
                  <p className="text-muted-foreground">Với mật ong, granola và dâu</p>
                </div>
                <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                  <Edit className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Protein</div>
                  <div className="font-medium">15g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Carbs</div>
                  <div className="font-medium">45g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Chất béo</div>
                  <div className="font-medium">12g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Đường</div>
                  <div className="font-medium">18g</div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Nguyên liệu:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 200g sữa chua Hy Lạp</li>
                  <li>• 1 muỗng mật ong</li>
                  <li>• 30g granola</li>
                  <li>• 50g dâu tây</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-medium flex items-center">
                <UtensilsCrossed className="h-6 w-6 mr-3 text-green-600" />
                Bữa trưa
              </CardTitle>
              <span className="text-lg text-muted-foreground">650 kcal</span>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Salad gà nướng</h3>
                  <p className="text-muted-foreground">Với bơ và sốt dầu giấm</p>
                </div>
                <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                  <Edit className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Protein</div>
                  <div className="font-medium">35g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Carbs</div>
                  <div className="font-medium">25g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Chất béo</div>
                  <div className="font-medium">40g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Chất xơ</div>
                  <div className="font-medium">8g</div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Nguyên liệu:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 120g ức gà nướng</li>
                  <li>• 1/2 quả bơ</li>
                  <li>• Rau xà lách trộn</li>
                  <li>• Sốt dầu giấm balsamic</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-medium flex items-center">
                <Soup className="h-6 w-6 mr-3 text-green-600" />
                Bữa tối
              </CardTitle>
              <span className="text-lg text-muted-foreground">750 kcal</span>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Cá hồi với Quinoa</h3>
                  <p className="text-muted-foreground">Với rau củ nướng</p>
                </div>
                <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                  <Edit className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Protein</div>
                  <div className="font-medium">40g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Carbs</div>
                  <div className="font-medium">60g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Chất béo</div>
                  <div className="font-medium">35g</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-xs text-muted-foreground">Omega-3</div>
                  <div className="font-medium">2.5g</div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Nguyên liệu:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 150g cá hồi</li>
                  <li>• 100g quinoa</li>
                  <li>• Rau củ nướng (cà rốt, bông cải)</li>
                  <li>• Dầu olive, chanh</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 mt-6">
          <Button variant="outline" className="border-dashed border-green-200">
            <Plus className="h-4 w-4 mr-2" />
            Thêm bữa phụ
          </Button>

          <Link href="/suggestions">
            <Button variant="outline" className="border-green-200">
              Gợi ý thực phẩm
            </Button>
          </Link>

          <Link href="/weekly-planner">
            <Button className="bg-green-600 hover:bg-green-700">
              Xem kế hoạch tuần
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </DesktopLayout>
  )
}
