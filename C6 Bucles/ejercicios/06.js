function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:


  const numstr = num.toString();//convierte el numero a una cadena.
  if(numstr.length === 3){
    return true
  }else{
    return false
  }
}

module.exports = tieneTresDigitos;
