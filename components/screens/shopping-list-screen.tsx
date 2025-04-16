"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Search, Filter, Plus, ShoppingBag, Trash2, Save, Download } from "lucide-react"

export function ShoppingListScreen() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample shopping list items
  const [items, setItems] = useState([
    { id: 1, name: "Sữa chua Hy Lạp", quantity: "500g", category: "Sản phẩm từ sữa", checked: false },
    { id: 2, name: "Ức gà", quantity: "1kg", category: "Thịt", checked: false },
    { id: 3, name: "Rau chân vịt", quantity: "200g", category: "Rau củ", checked: false },
    { id: 4, name: "Hạt Quinoa", quantity: "500g", category: "Ngũ cốc", checked: true },
    { id: 5, name: "Bơ", quantity: "3 quả", category: "Trái cây", checked: false },
    { id: 6, name: "Cá hồi", quantity: "4 miếng", category: "Hải sản", checked: false },
    { id: 7, name: "Dầu olive", quantity: "1 chai", category: "Dầu ăn", checked: true },
    { id: 8, name: "Hạnh nhân", quantity: "200g", category: "Các loại hạt", checked: false },
    { id: 9, name: "Trứng", quantity: "12 quả", category: "Sản phẩm từ sữa", checked: false },
    { id: 10, name: "Cải xoăn", quantity: "200g", category: "Rau củ", checked: false },
    { id: 11, name: "Cà chua", quantity: "500g", category: "Rau củ", checked: false },
    { id: 12, name: "Táo", quantity: "6 quả", category: "Trái cây", checked: false },
  ])

  // Toggle item checked status
  const toggleItem = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  // Filter items based on search query
  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Group items by category
  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof items>,
  )

  return (
    <DesktopLayout title="Danh sách mua sắm">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Danh sách mua sắm</h2>
            <p className="text-lg text-muted-foreground">Quản lý danh sách mua sắm của bạn</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-green-200">
              <Download className="h-4 w-4 mr-2" />
              Xuất danh sách
            </Button>
            <Button variant="outline" className="border-green-200">
              <Save className="h-4 w-4 mr-2" />
              Lưu danh sách
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Tạo từ thực đơn
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Tìm kiếm và lọc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Lọc theo danh mục</h3>
                  <div className="space-y-2">
                    {Object.keys(
                      items.reduce(
                        (acc, item) => {
                          acc[item.category] = true
                          return acc
                        },
                        {} as Record<string, boolean>,
                      ),
                    ).map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={`category-${category}`} className="mr-2" />
                        <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Trạng thái</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="status-all" className="mr-2" />
                      <label htmlFor="status-all" className="text-sm cursor-pointer">
                        Tất cả
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="status-checked" className="mr-2" />
                      <label htmlFor="status-checked" className="text-sm cursor-pointer">
                        Đã chọn
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="status-unchecked" className="mr-2" />
                      <label htmlFor="status-unchecked" className="text-sm cursor-pointer">
                        Chưa chọn
                      </label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-green-200">
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm sản phẩm
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="w-2/3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Danh sách sản phẩm</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {items.filter((item) => item.checked).length} / {items.length} sản phẩm đã chọn
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(groupedItems).map(([category, categoryItems]) => (
                    <div key={category}>
                      <h3 className="font-medium text-green-700 mb-3">{category}</h3>
                      <Card>
                        <CardContent className="p-0">
                          <div className="grid grid-cols-2 gap-4">
                            {categoryItems.map((item) => (
                              <div key={item.id} className="flex items-center p-3 border-b border-gray-100">
                                <Checkbox
                                  id={`item-${item.id}`}
                                  checked={item.checked}
                                  onCheckedChange={() => toggleItem(item.id)}
                                  className="mr-3 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
                                />
                                <label
                                  htmlFor={`item-${item.id}`}
                                  className={`flex-1 cursor-pointer ${item.checked ? "line-through text-muted-foreground" : ""}`}
                                >
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-xs text-muted-foreground">{item.quantity}</div>
                                </label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  {Object.keys(groupedItems).length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      Không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Xóa đã chọn
                  </Button>
                  <Button variant="outline" size="sm" className="border-green-200">
                    <Filter className="h-4 w-4 mr-1" />
                    Sắp xếp theo danh mục
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DesktopLayout>
  )
}
