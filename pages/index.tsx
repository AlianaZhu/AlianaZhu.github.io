import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [lang, setLang] = useState('en')
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            {lang === 'en' ? 'Your Name' : '您的姓名'}
          </h1>
          
          <p className="text-lg text-gray-600">
            {lang === 'en' 
              ? 'Your brief introduction in English'
              : '您的中文简介'
            }
          </p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {lang === 'en' ? 'Education' : '教育经历'}
            </h2>
            {/* Add education history */}
            
            <h2 className="text-xl font-semibold text-gray-900">
              {lang === 'en' ? 'Work Experience' : '工作经历'}
            </h2>
            {/* Add work experience */}
          </div>
        </div>
      </div>
    </div>
  )
} 