//fetch
fetch ('https://pokeapi.co/api/v2/pokemon')
.then((res)=>{
  return res.json()
})
.then(data =>{
   // console.log(data.results)
    let arrayNombres = []
    data.results.forEach(element => {
        //console.log(element.name)
      arrayNombres.push(element.name)
      })
      console.log(arrayNombres)
})
.catch(error => console.log(error))

// async y await(funciona dentro de async-salvo ultimas actualizaciones)
const obtenerPokemones = async() => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await res.json()
   // console.log(data.results)
   const arrayNombres = data.results.map(poke => poke.name)
    console.log(arrayNombres)
  } catch (error) {
    console.log(error)
  }
}
obtenerPokemones()