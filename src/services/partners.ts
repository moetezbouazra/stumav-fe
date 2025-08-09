export const PartnersService = {
  getPartnersData() {
    return [
      {
        id: '1',
        title: 'Breaking Partners: Market Hits Record Highs',
        date: '2024-10-01',
        image: '/images/partners/CI.jpg',
      },
      {
        id: '2',
        title: 'Local Sports Team Wins Championship',
        date: '2024-09-28',
        image: '/images/partners/ICSA.jpg',
      },
      {
        id: '3',
        title: 'New Tech Gadgets Announced at Conference',
        date: '2024-09-30',
        image: '/images/partners/Kng.jpg',
      },
      {
        id: '4',
        title: 'Community Rallies to Support Local Charity',
        date: '2024-10-05',
        image: '/images/partners/Levi.jpg',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: '/images/partners/Motivec C.jpg',
      },
    ]
  },

  getPartners() {
    return Promise.resolve(this.getPartnersData())
  },
}
