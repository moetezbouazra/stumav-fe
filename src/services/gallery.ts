export const GalleryService = {
  getGalleryData() {
    return [
      {
        id: '89dde6f5-ca6c-428e-a338-82ce118c7b8f',
        image: 'images/gallery/villa2.webp',
      },
      {
        id: 'e53c7dba-856b-486a-b90c-d383e211bdca',
        image: 'images/gallery/villa1.webp',
      },
    ]
  },

  getGallery() {
    return Promise.resolve(this.getGalleryData())
  },
}
