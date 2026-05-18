import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import WebPet from '@/components/web-pet'

export const metadata: Metadata = {
  title: '刘松昊 - AI产品经理',
  description: '刘松昊的个人作品集网站，AI产品经理，专注于AI Agent工程化落地与ToB自动化解决方案。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}<Toaster /><WebPet /></body>
    </html>
  )
}
