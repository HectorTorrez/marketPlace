export const categories = [
  // {
  //   name: 'Status',
  //   category: [
  //     {

  //       label: 'Sold',
  //       status: false
  //     }

  //   ]

  // },
  {
    name: 'Categories',
    category: [

      {
        label: 'Men',
        status: false

      }, {
        label: 'Women',
        status: false

      }]

  }
]

export const itemCategories = [
  {
    id: crypto.randomUUID(),
    category: 'Choose One'
  },
  {
    id: crypto.randomUUID(),
    category: 'Men'
  },
  {
    id: crypto.randomUUID(),
    category: 'Women'
  }
]
