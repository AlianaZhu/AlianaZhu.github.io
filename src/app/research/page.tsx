import Link from 'next/link';
import Image from 'next/image';

export default function Research() {
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
          <h1 className="text-3xl font-bold mb-4 text-gray-900">朱嘉文 Jiawen Zhu, Ph.D.</h1>
          <p className="text-2xl text-gray-850 mb-4">讲师 Lecturer</p>
        </div>
      </div>

      {/* 导航栏 */}
      <div className="relative -mt-8 mb-12">
        <nav className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-3xl px-8 py-4 flex justify-center space-x-8 text-gray-800">
            <Link href="/" className="hover:underline">主页 Home</Link>
            <Link href="/research" className="hover:underline font-bold">研究 Research</Link>
            <Link href="/teaching" className="hover:underline">教学 Teaching</Link>
            <Link href="/services" className="hover:underline">服务 Services</Link>
            <Link href="/contact" className="hover:underline">联系方式 Contact</Link>
          </div>
        </nav>
      </div>

      {/* 研究内容 */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {/* 技术与阅读障碍研究 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">技术与阅读障碍研究</h2>
            <h3 className="text-xl font-semibold mb-3">项目基金 Fundings</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>全国教育科学国家青年课题，汉语阅读障碍儿童的智能诊断与个性化干预研究（CQA240309），在研</li>
              <li>上海市哲社规划教育学专项课题，基于研究技术的汉语阅读障碍儿童学习行为分析与智能诊断研究（B2024005），在研</li>
              <li>2022年度华东师范大学人文社会科学青年预研究项目（2022ECNU-YYJ009），结项</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dawson, K., Zhu, J., Rizhaupt, A.D., Antonenko, P.P., Saunders, K., Wang, J. & Lombardino, L. (2021). The influence of the multimedia and modality principles on the learning outcomes, satisfaction, and mental effort of college students with and without dyslexia. Annals of Dyslexia. 1-23. [SSCI-Q2, IF=2.28]</li>
              <li>Dawson, K., Antonenko, P., Lane, H., & Zhu, J. (2019). Assistive Technologies to Support Students with Dyslexia. TEACHING Exceptional Children, 51(3), 226-239. [ESCI, IF=1.13]</li>
            </ul>
          </div>

          {/* 在线学习和社群学习研究 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">在线学习和社群学习研究</h2>
            <h3 className="text-xl font-semibold mb-3">项目基金 Fundings</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>2023年度上海市晨光计划项目，在研</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Qin, C., He, H., Zhu, J., Hu, J., & Yu, J. (2024). Concerning rural undergraduates&apos; knowledge absorption in large-scale online learning: inspired by three digital divides and beyond. Asia Pacific Journal of Education. [SSCI-Q2, IF=2.20]</li>
              <li>Zhu, J., He, H., Zhao, Y., & Cheng, M (2024). Does participating in online communities enhance the effectiveness and experience of micro-learning? Evidence from a randomized control trial. Humanities and Social Sciences Communications, 11(1), 1-10. [SSCI-Q1, IF=3.70]</li>
              <li>Zhu, J., & Dawson, K. (2023). Differences in sense of community and participation between lurkers and posters in informal online education-related communities. Behaviour & Information Technology, 1-14. [SSCI-Q2, IF=3.32]</li>
              <li>Zhu, J., & Dawson, K. (2023). Lurkers versus posters: Perceptions of learning in informal social media-based communities. British Journal of Educational Technology. [SSCI-Q1, IF=5.27]</li>
              <li>Kim, D., Jo, I. H., Song, D., Zheng, H., Li, J., Zhu, J., ... & Xu, Z. (2021). Self-regulated learning strategies and students&apos; video engagement trajectory in a video-based asynchronous online course: a Bayesian latent growth modeling approach. Asia Pacific - Education Review, 1-13. [SSCI-Q3, IF=2.25]</li>
            </ul>
          </div>

          {/* 游戏化学习研究 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">游戏化学习研究</h2>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ritzhaupt, A. D., Huang, R., Sommer, M., Zhu, J., Stephen, A., Valle, N., ... & Li, J. (2021). A meta-analysis on the influence of gamification in formal educational settings on affective and behavioral outcomes. Educational Technology Research and Development (ETR&D), 69(5), 2493-2522. [SSCI-Q1, IF=5.58]</li>
              <li>Huang, R., Ritzhaupt, A. D., Sommer, M., Zhu, J., Stephen, A., Valle, N., Hampton, J., & Li, J. (2020). The impact of gamification in educational settings on student learning outcomes: A meta-analysis. Educational Technology Research and Development (ETR&D), 1-27. [SSCI-Q1, IF=5.58]</li>
              <li>Zhu, J., Li, X., Zhang, Y., Zainuddin, Z., Lee, S.Y. & Chu, K.W. (2019 October) Can gamification bring long-term effects for elementary students&apos; learning? In Proceeding of ASSIS&T AP 2019 regional conference. Phnom Penh, Cambodia.</li>
            </ul>
          </div>

          {/* 教育技术与多媒体学习研究 */}
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">教育技术与多媒体学习研究</h2>
            <h3 className="text-xl font-semibold mb-3">相关论文 Articles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zhu, J., Kumar, S. (2023). An Analysis of Online and Hybrid EdD Programs in Educational Technology. TechTrends. [ESCI, IF=2.30]</li>
              <li>Dai, J., Gu, X., & Zhu, J. (2022). Personalized Recommendation in the Adaptive Learning System: The Role of Adaptive Testing Technology. Journal of Educational Computing Research. [SSCI-Q1, IF=4.35]</li>
              <li>Zhu, J., Dawson, K., Rizhaupt, A.D., & Antonenko, P.P. (2020). Investigating how multimedia and modality design principles influence student learning performance, satisfaction, mental effort, and visual attention. Journal of Educational Multimedia and Hypermedia, 29(3), 265-284. [IF=0.50]</li>
              <li>Zhu, J. (2018, October). Students&apos; Perceptions on the Use of Mobile Applications in English Language Learning. In Proceedings of E-Learn: World Conference on E-Learning.</li>
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