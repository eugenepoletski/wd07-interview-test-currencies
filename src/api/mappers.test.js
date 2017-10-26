import {mapCurrenciesRates} from './mappers'

describe('Mappers', () => {
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

  it('MUST BE a function', () => {
    expect(mapCurrenciesRates).toBeInstanceOf(Function)
  })

  it('MUST map data correctly', () => {
    expect(mapCurrenciesRates(textData))
    .toEqual({
      R01010: {
        charCode: 'AUD',
        name: 'Australian Dollar',
        nominal: '1',
        numCode: '036',
        value: 44.4434
      },
      R01020A: {
        charCode: 'AZN',
        name: 'Azerbaijan Manat',
        nominal: '1',
        numCode: '944',
        value: 34.1315
      }
    })
  })
})