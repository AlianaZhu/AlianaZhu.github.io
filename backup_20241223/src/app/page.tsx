export default function Home() {
  return (
    <div>
      <h1>测试页面</h1>
      <p>如果你看到这段文字，说明修改成功了！</p>
      {/* 导航栏 */}
      <div className="relative -mt-8 mb-12">
        <nav className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-3xl px-8 py-4 flex justify-center space-x-8 text-gray-800">
            <a href="/" className="hover:underline font-bold">主页 Home</a>
            <a href="/research" className="hover:underline">研究 Research</a>
            <a href="#" className="hover:underline">授课 Teaching</a>
            <a href="#" className="hover:underline">服务 Services</a>
          </div>
        </nav>
      </div>
    </div>
  )
}
