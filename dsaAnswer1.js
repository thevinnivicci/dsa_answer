function moveZeroes(nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            // Swap non-zero element with the element at the left pointer
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    // Set all remaining elements from left to the end as zero
    while (left < nums.length) {
        nums[left] = 0;
        left++;
    }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
