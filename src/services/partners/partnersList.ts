interface Partner {
  id: string
  title: string
  date: string
  image: string
}

export const PartnersService = {
  getPartnersData() {
    return [
      {
        id: '1',
        title: 'CI',
        date: '2024-10-01',
        image: '/images/partners/CI.jpg',
      },
      {
        id: '2',
        title: 'ICSA srl',
        date: '2024-09-28',
        image: '/images/partners/ICSA.jpg',
      },
      {
        id: '3',
        title: 'Kng',
        date: '2024-09-30',
        image: '/images/partners/Kng.jpg',
      },
      {
        id: '4',
        title: 'Levi',
        date: '2024-10-05',
        image: '/images/partners/Levi.jpg',
      },
      {
        id: '5',
        title: 'stac',
        date: '2024-10-09',
        image: '/images/partners/stac.jpg',
      },
    ]
  },

  getPartners() {
    return Promise.resolve(this.getPartnersData())
  },
  getPartnerById(id: string) {
    const partner = this.getPartnersData().find(p => p.id === id)
    return Promise.resolve(partner)
  },
}

export type { Partner }
