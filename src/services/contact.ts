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
        phones: ['73.482.398'],
        email: 'contact@stumav.com',
        location: 'https://www.google.com/maps/place/STE+DELTA+SOLUTION/@35.6091666,10.7571099,15z/data=!4m6!3m5!1s0x13020fc332aa2c33:0xf66d6669e52f08e0!8m2!3d35.6091666!4d10.7571099!16s%2Fg%2F11llt2d32s?entry=ttu',
        whatsapp: 'https://wa.me/21698405053',
        address: 'Zone industrielle Jemmel',
        webUrl: 'https://www.ste-deltasolution.com',
      },
    ]
  },

  getContact(): Promise<ContactData[]> {
    return Promise.resolve(this.getContactData())
  },
}

export { type ContactData, ContactService }
