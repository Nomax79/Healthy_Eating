import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, User, Home, PieChart, ShoppingBag, Calendar } from "lucide-react"

interface MobileLayoutProps {
  title: string
  children: React.ReactNode
  showBackButton?: boolean
}

export function MobileLayout({ title, children, showBackButton = true }: MobileLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto border-x border-gray-200">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && (
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <h1 className="font-semibold text-lg">{title}</h1>
        </div>

        <Link href="/profile">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-10 bg-white border-t border-gray-200 px-2 py-2">
        <div className="flex justify-around">
          <Link href="/">
            <Button variant="ghost" size="icon" className="flex flex-col h-14 w-16 rounded-lg">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Trang chủ</span>
            </Button>
          </Link>

          <Link href="/meal-plan">
            <Button variant="ghost" size="icon" className="flex flex-col h-14 w-16 rounded-lg">
              <Calendar className="h-5 w-5" />
              <span className="text-xs mt-1">Bữa ăn</span>
            </Button>
          </Link>

          <Link href="/nutrition">
            <Button variant="ghost" size="icon" className="flex flex-col h-14 w-16 rounded-lg">
              <PieChart className="h-5 w-5" />
              <span className="text-xs mt-1">Dinh dưỡng</span>
            </Button>
          </Link>

          <Link href="/shopping-list">
            <Button variant="ghost" size="icon" className="flex flex-col h-14 w-16 rounded-lg">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-xs mt-1">Mua sắm</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
