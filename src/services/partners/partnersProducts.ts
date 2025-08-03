interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  partnerId: string
  rating?: number
  inventoryStatus?: 'En stock' | 'Stock faible' | 'Repture de stock'
}

export const PartnerProductsService = {
  getProductsData(): Product[] {
    return [
      {
        id: '1',
        name: 'Premium Widget Pro',
        price: 49.99,
        description: 'High-quality widget with advanced features for professional use',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '1',
        rating: 4.5,
        inventoryStatus: 'En stock',
      },
      {
        id: '2',
        name: 'Deluxe Gadget X',
        price: 89.99,
        description: 'Feature-packed gadget with premium materials and extended warranty',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '1',
        rating: 4.8,
        inventoryStatus: 'En stock',
      },
      {
        id: '3',
        name: 'Ultimate Bundle Kit',
        price: 149.99,
        description: 'Complete set including all accessories and tools for maximum productivity',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '1',
        rating: 5,
        inventoryStatus: 'Stock faible',
      },

      {
        id: '4',
        name: 'Essential Tool Set',
        price: 19.99,
        description: 'Basic tools for everyday tasks and small repairs',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '2',
        rating: 3.5,
        inventoryStatus: 'En stock',
      },
      {
        id: '5',
        name: 'Professional Workshop Kit',
        price: 199.99,
        description: 'Comprehensive collection for professional craftsmen and technicians',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '2',
        rating: 4.7,
        inventoryStatus: 'En stock',
      },

      {
        id: '6',
        name: 'Advanced Tech Bundle',
        price: 299.99,
        description: 'Cutting-edge technology package with smart features',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '3',
        rating: 4.9,
        inventoryStatus: 'En stock',
      },
      {
        id: '7',
        name: 'Starter Tech Pack',
        price: 79.99,
        description: 'Beginner-friendly technology set with easy-to-use components',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '3',
        rating: 4.2,
        inventoryStatus: 'En stock',
      },

      {
        id: '8',
        name: 'Home Essentials Pack',
        price: 39.99,
        description: 'Everything you need for basic home maintenance',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '4',
        rating: 4.0,
        inventoryStatus: 'En stock',
      },
      {
        id: '9',
        name: 'Luxury Home Collection',
        price: 349.99,
        description: 'Premium home products with elegant design and superior quality',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '4',
        rating: 4.8,
        inventoryStatus: 'Stock faible',
      },

      {
        id: '10',
        name: 'Outdoor Adventure Kit',
        price: 129.99,
        description: 'Essential gear for camping and outdoor activities',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '5',
        rating: 4.6,
        inventoryStatus: 'En stock',
      },
      {
        id: '11',
        name: 'Compact Travel Set',
        price: 59.99,
        description: 'Lightweight and portable travel essentials',
        image: '/images/products/product-image-placeholder.svg',
        partnerId: '5',
        rating: 4.3,
        inventoryStatus: 'En stock',
      },
    ]
  },

  async getPartnerProducts(partnerId: string): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return this.getProductsData().filter(product => product.partnerId === partnerId)
  },
}

export type { Product }
