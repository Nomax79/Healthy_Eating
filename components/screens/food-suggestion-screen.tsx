"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Search, Plus, Heart, Flame, Apple, Beef, Fish, Wheat, Filter, SlidersHorizontal } from "lucide-react"

export function FoodSuggestionScreen() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample food suggestions
  const foodSuggestions = [
    {
      id: 1,
      name: "Sữa chua Hy Lạp",
      benefits: "Giàu protein, lợi khuẩn",
      calories: 150,
      category: "dairy",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "Cá hồi",
      benefits: "Omega-3, protein",
      calories: 280,
      category: "protein",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "Hạt Quinoa",
      benefits: "Protein hoàn chỉnh, chất xơ",
      calories: 120,
      category: "grains",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 4,
      name: "Bơ",
      benefits: "Chất béo lành mạnh, kali",
      calories: 240,
      category: "fruits",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "Rau chân vịt",
      benefits: "Sắt, chất chống oxy hóa",
      calories: 25,
      category: "vegetables",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 6,
      name: "Ức gà",
      benefits: "Protein nạc, vitamin B",
      calories: 165,
      category: "protein",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 7,
      name: "Khoai lang",
      benefits: "Vitamin A, chất xơ",
      calories: 115,
      category: "vegetables",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 8,
      name: "Hạnh nhân",
      benefits: "Chất béo lành mạnh, vitamin E",
      calories: 170,
      category: "nuts",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 9,
      name: "Chuối",
      benefits: "Kali, vitamin B6",
      calories: 105,
      category: "fruits",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 10,
      name: "Đậu lăng",
      benefits: "Protein thực vật, sắt",
      calories: 230,
      category: "legumes",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 11,
      name: "Trứng",
      benefits: "Protein hoàn chỉnh, choline",
      calories: 70,
      category: "protein",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 12,
      name: "Cải xoăn",
      benefits: "Vitamin K, chất chống oxy hóa",
      calories: 35,
      category: "vegetables",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  // Filter foods based on search query and active tab\
  const filterFoods = (foods: typeof foodSuggestions, category: string) => {
    return foods.filter(
      (food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (category === "all" || food.category === category),
    )
  }

  return (
    <DesktopLayout title="Gợi ý thực phẩm">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Gợi ý thực phẩm</h2>
            <p className="text-lg text-muted-foreground">Khám phá các thực phẩm lành mạnh cho chế độ ăn của bạn</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-green-200">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Tùy chỉnh bộ lọc
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Thêm vào thực đơn
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Bộ lọc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Tìm kiếm thực phẩm..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="font-medium mb-3">Danh mục</h3>
                  <div className="space-y-2">
                    {[
                      { id: "all", label: "Tất cả" },
                      { id: "protein", label: "Protein" },
                      { id: "vegetables", label: "Rau củ" },
                      { id: "fruits", label: "Trái cây" },
                      { id: "grains", label: "Ngũ cốc" },
                      { id: "dairy", label: "Sản phẩm từ sữa" },
                      { id: "nuts", label: "Các loại hạt" },
                      { id: "legumes", label: "Đậu" },
                    ].map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox id={`category-${category.id}`} className="mr-2" />
                        <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Lượng calories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="cal-low" className="mr-2" />
                      <label htmlFor="cal-low" className="text-sm cursor-pointer">
                        Thấp (&lt;100 kcal)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="cal-medium" className="mr-2" />
                      <label htmlFor="cal-medium" className="text-sm cursor-pointer">
                        Trung bình (100-200 kcal)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="cal-high" className="mr-2" />
                      <label htmlFor="cal-high" className="text-sm cursor-pointer">
                        Cao (&gt;200 kcal)
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Dinh dưỡng</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="nutr-protein" className="mr-2" />
                      <label htmlFor="nutr-protein" className="text-sm cursor-pointer">
                        Giàu protein
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="nutr-fiber" className="mr-2" />
                      <label htmlFor="nutr-fiber" className="text-sm cursor-pointer">
                        Giàu chất xơ
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="nutr-omega" className="mr-2" />
                      <label htmlFor="nutr-omega" className="text-sm cursor-pointer">
                        Giàu Omega-3
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="nutr-vitamins" className="mr-2" />
                      <label htmlFor="nutr-vitamins" className="text-sm cursor-pointer">
                        Giàu vitamin
                      </label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-green-200">
                  <Filter className="h-4 w-4 mr-2" />
                  Áp dụng bộ lọc
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="w-3/4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-8 h-auto mb-6">
                <TabsTrigger value="all" className="py-3 px-0">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>Tất cả</span>
                </TabsTrigger>
                <TabsTrigger value="protein" className="py-3 px-0">
                  <Beef className="h-5 w-5 mr-2" />
                  <span>Protein</span>
                </TabsTrigger>
                <TabsTrigger value="vegetables" className="py-3 px-0">
                  <Apple className="h-5 w-5 mr-2" />
                  <span>Rau củ</span>
                </TabsTrigger>
                <TabsTrigger value="fruits" className="py-3 px-0">
                  <Apple className="h-5 w-5 mr-2" />
                  <span>Trái cây</span>
                </TabsTrigger>
                <TabsTrigger value="grains" className="py-3 px-0">
                  <Wheat className="h-5 w-5 mr-2" />
                  <span>Ngũ cốc</span>
                </TabsTrigger>
                <TabsTrigger value="dairy" className="py-3 px-0">
                  <Fish className="h-5 w-5 mr-2" />
                  <span>Sữa</span>
                </TabsTrigger>
                <TabsTrigger value="nuts" className="py-3 px-0">
                  <Wheat className="h-5 w-5 mr-2" />
                  <span>Hạt</span>
                </TabsTrigger>
                <TabsTrigger value="legumes" className="py-3 px-0">
                  <Wheat className="h-5 w-5 mr-2" />
                  <span>Đậu</span>
                </TabsTrigger>
              </TabsList>

              {["all", "protein", "vegetables", "fruits", "grains", "dairy", "nuts", "legumes"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-3 gap-4">
                    {filterFoods(foodSuggestions, category).map((food) => (
                      <Card key={food.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex gap-4 items-center">
                            <img
                              src={food.image || "/placeholder.svg"}
                              alt={food.name}
                              className="w-24 h-24 rounded-md object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-medium">{food.name}</h3>
                              <p className="text-sm text-muted-foreground">{food.benefits}</p>
                              <div className="flex items-center mt-2 text-sm">
                                <Flame className="h-4 w-4 text-orange-500 mr-1" />
                                <span>{food.calories} kcal</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                            <Heart className="h-4 w-4 mr-1" />
                            Yêu thích
                          </Button>
                          <Button variant="outline" size="sm" className="text-green-600 border-green-200">
                            <Plus className="h-4 w-4 mr-1" />
                            Thêm vào thực đơn
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {filterFoods(foodSuggestions, category).length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      Không tìm thấy thực phẩm nào phù hợp với tìm kiếm của bạn.
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </DesktopLayout>
  )
}

function Checkbox({ id, className, ...props }: { id: string; className?: string; [key: string]: any }) {
  return (
    <div className={`h-4 w-4 rounded border border-gray-300 ${className}`} {...props}>
      <input type="checkbox" id={id} className="sr-only" />
    </div>
  )
}
