function imc(peso, altura) { 
    let resultado = peso/(altura*altura)
    if(resultado<=18.5){
      return"Bajo peso"
      }
    else if(resultado>=18.5&&resultado<=25){
      return"normal"
      }
    else{
      return"Sobrepeso"
    }
  return resultado
    
  }
  
  // No borres la siguiente linea:
  console.log(imc(70,1.70));
  function siglo(año) {
	if(año>=1&&año<=100){
      return 1
    }
  else if(año>=101&&año<=200){
      return 2
    }
  else if(año>=201&&año<=300){
      return 3
    }
  else if(año>=301&&año<=400){
      return 4
    }
  else if(año>=401&&año<=500){
      return 5
    }
  else if(año>=501&&año<=600){
      return 6
    }
  else if(año>=601&&año<=700){
      return 7
    }
  else if(año>=701&&año<=800){
      return 8
    }
  else if(año>=801&&año<=900){
      return 9
    }
  else if(año>=901&&año<=1000){
      return 10
    }
  else if(año>=1001&&año<=1100){
      return 11
    }
  else if(año>=1101&&año<=1200){
      return 12
    }
  else if(año>=1201&&año<=1300){
      return 13
    }
  else if(año>=1301&&año<=1400){
      return 14
    }
  else if(año>=1401&&año<=1500){
      return 15
    }
  else if(año>=1501&&año<=1600){
      return 16
    }
  else if(año>=1601&&año<=1700){
      return 17
    }
  else if(año>=1701&&año<=1800){
      return 18
    }
  else if(año>=1801&&año<=1900){
      return 19
    }
  else if(año>=1901&&año<=2000){
      return 20
    }
  else{
    return 21
  }
}

// No modifiques la siguiente linea:
console.log(siglo(1900));
/* names="dario"
function filterNames(names, maxLength) {
  result = [];

  for (let i=0;i<names.length;i++) {
    console.log([i])
    if (name.length < maxLength) {
      result.push(name)
    }
  }

  return result;
}

// No modifiques la siguiente linea:
filterNames(names,5); */
function inverso(palabra) {
	let resultado = palabra.split("")
let reverse=resultado.reverse()
console.log(reverse)
let join=reverse.join("")

 return join
}

// No modifiques la siguiente linea:
console.log(inverso("codensa"));