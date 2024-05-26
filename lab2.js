function twoSum(nums, target) {
    let numDict = {};
  
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (complement in numDict) {
        return [numDict[complement], i];
      }
      numDict[nums[i]] = i;
    }
  
    return [];
  }