import convert from 'xml-js'

/**
 * Map provided string data to match client app required structure
 * 
 * @param {String} textData
 * @return {Object} mappedData Currencies rates data
 */
export const mapCurrenciesRates = textData => {
  const objData = convert.xml2js(textData, {compact: true}),
    currencies = objData.ValCurs.Valute,
    mappedData = {}

  currencies.forEach( currency => {
    const id = currency._attributes.ID

    mappedData[id] = {
      charCode: currency.CharCode._text,
      name: currency.Name._text,
      nominal: currency.Nominal._text,
      numCode: currency.NumCode._text,
      value: Number( currency.Value._text.replace(',', '.') )
    }
  });

  return mappedData;
}