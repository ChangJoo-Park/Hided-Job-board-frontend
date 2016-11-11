let _positions = [
  {
    id: 1,
    title: 'UI Designer',
    type: 'Full Time',
    salary: '$40,000 - $50,000',
    category: 'Artworking, Digital design, Editorial, Grahpic Design',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    company: {
      name: 'Apple',
      location: 'Sanfrancisco, USA',
      email: 'job@apple.com',
      website: 'https://apple.com'
    },
    createdAt: '5 days ago'
  },
  {
    id: 2,
    title: 'Software Developer',
    type: 'Intern',
    salary: '$30,000 - $55,000',
    category: 'iPhone, Android',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    company: {
      name: 'Google',
      location: 'Sanfrancisco, USA',
      email: 'job@google.com',
      website: 'https://google.com'
    },
    createdAt: '10 days ago'
  },
  {
    id: 3,
    title: 'Project Manager',
    type: 'Full Time',
    salary: '$60,000 - $70,000',
    category: 'Communication',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    company: {
      name: 'Airbnb',
      location: 'Sanfrancisco, USA',
      email: 'job@airbnb.com',
      website: 'https://airbnb.com'
    },
    createdAt: '5 days ago'
  }
]

export default {
  getAll (cb) {
    setTimeout(() => cb(_positions), 300)
  },
  getOne (cb) {
  },
  create (position, cb) {
    console.log('[API] Create Position')
    _positions.push(position)
    cb(_positions)
  },
  delete (position, cb) {
    const _positionID = _positions.indexOf(position)
    console.log('remove with api')
    _positions.splice(_positionID, 1)
    console.log('call cb')
    cb(_positions)
  },
  update (position, cb) {
    const _positionID = _positions.indexOf(position)
    _positions[_positionID] = position
    cb(_positions)
  }
}
