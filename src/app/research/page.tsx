export default function Research() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部背景区域 */}
      <div className="w-full relative bg-gray-50 py-16" 
           style={{
             backgroundImage: 'url(/background.jpg)',
             backgroundSize: '80%',
             backgroundPosition: 'center 20%',
             backgroundRepeat: 'no-repeat',
           }}>
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-8">
          {/* 圆形头像 */}
          <div className="w-48 h-48 mx-auto mb-8">
            <img 
              src="/profile.jpg" 
              alt="朱嘉文" 
              className="rounded-full w-full h-full object-cover"
              style={{ objectPosition: 'center 40%' }}
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
            <a href="/" className="hover:underline">主页 Home</a>
            <a href="/research" className="hover:underline font-bold">研究 Research</a>
            <a href="#" className="hover:underline">授课 Teaching</a>
            <a href="#" className="hover:underline">服务 Services</a>
          </div>
        </nav>
      </div>

      {/* 研究内容 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">智能教育中的学习分析与干预研究</h2>
            <h3 className="text-xl font-semibold mb-3">项目基金 Fundings</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>国家自然科学基金青年项目 (2023-2025)</li>
              <li>教育部人文社会科学研究青年基金项目 (2024-2026)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zhu, J., et al. (2023). "Learning Analytics in Smart Education." Journal of Educational Technology.</li>
              <li>Zhu, J., et al. (2024). "Intervention Strategies in Online Learning." Educational Research Review.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">人工智能辅助教学系统开发与应用</h2>
            <h3 className="text-xl font-semibold mb-3">项目基金 Fundings</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>上海市教育科学研究项目 (2023-2024)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zhu, J., et al. (2023). "AI-Enhanced Teaching Systems." Computers & Education.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">教育大数据分析与决策支持</h2>
            <h3 className="text-xl font-semibold mb-3">项目基金 Fundings</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>华东师范大学青年教师科研启动项目 (2023-2024)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zhu, J., et al. (2024). "Educational Data Mining for Decision Support." Journal of Learning Analytics.</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">在线学习环境中的学习者行为研究</h2>
            <h3 className="text-xl font-semibold mb-3">项目基金 Fundings</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>校级教学改革项目 (2023-2024)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zhu, J., et al. (2023). "Learner Behavior Analysis in Online Environments." Internet and Higher Education.</li>
            </ul>
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