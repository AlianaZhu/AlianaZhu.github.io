import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [lang, setLang] = useState('en')
  const router = useRouter()
  
  const navigation = [
    { name: { en: 'Home', zh: '主页' }, href: '/' },
    { name: { en: 'Publications', zh: '发表论文' }, href: '/publications' },
    { name: { en: 'Teaching', zh: '教学工作' }, href: '/teaching' },
    { name: { en: 'Services', zh: '社会服务' }, href: '/services' },
  ]

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium
                  ${router.pathname === item.href 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {item.name[lang as keyof typeof item.name]}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-900"
          >
            {lang === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 