import Link from 'next/link';
import Image from 'next/image'

export default function Services() {
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
              width={192}
              height={192}
              className="rounded-full object-cover"
              style={{ objectPosition: 'center 20%' }}
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
            <Link href="/services" className="hover:underline font-bold">服务 Services</Link>
            <Link href="/contact" className="hover:underline">联系方式 Contact</Link>
          </div>
        </nav>
      </div>

      {/* 服务内容 */}
      <div className="max-w-4xl mx-auto px-8">
        {/* 编辑工作 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">编辑工作 Editorial Work</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">期刊编辑</h3>
              <ul className="mt-3 space-y-2">
                <li>• Assistant Editor, International Journal of Smart Technology and Learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 期刊审稿 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">期刊审稿 Journal Review</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">SSCI期刊审稿人</h3>
              <ul className="mt-3 space-y-2">
                <li>• International Review of Research in Open and Distributed Learning (IRRODL)</li>
                <li>• Journal of Research on Technology in Education</li>
                <li>• Humanities and Social Sciences Communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 会议审稿 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">会议审稿 Conference Review</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">国际会议审稿人</h3>
              <ul className="mt-3 space-y-2">
                <li>• Association for Educational Communication & Technology (AECT)</li>
                <li>• American Educational Research Association (AERA)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 其他学术服务 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">其他学术服务 Other Academic Services</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <ul className="mt-3 space-y-2">
                <li>• 中国高等教育学会学习科学研究分会博士生论坛委员会委员</li>
              </ul>
            </div>
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