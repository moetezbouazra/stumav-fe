export const PartnersService = {
  getPartnersData() {
    return [
      {
        id: '1',
        title: 'Breaking Partners: Market Hits Record Highs',
        date: '2024-10-01',
        image: 'https://www.cna.com.tn/files/Somfy.png',
      },
      {
        id: '2',
        title: 'Local Sports Team Wins Championship',
        date: '2024-09-28',
        image: 'https://www.cna.com.tn/files/AZA.png',
      },
      {
        id: '3',
        title: 'New Tech Gadgets Announced at Conference',
        date: '2024-09-30',
        image: 'https://www.cna.com.tn/files/cital.jpg',
      },
      {
        id: '4',
        title: 'Community Rallies to Support Local Charity',
        date: '2024-10-05',
        image: 'https://www.cna.com.tn/files/Master.png',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: 'https://www.cna.com.tn/files/SP.jpg',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: 'https://www.cna.com.tn/files/Alu_Brosse.png',
      },
      {
        id: '1',
        title: 'Breaking Partners: Market Hits Record Highs',
        date: '2024-10-01',
        image: 'https://www.cna.com.tn/files/Somfy.png',
      },
      {
        id: '2',
        title: 'Local Sports Team Wins Championship',
        date: '2024-09-28',
        image: 'https://www.cna.com.tn/files/AZA.png',
      },
      {
        id: '3',
        title: 'New Tech Gadgets Announced at Conference',
        date: '2024-09-30',
        image: 'https://www.cna.com.tn/files/cital.jpg',
      },
      {
        id: '4',
        title: 'Community Rallies to Support Local Charity',
        date: '2024-10-05',
        image: 'https://www.cna.com.tn/files/Master.png',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: 'https://www.cna.com.tn/files/SP.jpg',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: 'https://www.cna.com.tn/files/Alu_Brosse.png',
      },
    ]
  },

  getPartners() {
    return Promise.resolve(this.getPartnersData())
  },
}
