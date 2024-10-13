export const NewsService = {
  getNewsData() {
    return [
      {
        id: '1',
        title: 'Breaking News: Market Hits Record Highs',
        date: '2024-10-01',
        image: 'https://www.cna.com.tn/files/palma-0.jpg',
      },
      {
        id: '2',
        title: 'Local Sports Team Wins Championship',
        date: '2024-09-28',
        image: 'https://www.cna.com.tn/files/sports-team.jpg',
      },
      {
        id: '3',
        title: 'New Tech Gadgets Announced at Conference',
        date: '2024-09-30',
        image: 'https://www.cna.com.tn/files/tech-conference.jpg',
      },
      {
        id: '4',
        title: 'Community Rallies to Support Local Charity',
        date: '2024-10-05',
        image: 'https://www.cna.com.tn/files/charity-event.jpg',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: 'https://www.cna.com.tn/files/weather-update.jpg',
      },
    ]
  },

  getNews() {
    return Promise.resolve(this.getNewsData())
  },
}
