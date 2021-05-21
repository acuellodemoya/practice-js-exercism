

export const score = (word='') => {
  let newWord = word.toUpperCase().split('');
  let result = 0;
  let letters = {
    0 : [''],
    1 : ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2 : ['D', 'G'],
    3 : ['B', 'C', 'M', 'P'],
    4 : ['F', 'H', 'V', 'W', 'Y'],
    5 : ['K'],
    8 : ['J', 'X'],
    10: ['Q', 'Z']
  };

  for(let i=0; i < newWord.length; i++){
    let letter = newWord[i];
    for(let value in letters){
      let aux = letters[value]
      for(let j = 0; j < aux.length; j++){
        if(aux[j] == letter){
          result += parseInt(value);
        }
      }
    }
  }

  return result;
};
