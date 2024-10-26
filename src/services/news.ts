export const NewsService = {
  getNewsData() {
    return [
      {
        id: '1',
        title: 'Breaking News: Market Hits Record Highs',
        date: '2024-10-01',
        image: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
      },
      {
        id: '2',
        title: 'Local Sports Team Wins Championship',
        date: '2024-09-28',
        image: 'https://www.azernews.az/media/pictures/company_picture.jpg',
      },
      {
        id: '3',
        title: 'New Tech Gadgets Announced at Conference',
        date: '2024-09-30',
        image: 'https://business.itn.co.uk/wp-content/uploads/2024/04/itn-manufacturing-programme-hero-2024-03.jpg',
      },
      {
        id: '4',
        title: 'Community Rallies to Support Local Charity',
        date: '2024-10-05',
        image: 'https://business.itn.co.uk/wp-content/uploads/2024/04/itn-manufacturing-programme-hero-2024-03.jpg',
      },
      {
        id: '5',
        title: 'Weather Update: Heavy Rains Expected Tomorrow',
        date: '2024-10-09',
        image: 'https://www.azernews.az/media/pictures/company_picture.jpg',
      },
    ]
  },

  getNews() {
    return Promise.resolve(this.getNewsData())
  },
}
