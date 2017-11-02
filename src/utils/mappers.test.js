import { mapCurrenciesToArrayAsc } from './mappers'

describe('Utiliries: mappers', () => {
  describe('mapCurrenciesToArrayAsc', () => {
    it('Should be a function', () => {
      expect(mapCurrenciesToArrayAsc).toBeInstanceOf(Function)
    })

    it('Should map object of currencies to sorted array of objects in ascending order', () => {
      expect(
        mapCurrenciesToArrayAsc({
          'R01': {
            'charCode': 'RUB',
            'name': 'Russian Rouble'
          },
          'R02': {
            'charCode': 'AUD',
            'name': 'Australlian Dollar'
          },
          'R03': {
            'charCode': 'NZD',
            'name': 'New Zealand Dollar'
          }
        },'charCode')
      )
      .toEqual([
        {
          id: 'R02',
          charCode: 'AUD',
          name: 'Australlian Dollar'
        },
        {
          id: 'R03',
          charCode: 'NZD',
          name: 'New Zealand Dollar'
        },
        {
          id: 'R01',
          charCode: 'RUB',
          name: 'Russian Rouble'
        }
      ])
    })
  })
})