import Link from 'next/link'
import Image from 'next/image'

// Mock data for product details
const productData = {
  1: {
    id: 1,
    name: 'Classic Blue T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    category: 'Tops',
    description:
      'A comfortable and stylish blue t-shirt made from 100% cotton. Perfect for casual wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'White', 'Black', 'Red'],
    rating: 4.8,
    reviews: 128,
  },
  2: {
    id: 2,
    name: 'Denim Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop',
    category: 'Bottoms',
    description: 'Classic denim jeans with a perfect fit. Made from high-quality denim fabric.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Light Blue'],
    rating: 4.6,
    reviews: 89,
  },
  3: {
    id: 3,
    name: 'Summer Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop',
    category: 'Dresses',
    description: 'Elegant summer dress perfect for warm weather. Lightweight and comfortable.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Solid Blue', 'White'],
    rating: 4.9,
    reviews: 156,
  },
  4: {
    id: 4,
    name: 'Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
    category: 'Tops',
    description: 'Cozy hoodie with a modern fit. Perfect for layering or wearing alone.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'Green'],
    rating: 4.7,
    reviews: 203,
  },
}

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productData[params.id as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

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
              <Link href="/try-on" className="text-gray-500 hover:text-blue-600">
                Try-On
              </Link>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-gray-500">
                  Products
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{product.category}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div>
              <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            </div>

            <div>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                href={`/try-on?product=${product.id}`}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Try On Virtually
              </Link>
              <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
