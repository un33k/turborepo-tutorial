import add from './add'

describe('testing add', () => {
  it('should be 3', () => {
    expect(add(1, 3)).toBe(4)
  })
})
