import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Home, PieChart, ShoppingBag, Calendar, Utensils, Target, Settings, LogOut } from "lucide-react"

interface DesktopLayoutProps {
  title: string
  children: React.ReactNode
}

export function DesktopLayout({ title, children }: DesktopLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-green-700">NutriPlan</h1>
          <p className="text-sm text-muted-foreground">Ăn uống lành mạnh</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <Home className="h-5 w-5 mr-3" />
              <span>Trang chủ</span>
            </Button>
          </Link>
          <Link href="/meal-plan">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <Utensils className="h-5 w-5 mr-3" />
              <span>Thực đơn hôm nay</span>
            </Button>
          </Link>
          <Link href="/weekly-planner">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <Calendar className="h-5 w-5 mr-3" />
              <span>Lên kế hoạch tuần</span>
            </Button>
          </Link>
          <Link href="/nutrition">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <PieChart className="h-5 w-5 mr-3" />
              <span>Dinh dưỡng</span>
            </Button>
          </Link>
          <Link href="/goals">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <Target className="h-5 w-5 mr-3" />
              <span>Mục tiêu</span>
            </Button>
          </Link>
          <Link href="/shopping-list">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <ShoppingBag className="h-5 w-5 mr-3" />
              <span>Mua sắm</span>
            </Button>
          </Link>
          <Link href="/suggestions">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <Utensils className="h-5 w-5 mr-3" />
              <span>Gợi ý thực phẩm</span>
            </Button>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-1">
          <Link href="/profile">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <User className="h-5 w-5 mr-3" />
              <span>Tài khoản</span>
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" className="w-full justify-start h-10 px-2">
              <Settings className="h-5 w-5 mr-3" />
              <span>Cài đặt</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start h-10 px-2 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Đăng xuất</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
