export const ProductService = {
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'https://www.cna.com.tn/files/panda_motors.png',
        description: 'Product Description',
        image: 'https://www.cna.com.tn/files/palma-0.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'https://www.cna.com.tn/files/panda_motors.png',
        description: 'Product Description',
        image: 'https://www.cna.com.tn/files/slide03.png',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'https://www.cna.com.tn/files/panda_motors.png',
        description: 'Product Description',
        image: 'https://www.cna.com.tn/files/panda_motors.png',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ]
  },

  getProducts() {
    return Promise.resolve(this.getProductsData())
  },
}
