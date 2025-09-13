import Link from 'next/link'
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-8 max-w-4xl mx-auto">
        {/* Main About Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">📖 About Us</h1>
          <h2 className="text-2xl font-semibold text-emerald-600">Virtual Try-On Platform</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We&apos;re revolutionizing the fashion industry with cutting-edge AI technology that
            allows users to virtually try on clothes before making a purchase. Our platform combines
            advanced computer vision, machine learning, and user-friendly design to create an
            immersive shopping experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered</h3>
            <p className="text-gray-600">
              Advanced machine learning algorithms for accurate virtual fitting
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile-First</h3>
            <p className="text-gray-600">Optimized for mobile devices with responsive design</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
            <p className="text-gray-600">Lightning-fast performance with 99.9% uptime</p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">⚛️</div>
              <span className="text-sm font-medium text-gray-700">React 19</span>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🔷</div>
              <span className="text-sm font-medium text-gray-700">Next.js 15</span>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <span className="text-sm font-medium text-gray-700">Tailwind CSS</span>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">📘</div>
              <span className="text-sm font-medium text-gray-700">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Auto-deploy test page • Built with ❤️ by Frontend Agent (FA-001)
          </p>
          <p className="text-xs text-gray-400 mt-2">Testing deployment workflow • Version 0.1.0</p>
        </div>
      </div>
    </div>
  )
}
