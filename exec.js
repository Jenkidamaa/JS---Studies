function vezes10(texto) {
  let a = 0
  let b = ""
  while(a < 10){
    b = b + texto
    a = a +1
  }
  return b
}

function multiplica(texto, repeticoes) {
  let a = ""
  let b = repeticoes
  let c = 0
  while(c<b){
      a = a + texto
      c = c + 1

  }
  return a
}

function listar(nome1, nome2, nome3) {
  return [nome1,nome2,nome3]
}

function dobraASoma(lista) {
    let a = 0
    let soma = 0
    while(a<3){
    
     soma = soma + lista[a]
     a = a +1
    }
    return soma*2
}
