"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import { Bell, Moon, Smartphone, Globe, Languages, Lock, HelpCircle, LogOut, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AppSettingsScreen() {
  const [notifications, setNotifications] = useState(true)
  const [mealReminders, setMealReminders] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [units, setUnits] = useState("metric")
  const [language, setLanguage] = useState("vi")

  return (
    <DesktopLayout title="Cài đặt">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Cài đặt ứng dụng</h2>
            <p className="text-lg text-muted-foreground">Tùy chỉnh trải nghiệm ứng dụng của bạn</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="h-4 w-4 mr-2" />
            Lưu thay đổi
          </Button>
        </div>

        <Tabs defaultValue="preferences" className="w-full">
          <TabsList className="grid grid-cols-4 h-auto mb-6">
            <TabsTrigger value="preferences" className="py-3">
              <Bell className="h-5 w-5 mr-2" />
              <span>Tùy chọn</span>
            </TabsTrigger>
            <TabsTrigger value="units" className="py-3">
              <Globe className="h-5 w-5 mr-2" />
              <span>Đơn vị & Ngôn ngữ</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="py-3">
              <Lock className="h-5 w-5 mr-2" />
              <span>Tài khoản & Bảo mật</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="py-3">
              <HelpCircle className="h-5 w-5 mr-2" />
              <span>Hỗ trợ</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preferences">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-green-600" />
                    Thông báo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notifications" className="font-medium">
                        Thông báo đẩy
                      </Label>
                      <p className="text-sm text-muted-foreground">Bật thông báo đẩy</p>
                    </div>
                    <Switch
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                      className="data-[state=checked]:bg-green-600"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="meal-reminders" className="font-medium">
                        Nhắc nhở bữa ăn
                      </Label>
                      <p className="text-sm text-muted-foreground">Nhận nhắc nhở về bữa ăn của bạn</p>
                    </div>
                    <Switch
                      id="meal-reminders"
                      checked={mealReminders}
                      onCheckedChange={setMealReminders}
                      disabled={!notifications}
                      className="data-[state=checked]:bg-green-600"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weekly-report" className="font-medium">
                        Báo cáo hàng tuần
                      </Label>
                      <p className="text-sm text-muted-foreground">Nhận tóm tắt tiến độ hàng tuần</p>
                    </div>
                    <Switch
                      id="weekly-report"
                      checked={weeklyReport}
                      onCheckedChange={setWeeklyReport}
                      disabled={!notifications}
                      className="data-[state=checked]:bg-green-600"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Moon className="h-5 w-5 mr-2 text-green-600" />
                    Giao diện
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dark-mode" className="font-medium">
                        Chế độ tối
                      </Label>
                      <p className="text-sm text-muted-foreground">Chuyển sang giao diện tối</p>
                    </div>
                    <Switch
                      id="dark-mode"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                      className="data-[state=checked]:bg-green-600"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="font-medium">Màu sắc chủ đạo</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { color: "bg-green-600", name: "Xanh lá" },
                        { color: "bg-blue-600", name: "Xanh dương" },
                        { color: "bg-purple-600", name: "Tím" },
                        { color: "bg-red-600", name: "Đỏ" },
                        { color: "bg-orange-600", name: "Cam" },
                      ].map((theme, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full ${theme.color} cursor-pointer mb-1 ${index === 0 ? "ring-2 ring-offset-2 ring-green-600" : ""}`}
                          ></div>
                          <span className="text-xs">{theme.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-medium">Phông chữ</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: "Mặc định", selected: true },
                        { name: "Sans Serif", selected: false },
                        { name: "Serif", selected: false },
                      ].map((font, index) => (
                        <div
                          key={index}
                          className={`p-2 border rounded-md text-center cursor-pointer ${font.selected ? "border-green-600 bg-green-50" : "border-gray-200"}`}
                        >
                          <span className="text-sm">{font.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="units">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-green-600" />
                    Đơn vị đo lường
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="font-medium">Hệ đơn vị</Label>
                      <RadioGroup value={units} onValueChange={setUnits} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="metric"
                            id="metric"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="metric">Hệ mét (kg, cm)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="imperial"
                            id="imperial"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="imperial">Hệ Anh (lb, ft)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium">Định dạng thời gian</Label>
                      <RadioGroup defaultValue="24h" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="24h"
                            id="24h"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="24h">24 giờ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="12h"
                            id="12h"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="12h">12 giờ (AM/PM)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium">Định dạng ngày</Label>
                      <RadioGroup defaultValue="dmy" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="dmy"
                            id="dmy"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="dmy">DD/MM/YYYY</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="mdy"
                            id="mdy"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="mdy">MM/DD/YYYY</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Languages className="h-5 w-5 mr-2 text-green-600" />
                    Ngôn ngữ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="font-medium">Ngôn ngữ</Label>
                      <RadioGroup value={language} onValueChange={setLanguage} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="vi"
                            id="vi"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="vi">Tiếng Việt</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="en"
                            id="en"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="en">English (Tiếng Anh)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="fr"
                            id="fr"
                            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
                          />
                          <Label htmlFor="fr">Français (Tiếng Pháp)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium">Khu vực</Label>
                      <div className="relative">
                        <select className="w-full p-2 pr-8 border rounded-md appearance-none">
                          <option>Việt Nam</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>France</option>
                          <option>Germany</option>
                          <option>Japan</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-green-600" />
                    Bảo mật tài khoản
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <div className="flex">
                      <input
                        type="email"
                        id="email"
                        className="flex-1 p-2 border rounded-l-md"
                        value="an.nguyen@example.com"
                        readOnly
                      />
                      <Button variant="outline" className="rounded-l-none border-l-0">
                        Thay đổi
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="password" className="font-medium">
                      Mật khẩu
                    </Label>
                    <div className="flex">
                      <input
                        type="password"
                        id="password"
                        className="flex-1 p-2 border rounded-l-md"
                        value="••••••••"
                        readOnly
                      />
                      <Button variant="outline" className="rounded-l-none border-l-0">
                        Thay đổi
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="two-factor" className="font-medium">
                          Xác thực hai yếu tố
                        </Label>
                        <p className="text-sm text-muted-foreground">Tăng cường bảo mật cho tài khoản của bạn</p>
                      </div>
                      <Switch id="two-factor" className="data-[state=checked]:bg-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                    Thiết bị đã kết nối
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      { name: "iPhone 13", lastActive: "Hiện tại", isCurrentDevice: true },
                      { name: "MacBook Pro", lastActive: "2 giờ trước", isCurrentDevice: false },
                      { name: "iPad Air", lastActive: "3 ngày trước", isCurrentDevice: false },
                    ].map((device, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Smartphone className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{device.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {device.lastActive}
                              {device.isCurrentDevice && " • Thiết bị hiện tại"}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          Đăng xuất
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle className="text-red-500 flex items-center">
                    <LogOut className="h-5 w-5 mr-2 text-red-500" />
                    Đăng xuất & Quản lý tài khoản
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="border-red-200 text-red-500 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-2" />
                      Đăng xuất khỏi tất cả thiết bị
                    </Button>
                    <Button variant="outline" className="border-red-200 text-red-500 hover:bg-red-50">
                      Xóa tài khoản
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-green-600" />
                    Trợ giúp & Hỗ trợ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      { title: "Trung tâm trợ giúp", description: "Xem các câu hỏi thường gặp và hướng dẫn" },
                      { title: "Liên hệ hỗ trợ", description: "Gửi yêu cầu hỗ trợ đến đội ngũ của chúng tôi" },
                      { title: "Báo cáo lỗi", description: "Báo cáo lỗi hoặc vấn đề kỹ thuật" },
                      { title: "Đề xuất tính năng", description: "Gửi ý tưởng cho các tính năng mới" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-green-600">
                          Xem
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Về ứng dụng</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-green-700 mb-1">NutriPlan</h3>
                    <p className="text-sm text-muted-foreground mb-4">Phiên bản 1.0.0</p>
                    <div className="flex justify-center space-x-4 mb-4">
                      <Button variant="outline" size="sm" className="border-green-200">
                        Kiểm tra cập nhật
                      </Button>
                      <Button variant="outline" size="sm" className="border-green-200">
                        Ghi chú phát hành
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>© 2023 NutriPlan. Đã đăng ký bản quyền.</p>
                      <div className="flex justify-center space-x-3 mt-2">
                        <a href="#" className="text-green-600 hover:underline">
                          Điều khoản dịch vụ
                        </a>
                        <a href="#" className="text-green-600 hover:underline">
                          Chính sách bảo mật
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DesktopLayout>
  )
}
