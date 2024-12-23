import Link from 'next/link';
import { FaLinkedin, FaGoogle } from 'react-icons/fa';
import { SiResearchgate, SiOrcid } from 'react-icons/si';
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部背景区域 */}
      <div className="w-full relative bg-gray-50 py-16" 
           style={{
             backgroundImage: 'url(/background.jpg)',
             backgroundSize: '100%',
             backgroundPosition: 'center 30%',
             backgroundRepeat: 'no-repeat',
           }}>
        {/* 半透明遮罩 确保文字清晰可见 */}
        <div className="absolute inset-0 bg-white/60"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-8">
          {/* 圆形头像 */}
          <div className="w-48 h-48 mx-auto mb-8">
            <Image 
              src="/profile.jpg" 
              alt="朱嘉文" 
              className="rounded-full w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              width={192}
              height={192}
            />
          </div>
          
          {/* 姓名和职位 */}
          <h1 className="text-3xl font-bold mb-4 text-gray-900">朱嘉文 Jiawen Zhu, Ph.D.</h1>
          <p className="text-2xl text-gray-850 mb-4">讲师 Lecturer</p>
        </div>
      </div>

      {/* 导航栏 */}
      <div className="relative -mt-8 mb-12">
        <nav className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-3xl px-8 py-4 flex justify-center space-x-8 text-gray-800">
            <Link href="/" className="hover:underline">主页 Home</Link>
            <Link href="/research" className="hover:underline">研究 Research</Link>
            <Link href="/teaching" className="hover:underline">教学 Teaching</Link>
            <Link href="/services" className="hover:underline">服务 Services</Link>
            <Link href="/contact" className="hover:underline font-bold">联系方式 Contact</Link>
          </div>
        </nav>
      </div>

      {/* 联系方式内容 */}
      <div className="max-w-4xl mx-auto px-8">
        {/* 地址信息 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">办公地址 Office Address</h2>
          <div className="space-y-4 text-lg">
            <p className="mb-2">华东师范大学教育学部教育信息技术学系</p>
            <p className="mb-4">上海市普陀区中山北路3663号 邮编：200062</p>
            <p className="mb-2">Faculty of Education, East China Normal University</p>
            <p>3663 North Zhongshan Road, Shanghai 200062, China</p>
          </div>
        </div>

        {/* 邮箱 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">邮箱 Email</h2>
          <div className="text-lg">
            <a href="mailto:your.email@ecnu.edu.cn" 
               className="text-blue-600 hover:underline">
              zhujiawen@ed.ecnu.edu.cn
            </a>
          </div>
        </div>

        {/* 社交媒体链接 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">社交媒体 Social Media</h2>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/jiawen-zhu-25263075/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.researchgate.net/profile/Jiawen-Zhu-2?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6Imdsb2JhbEhlYWRlciJ9fQ" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-green-600 transition-colors">
              <SiResearchgate size={32} />
            </a>
            <a href="https://scholar.google.com/citations?user=ID9TTLoAAAAJ&hl=en" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-500 transition-colors">
              <FaGoogle size={32} />
            </a>
            <a href="https://orcid.org/0000-0002-9260-6151" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-green-700 transition-colors">
              <SiOrcid size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        © 2024 朱嘉文 Jiawen Zhu
      </footer>
    </div>
  )
} 