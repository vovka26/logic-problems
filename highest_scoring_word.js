// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const arr = x.split(' ');
    let maxScore = 0; 
    let maxWord = '';
    for(let word of arr){
      const currentScore = countScores(word)
      if(currentScore > maxScore){
        maxWord = word;
        maxScore = currentScore;
      }
      
    }
    return maxWord;
  }
  
  function createScoresDict(){
    const letters = 'abcdefghijklmnopqrstuvwxyz'; 
    const dict = {};
    let count = 1; 
    for(let l of letters){
      dict[l] = count;
      count++;
    }
    return dict; 
  }
  
  function countScores(word){
    const dict = createScoresDict();
    let score = 0;
    for(let l of word){
      score+= dict[l];
    }
    return score;
  }