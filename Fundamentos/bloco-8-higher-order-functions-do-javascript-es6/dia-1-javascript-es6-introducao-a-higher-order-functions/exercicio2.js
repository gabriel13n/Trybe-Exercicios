const checknumber = (myNumber, sortNumber) => {
  return myNumber === sortNumber
}


const resultSort = (myNumber, callback) => {
  const numberRandom = Math.floor((Math.random() * 5) + 1)
  return callback(myNumber, numberRandom) ? 'lucky day, youwin!' : 'Try Again';
    
}

console.log(resultSort(3, checknumber));

