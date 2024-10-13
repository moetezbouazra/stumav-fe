interface ContactData {
  id: string
  phones: string[]
  email: string
  location: string
  whatsapp: string
  address: string
  webUrl: string
}

const ContactService = {
  getContactData(): ContactData[] {
    return [
      {
        id: 'a90a95f7-71c7-48b0-8209-a567feafc321',
        phones: ['74.665.095', '74.675.675'],
        email: 'cna1@cna.com.tn',
        location: 'https://www.google.com/maps/place/STE+DELTA+SOLUTION/@35.6091666,10.7571099,15z/data=!4m6!3m5!1s0x13020fc332aa2c33:0xf66d6669e52f08e0!8m2!3d35.6091666!4d10.7571099!16s%2Fg%2F11llt2d32s?entry=ttu',
        whatsapp: 'https://wa.me/21698405053',
        address: 'Route de gabes Km 6 Sfax',
        webUrl: 'https://www.ste-deltasolution.com',
      },
      {
        id: 'fcaa69ea-ad6e-4727-bea4-cdcbd187b8a7',
        phones: ['74.830.605', '29.377.452'],
        email: 'cna2@cna.com.tn',
        location: 'https://www.google.com/maps/place/STE+DELTA+SOLUTION/@35.6091666,10.7571099,15z/data=!4m6!3m5!1s0x13020fc332aa2c33:0xf66d6669e52f08e0!8m2!3d35.6091666!4d10.7571099!16s%2Fg%2F11llt2d32s?entry=ttu',
        whatsapp: 'https://wa.me/21698405053',
        address: 'Route Mahdia km 10 Sfax',
        webUrl: 'https://www.ste-deltasolution.com',
      },
    ]
  },

  getContact(): Promise<ContactData[]> {
    return Promise.resolve(this.getContactData())
  },
}

export { type ContactData, ContactService }
