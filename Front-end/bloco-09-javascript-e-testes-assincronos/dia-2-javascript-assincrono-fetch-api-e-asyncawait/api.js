const treatData = (dados) => {
  const filtred = dados.filter((element) => element.rank <= 10)
  const treatedValues = filtred.map(({name, priceUsd, symbol}) => ({name, priceUsd, symbol}))

  const body = document.querySelector('body')

  treatedValues.forEach(({name, priceUsd, symbol}) => {
     const div = document.createElement('div')
     div.innerHTML = `A moeada ${name} que tem o preço em dolar ${priceUsd} e que tem o simbolo ${symbol}`
     body.appendChild(div)
  })
 


  return console.log(treatedValues);
}

const fetchApi = async () => {
  try {
    const response = await fetch(`https://api.coincap.io/v2/assets/`)
    const dados = await response.json()
    treatData(dados.data)
  } catch (error) {
    console.log(error);
  }
}
fetchApi()