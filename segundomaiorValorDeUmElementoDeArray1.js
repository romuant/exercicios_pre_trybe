
            function getSecondLargest(nums) {
                let max1 = 0;
                for (const e of nums) {
                    if (max1 < e) {
                        max1 = e;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    }
                }
                
                let max2 = 0;
                for (const e of nums) {
                    if (max2 < e && e < max1) {
                        max2 = e;
                    }
                }
                
                return max2;
            }
            console.log(getSecondLargest([2,3,6,6,5]))