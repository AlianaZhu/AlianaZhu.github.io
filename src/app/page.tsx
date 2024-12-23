import Image from 'next/image'
import Link from 'next/link'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部背景区域 */}
      <div className="w-full relative bg-gray-50 py-16" 
           style={{
             backgroundImage: `url(${basePath}/background.jpg)`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             height: '100vh',
           }}>
        {/* 半透明遮罩 确保文字清晰可见 */}
        <div className="absolute inset-0 bg-white/60"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-8 pt-20">
          {/* 圆形头像 */}
          <div className="w-48 h-48 mx-auto mb-8">
            <Image 
              src={`${basePath}/profile.jpg`}
              alt="朱嘉文" 
              width={192}
              height={192}
              className="rounded-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          
          {/* 姓名和职位 */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">朱嘉文 Jiawen Zhu, Ph.D.</h1>
          <p className="text-2xl text-gray-850 mb-8">讲师 Lecturer</p>
          <p className="text-xl text-gray-850 mb-4">华东师范大学 教育学部</p>
          <p className="text-xl text-gray-850 mb-8">Faculty of Education, East China Normal University</p>

          {/* 个人简介 */}
          <div className="max-w-2xl mx-auto text-lg text-gray-700 space-y-4">
            <p className="mb-4">
              我的研究兴趣包括：教育技术、在线学习、学习分析、游戏化学习、特殊教育技术等。
              目前主要关注技术支持的阅读障碍干预、在线社群学习等方向。
            </p>
            <p>
              My research interests include: Educational Technology, Online Learning, 
              Learning Analytics, Gamification in Education, and Assistive Technology. 
              Currently focusing on technology-supported dyslexia intervention and 
              online community learning.
            </p>
          </div>
        </div>
      </div>

      {/* 导航栏 */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="max-w-4xl mx-auto">
          <div className="px-8 py-4 flex justify-center space-x-8 text-gray-800">
            <Link href={`${basePath}/`} className="hover:underline font-bold">主页 Home</Link>
            <Link href={`${basePath}/research`} className="hover:underline">研究 Research</Link>
            <Link href={`${basePath}/teaching`} className="hover:underline">教学 Teaching</Link>
            <Link href={`${basePath}/services`} className="hover:underline">服务 Services</Link>
            <Link href={`${basePath}/contact`} className="hover:underline">联系方式 Contact</Link>
          </div>
        </nav>
      </div>

      {/* 页脚 */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © 2024 朱嘉文 Jiawen Zhu
      </footer>
    </div>
  )
} 