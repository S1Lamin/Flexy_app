export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        {/* Main Hello Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900 animate-pulse">👋 Hello!</h1>
          <h2 className="text-3xl font-semibold text-indigo-600">
            Welcome to Virtual Try-On Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your Next.js application is successfully configured for Plesk standalone deployment!
            Ready to revolutionize the fashion industry with AI-powered virtual try-on technology.
          </p>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800">Deployment Ready</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Standalone mode configured for Plesk</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800">Next.js 15.5.2</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Latest version with App Router</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800">Production Optimized</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Security headers & performance tuned</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Quick Actions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
              🚀 Start Development
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
              📦 Deploy to Plesk
            </button>
            <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium">
              📚 View Documentation
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Built with ❤️ by Frontend Agent (FA-001) • Ready for Virtual Try-On Platform
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Next.js 15.5.2 • TypeScript • Tailwind CSS • Plesk Standalone Mode
          </p>
        </div>
      </div>
    </div>
  )
}
