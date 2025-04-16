"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DesktopLayout } from "@/components/layouts/desktop-layout"
import {
  User,
  Settings,
  Edit,
  Weight,
  Target,
  ArrowUpRight,
  Smartphone,
  Plus,
  Calendar,
  Medal,
  Clock,
} from "lucide-react"

export function ProfileScreen() {
  // Thêm style tùy chỉnh cho thanh tiến trình
  const progressStyle = {
    "--progress-foreground": "hsl(142.1, 76.2%, 36.3%)",
  } as React.CSSProperties

  const [userData] = useState({
    name: "An Nguyễn",
    age: 32,
    weight: 75,
    height: 178,
    goal: "Giảm cân",
    targetWeight: 70,
    startWeight: 80,
    progress: 50,
    streak: 14,
    joinDate: "Tháng 3, 2023",
  })

  return (
    <DesktopLayout title="Tài khoản">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700">Tài khoản của bạn</h2>
            <p className="text-lg text-muted-foreground">Quản lý thông tin cá nhân và tiến độ</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-green-200">
              <Settings className="h-4 w-4 mr-2" />
              Cài đặt tài khoản
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Edit className="h-4 w-4 mr-2" />
              Chỉnh sửa hồ sơ
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - User Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <User className="h-16 w-16 text-green-600" />
                  </div>

                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  <p className="text-muted-foreground">Thành viên từ {userData.joinDate}</p>

                  <div className="flex items-center mt-2">
                    <div className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {userData.streak} ngày liên tiếp 🔥
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 w-full mt-6">
                    <div className="bg-gray-50 p-3 rounded-md text-center">
                      <div className="text-sm text-muted-foreground">Tuổi</div>
                      <div className="font-medium">{userData.age}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md text-center">
                      <div className="text-sm text-muted-foreground">Chiều cao</div>
                      <div className="font-medium">{userData.height} cm</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md text-center">
                      <div className="text-sm text-muted-foreground">Cân nặng</div>
                      <div className="font-medium">{userData.weight} kg</div>
                    </div>
                  </div>

                  <div className="w-full mt-6">
                    <Button variant="outline" className="w-full border-green-200">
                      <Edit className="h-4 w-4 mr-2" />
                      Cập nhật thông tin
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dịch vụ đã kết nối</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ứng dụng Sức khỏe</h3>
                      <p className="text-xs text-muted-foreground">Đồng bộ bước chân & hoạt động</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" className="w-full border-green-200">
                  <Plus className="h-4 w-4 mr-2" />
                  Kết nối thêm dịch vụ
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Progress */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Weight className="h-5 w-5 mr-2 text-green-600" />
                  Tiến độ giảm cân
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-2">
                  <span>Hiện tại: {userData.weight} kg</span>
                  <span>Mục tiêu: {userData.targetWeight} kg</span>
                </div>
                <Progress value={userData.progress} className="h-2 bg-gray-100" style={progressStyle} />

                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Bắt đầu: {userData.startWeight} kg</span>
                  <span>{userData.progress}% hoàn thành</span>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-medium">Lịch sử cân nặng</h3>
                  <div className="space-y-2">
                    {[
                      { date: "15/04/2023", weight: 75.0 },
                      { date: "08/04/2023", weight: 75.5 },
                      { date: "01/04/2023", weight: 76.2 },
                      { date: "25/03/2023", weight: 77.0 },
                      { date: "18/03/2023", weight: 78.3 },
                    ].map((entry, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{entry.date}</span>
                        <span className="font-medium">{entry.weight} kg</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-2 border-green-200">
                    <Edit className="h-4 w-4 mr-2" />
                    Cập nhật cân nặng
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  Hoạt động gần đây
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Utensils className="h-4 w-4 text-green-600" />,
                      text: "Đã hoàn thành thực đơn hôm nay",
                      time: "Hôm nay, 13:45",
                    },
                    {
                      icon: <Target className="h-4 w-4 text-green-600" />,
                      text: "Đã cập nhật mục tiêu dinh dưỡng",
                      time: "Hôm nay, 10:20",
                    },
                    {
                      icon: <Weight className="h-4 w-4 text-green-600" />,
                      text: "Đã cập nhật cân nặng: 75kg",
                      time: "Hôm nay, 08:15",
                    },
                    {
                      icon: <ShoppingBag className="h-4 w-4 text-green-600" />,
                      text: "Đã tạo danh sách mua sắm mới",
                      time: "Hôm qua, 17:30",
                    },
                    {
                      icon: <Calendar className="h-4 w-4 text-green-600" />,
                      text: "Đã lên kế hoạch cho tuần tới",
                      time: "Hôm qua, 14:10",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3">
                        {activity.icon}
                      </div>
                      <div>
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Goals and Achievements */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  Mục tiêu của bạn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-xs text-muted-foreground">Mục tiêu chính</div>
                    <div className="font-medium">{userData.goal}</div>
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

                <Link href="/goals">
                  <Button variant="outline" size="sm" className="w-full border-green-200">
                    <Edit className="h-4 w-4 mr-2" />
                    Chỉnh sửa mục tiêu
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Medal className="h-5 w-5 mr-2 text-green-600" />
                  Thành tựu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center bg-green-50 p-4 rounded-md">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <Medal className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-center">Người mới xuất sắc</h3>
                    <p className="text-xs text-center text-muted-foreground mt-1">Hoàn thành 7 ngày liên tiếp</p>
                  </div>

                  <div className="flex flex-col items-center bg-green-50 p-4 rounded-md">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-center">Đạt mục tiêu</h3>
                    <p className="text-xs text-center text-muted-foreground mt-1">Đạt mục tiêu calories 5 ngày</p>
                  </div>

                  <div className="flex flex-col items-center bg-gray-100 p-4 rounded-md opacity-60">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                      <Weight className="h-6 w-6 text-gray-500" />
                    </div>
                    <h3 className="font-medium text-center">Giảm 5kg</h3>
                    <p className="text-xs text-center text-muted-foreground mt-1">Đang tiến hành...</p>
                  </div>

                  <div className="flex flex-col items-center bg-gray-100 p-4 rounded-md opacity-60">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-gray-500" />
                    </div>
                    <h3 className="font-medium text-center">30 ngày liên tiếp</h3>
                    <p className="text-xs text-center text-muted-foreground mt-1">Đang tiến hành...</p>
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

function Utensils(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}

function ShoppingBag(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
