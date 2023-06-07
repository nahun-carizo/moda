function calcularModa(){
    var var1 = parseInt(prompt("Ingrese el tamaño del vector:"));
  
    var var2 = [];
    for (var i = 0; i < var1; i++) {
      var2.push(Math.floor(Math.random() * 600));
    }
  
    var2.sort(function(a, b) {
      return a - b;
    });
  
    var frecuencias = {};
    for (var i = 0; i < var1; i++) {
      if (frecuencias[var2[i]] == undefined) {
        frecuencias[var2[i]] = 1;
      } else {
        frecuencias[var2[i]]++;
      }
    }
  
    var moda = var2[0];
    var max_frecuencia = 1;
    for (var i in frecuencias) {
      if (frecuencias[i] > max_frecuencia) {
        moda = i;
        max_frecuencia = frecuencias[i];
      }
    }
  
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML ="<p>Vector A: " + var2.join(", ") + "</p>" + "<p>Moda: " + moda + "</p>";
}