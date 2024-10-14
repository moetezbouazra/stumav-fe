export const ProductService = {
  getProductsData() {
    return [
      {
        id: 'e19d07f0-ddfe-4c89-a60e-7c820e50861c',
        code: 'f230fh0g3',
        name: 'Panda Motors',
        description: 'High-quality motor oil for your vehicle.',
        image: 'public/images/products/product1.webp',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '79370230-12c8-4767-83f4-4a0e16c0acc7',
        code: 'nvklal433',
        name: 'Panda Motors',
        description: 'Reliable motor battery.',
        image: 'public/images/products/product2.webp',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '842e06d4-8961-4e3c-853d-56198fb0b3c9',
        code: '244wgerg2',
        name: 'Panda Motors',
        description: 'Quality engine parts and accessories.',
        image: 'public/images/products/product3.webp',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '261d1b2b-20f9-4a1b-99d9-296dd62c4542',
        code: 'h456wer53',
        name: 'Car Air Freshener',
        description: 'Keeps your car smelling fresh.',
        image: 'public/images/products/product4.png',
        price: 10,
        category: 'Accessories',
        quantity: 100,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '7be2c1bf-4fc7-4718-8389-0c1781fb3764',
        code: 'h456wer53',
        name: 'Car Air Freshener',
        description: 'Keeps your car smelling fresh.',
        image: 'public/images/products/product5.png',
        price: 10,
        category: 'Accessories',
        quantity: 100,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '325487d0-5110-4b7c-a5c1-ec8df6e5c20c',
        code: 'h456wer53',
        name: 'Car Air Freshener',
        description: 'Keeps your car smelling fresh.',
        image: 'public/images/products/product6.jpg',
        price: 10,
        category: 'Accessories',
        quantity: 100,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: 'a84172e8-5ec1-48e5-88ac-dd5dbc0f0b3b',
        code: 'h456wer53',
        name: 'Car Air Freshener',
        description: 'Keeps your car smelling fresh.',
        image: 'public/images/products/product7.png',
        price: 10,
        category: 'Accessories',
        quantity: 100,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
    ]
  },

  getProducts() {
    return Promise.resolve(this.getProductsData())
  },
}
