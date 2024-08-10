function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:


  if (numero ===1){
    return "Lunes"
  }if (numero ===2){
    return "Martes"
  }if (numero ===3){
    return "Miercoles"
  }if (numero ===4){
    return "Jueves"
  }if (numero ===5){
    return "Viernes"
  }if (numero ===6){
    return "Sabado"
  }if (numero ===7){
    return "Domingo"
  }else{
    return "No es un dia de la semana"
  }





}

module.exports = obtenerDiaSemana;