function findMaxElement(arr) {

    if (arr.length === 0) {
      return null;
    }
  
    let maxElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i]; 
      }
    }
  
    return maxElement;
  }