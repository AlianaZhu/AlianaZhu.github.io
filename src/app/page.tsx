import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部背景区域 */}
      <div className="w-full relative bg-gray-50 py-24" 
           style={{
             backgroundImage: 'url(/background.jpg)',
             backgroundSize: '80%',
             backgroundPosition: 'center 20%',
             backgroundRepeat: 'no-repeat',
           }}>
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-8">
          {/* 圆形头像 */}
          <div className="w-48 h-48 mx-auto mb-8 overflow-hidden relative">
            <Image
              src="/profile.jpg"
              alt="朱嘉文"
              fill
              className="rounded-full object-cover"
              style={{ 
                objectPosition: 'center center',
              }}
              priority
            />
          </div>
          
          {/* 姓名和职位 */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">朱嘉文 Jiawen Zhu, Ph.D.</h1>
          <p className="text-2xl text-gray-800 mb-4">讲师 Lecturer</p>
        </div>
      </div>

      {/* 导航栏 */}
      <div className="relative -mt-8 mb-12">
        <nav className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-3xl px-8 py-4 flex justify-center space-x-8 text-gray-800">
            <Link href="/" className="hover:underline font-bold">主页 Home</Link>
            <Link href="/research" className="hover:underline">研究 Research</Link>
            <Link href="/teaching" className="hover:underline">教学 Teaching</Link>
            <Link href="/services" className="hover:underline">服务 Services</Link>
            <Link href="/contact" className="hover:underline">联系方式 Contact</Link>
          </div>
        </nav>
      </div>

      {/* 主页内容 */}
      <div className="max-w-4xl mx-auto px-8">
        {/* 这里放主页的具体内容 */}
      </div>

      {/* 页脚 */}
      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        © 2024 朱嘉文 Jiawen Zhu
      </footer>
    </div>
  )
} 