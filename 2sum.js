/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


    let dict = {};

    for (let x = 0; x < nums.length;x++){

        let num = nums[x];
        //  console.log("X "+x+" NUM "+nums[x]+" REQUIRED NUMBER "+(target - num));
        let search = target - num;

        if (dict[search] != null){

            return [dict[search],x];

        }


        dict[num] = x;// store the value where they can be found





    }



    return [];


};
