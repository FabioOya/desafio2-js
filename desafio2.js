function maisMenos(numeros) {
    if (numeros.length <= 0) { //Tratamento para evitar divisão por zero
      return [0, 0, 0];
    }
  
    var totalPositivo = 0;
    var totalNegativo = 0;
    var totalZero     = 0;
  
    for (var i=0; i < numeros.length; i++) {
      if (numeros[i] > 0) {
        totalPositivo++;
        continue;
      }
  
      if (numeros[i] == 0) {
        totalZero++;
        continue;
      }
  
      if (numeros[i] < 0) {
        totalNegativo++;
        continue;
      }
    }
  
    var fracaoPositivo = totalPositivo / numeros.length;
    var fracaoZero     = totalZero / numeros.length;
    var fracaoNegativo = totalNegativo / numeros.length;
    return [fracaoPositivo, fracaoZero, fracaoNegativo];
  }