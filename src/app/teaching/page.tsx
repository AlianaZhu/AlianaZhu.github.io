import Link from "next/link";
import Image from 'next/image'

export default function Teaching() {
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
            <Link href="/teaching" className="hover:underline font-bold">教学 Teaching</Link>
            <Link href="/services" className="hover:underline">服务 Services</Link>
            <Link href="/contact" className="hover:underline">联系方式 Contact</Link>
          </div>
        </nav>
      </div>

      {/* 教学内容 */}
      <div className="max-w-4xl mx-auto px-8">
        {/* 教学理念 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">教学理念 Teaching Philosophy</h2>
          <p className="text-lg leading-relaxed mb-4">
            我致力于将理论与实践相结合，培养学生的创新思维和实践能力。在教学过程中，我特别注重技术与教育的深度融合，
            通过项目式学习和案例教学，帮助学生建立系统的知识体系。
          </p>
        </div>

        {/* 当前课程 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">当前课程 Current Courses</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">信息化环境下的教学设计 Instructional Design in the Information Technology Environment</h3>
              <p className="text-gray-600">本科生专业必修课 | 2024春季学期</p>
              <p className="mt-2">课程简介：本课程为教育技术专业学生的必修课程，了解并掌握教学设计的各个步骤对于信息技术课程的实施至关重要。课程内容包括12个章节，主要概括为以下四个方面：1)认识教学系统、学习的结果；分析学习者；2)确定表现性目标、设计和组织合适的学习任务并编排任务内容；3)选择或开发教学材料及测量学生表现；4)设计教学环境，包括课堂和在线教学、实施教学评价。课程将主要采取项目学习、讲座讨论、案例研习等形式，通过丰富的线上与线下结合的学习活动方式，开展小组项目设计，就小组项目相关的问题开展讨论，通过线上线下结合协作完成小组项目任务。同时，学生需要对其他小组的项目进行提问并给予意见，最终完善并展示教学设计作品。</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">智能教学系统设计 Intelligent Tutoring System Design</h3>
              <p className="text-gray-600">本科生专业选修课 | 2025春季学期</p>
              <p className="mt-2">课程简介：本课程面向教育技术及相关专业学生，围绕智能教学系统的学习理论基础、系统架构、学习者建模、智能反馈、教学数据分析与应用评价等内容展开，帮助学生理解人工智能技术在教学支持、学习诊断与个性化学习中的应用路径。</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">现代教育技术研究前沿 Frontiers in Modern Educational Technology Research</h3>
              <p className="text-gray-600">研究生课程</p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2">信息检索与文献综述 Information Retrieval and Literature Review</h3>
              <p className="text-gray-600">研究生课程</p>
            </div>
          </div>
        </div>

        {/* 过往课程 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">过往课程 Past Courses</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Introduction of Educational Technology</h3>
              <p className="text-gray-600">2020.08-2021.06 University of Florida 本科生专业必修课</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Integrating Technology in the Elementary Curriculum</h3>
              <p className="text-gray-600">2019.08-2020.06 University of Florida 本科生专业必修课</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Designing Technology-Rich Curricula</h3>
              <p className="text-gray-600">2019.08-2020.06 University of Florida 本科生专业选修课</p>
            </div>
          </div>
        </div>

        {/* 教学成果 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">教学成果 Teaching Achievements</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>2024年华东师范大学第三十五期新入职教师教学比赛三等奖</li>
            <li>第七届全国高校混合式教学设计创新大赛二等奖，2025年。</li>
            <li>第五届华东师范大学本科教学课程设计比赛一等奖，2025年。</li>
          </ul>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        © 2024 朱嘉文 Jiawen Zhu
      </footer>
    </div>
  )
} 
