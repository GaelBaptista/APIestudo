function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.send()
  return request.responseText
}

function criarLista(usuario) {
  lista = document.createElement('div')
  liImage = document.createElement('img')
  liDescricao = document.createElement('p')

  liImage.innerHTMl = usuario.anime_img
  liDescricao.innerHTMl = usuario.anime_name
  usuario.lista.appendChild(liImage)
  lista.appendChild(liDescricao)

  return lista
}

function main() {
  data = fazGet('https://anime-facts-rest-api.herokuapp.com/api/v1')
  let usuarios = JSON.parse(data)
  let listaFilmes = document.getElementById('lista')

  usuarios.forEach(element => {
    let lista = criarLista(element)
    listaFilmes.appendChild(lista)
  })
}

main()
