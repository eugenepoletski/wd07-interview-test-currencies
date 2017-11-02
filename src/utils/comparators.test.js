import { compareByPropAsc } from './comparators'

describe('Utilities: compareByPropAsc()', () => {
  it('Should be a function', () => {
    expect( compareByPropAsc ).toBeInstanceOf(Function)
  })

  it('Should compare two objects properly', () => {
    expect(
      compareByPropAsc('charCode')(
        {charCode: "RUB", name: "Russian Rouble"},
        {charCode: "AUD", name: "Australlian Dollar"}
      )
    )
    .toBe(1)

    expect(
      compareByPropAsc('charCode')(
        {charCode: "AUD", name: "Australlian Dollar"},
        {charCode: "RUB", name: "Russian Rouble"}
      )
    )
    .toBe(-1)

    expect(
      compareByPropAsc('charCode')(
        {charCode: "AUD", name: "Australlian Dollar"},
        {charCode: "AUD", name: "Australlian Dollar"}
      )
    )
    .toBe(0)
  })

  it('Should help sort array of objects properly', () => {
    expect([
      {charCode: "RUB", name: "Russian Rouble"},
      {charCode: "AUD", name: "Australlian Dollar"},
      {charCode: "NZD", name: "New Zealand"}
    ].sort( compareByPropAsc('charCode') ))
    .toEqual([
      {charCode: "AUD", name: "Australlian Dollar"},
      {charCode: "NZD", name: "New Zealand"},
      {charCode: "RUB", name: "Russian Rouble"}
    ])
  })
})