var args = process.argv;
if(args.length > 2){
    var nums = args.slice(2)
    function sum(nums){
       if (nums[0] == undefined) return 0;
       return Number(nums[0]) + sum(nums.slice(1))        
    }

    console.log(sum(nums));
}