import {mapCurrenciesData} from './mappers'

describe('Mappers: mapCurrenciesData', () => {
  const textData = '<ValCurs Date="26.10.2017" name="Foreign Currency Market">'
  + '<Valute ID="R01010">'
  + '<NumCode>036</NumCode>'
  + '<CharCode>AUD</CharCode>'
  + '<Nominal>1</Nominal>'
  + '<Name>Australian Dollar</Name>'
  + '<Value>44,4434</Value>'
  + '</Valute>'
  + '<Valute ID="R01020A">'
  + '<NumCode>944</NumCode>'
  + '<CharCode>AZN</CharCode>'
  + '<Nominal>1</Nominal>'
  + '<Name>Azerbaijan Manat</Name>'
  + '<Value>34,1315</Value>'
  + '</Valute>'

  it('Should BE a function', () => {
    expect(mapCurrenciesData).toBeInstanceOf(Function)
  })

  it('Should map data correctly', () => {
    expect(mapCurrenciesData(textData))
    .toEqual({
      R01010: {
        charCode: 'AUD',
        name: 'Australian Dollar',
        nominal: '1',
        numCode: '036',
        valueNum: 44.4434,
        valueChar: '44,4434'
      },
      R01020A: {
        charCode: 'AZN',
        name: 'Azerbaijan Manat',
        nominal: '1',
        numCode: '944',
        valueNum: 34.1315,
        valueChar: '34,1315'
      }
    })
  })
})