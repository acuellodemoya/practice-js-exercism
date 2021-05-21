

export const toRna = (DNA) => {
  DNA = DNA.toUpperCase();
  let RNA = '';
  for(let i = 0; i < DNA.length; i++) {
    if(DNA[i] == 'G'){
      RNA += 'C';
    }else if(DNA[i] == 'C'){
      RNA += 'G';
    }else if(DNA[i] == 'T'){
      RNA += 'A';
    }else if(DNA[i] == 'A'){
      RNA += 'U';
    }else if(DNA[i] == ''){
      RNA += '';
    }
  }

  return RNA;
};
