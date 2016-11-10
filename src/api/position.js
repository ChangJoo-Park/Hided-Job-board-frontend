const _positions = [
  {
    title: 'UI Designer / Project Manager',
    type: 'Full Time',
    salary: '$40,000 - $50,000',
    category: 'Artworking, Digital design, Editorial, Grahpic Design',
    company: 'Apple',
    location: 'Sanfrancisco, USA',
    createdAt: '5 days ago'
  },
  {
    title: 'UI Designer / Project Manager',
    type: 'Full Time',
    salary: '$40,000 - $50,000',
    category: 'Artworking, Digital design, Editorial, Grahpic Design',
    company: 'Apple',
    location: 'Sanfrancisco, USA',
    createdAt: '5 days ago'
  },
  {
    title: 'UI Designer / Project Manager',
    type: 'Full Time',
    salary: '$40,000 - $50,000',
    category: 'Artworking, Digital design, Editorial, Grahpic Design',
    company: 'Apple',
    location: 'Sanfrancisco, USA',
    createdAt: '5 days ago'
  }
]

export default {
  getPositions (cb) {
    setTimeout(() => cb(_positions), 1000)
  }
}
