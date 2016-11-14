let _positions = []

const apis = {
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

export default apis
