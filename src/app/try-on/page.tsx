'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Mock product data
const productData = {
  1: {
    id: 1,
    name: 'Classic Blue T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Tops',
  },
  2: {
    id: 2,
    name: 'Denim Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    category: 'Bottoms',
  },
  3: {
    id: 3,
    name: 'Summer Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
    category: 'Dresses',
  },
  4: {
    id: 4,
    name: 'Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    category: 'Tops',
  },
}

export default function TryOnPage() {
  const [selectedProduct, setSelectedProduct] = useState(1)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [resultImage, setResultImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTryOn = async () => {
    if (!uploadedImage) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setResultImage(
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
      )
      setIsProcessing(false)
    }, 3000)
  }

  const currentProduct = productData[selectedProduct as keyof typeof productData]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Virtual Try-On</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-blue-600">
                Home
              </Link>
              <Link href="/products" className="text-gray-500 hover:text-blue-600">
                Products
              </Link>
              <Link href="/try-on" className="text-gray-900 hover:text-blue-600">
                Try-On
              </Link>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Image Upload and Display */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Your Photo</h2>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {uploadedImage ? (
                  <div className="space-y-4">
                    <div className="relative w-64 h-80 mx-auto">
                      <Image
                        src={uploadedImage}
                        alt="Uploaded photo"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Remove Photo
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-4">📸</div>
                    <p className="text-gray-600 mb-4">Upload a clear photo of yourself</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label
                      htmlFor="photo-upload"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                    >
                      Choose Photo
                    </label>
                  </div>
                )}
              </div>

              {/* Try On Button */}
              {uploadedImage && (
                <button
                  onClick={handleTryOn}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isProcessing ? 'Processing...' : 'Try On Now'}
                </button>
              )}
            </div>

            {/* Result Display */}
            {resultImage && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Try-On Result</h3>
                <div className="relative w-full h-96">
                  <Image
                    src={resultImage}
                    alt="Try-on result"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex space-x-4 mt-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Save Result
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Product Selection */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Clothing</h2>

              {/* Product Selection */}
              <div className="grid grid-cols-2 gap-4">
                {Object.values(productData).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      selectedProduct === product.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="relative w-full h-32 mb-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <h3 className="font-semibold text-sm">{product.name}</h3>
                    <p className="text-blue-600 font-bold">${product.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Product Details */}
            {currentProduct && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Item</h3>
                <div className="flex space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{currentProduct.name}</h4>
                    <p className="text-gray-600 text-sm">{currentProduct.category}</p>
                    <p className="text-blue-600 font-bold">${currentProduct.price}</p>
                  </div>
                </div>
                <Link
                  href={`/products/${currentProduct.id}`}
                  className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
                >
                  View Details →
                </Link>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How to get the best results:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use good lighting</li>
                <li>• Stand straight with arms slightly away from body</li>
                <li>• Wear form-fitting clothes</li>
                <li>• Look directly at the camera</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
