function inverterString(str) {
    let resultado = '';  
    
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];  
    }
  
    return resultado;
  }
  
  
  let minhaString = "Target";
  let stringInvertida = inverterString(minhaString);
  
  console.log("String original:", minhaString);
  console.log("String invertida:", stringInvertida);