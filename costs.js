function getCostsData( sprinkles, hot_fudge, whipped_cream, cherry, num_s){
// An additional scoop of ice cream is $1.25 if cup clicked + 1 add 1.25
let sprinkles = 0
let hot_fudge = 0
let whipped_cream = 0
let cherry = 0
}
// Logic
 cup= 2.25 * num_s
 if(sprinkles) {
   sprinkles += parseFloat(0.50) * num_s;
 }
 if(hot_fudge){
    hot_fudge += parseFloat(1.25) * num_s;
 }
 if (whipped_cream){
    whipped_cream += parseFloat(0.25) * num_s;
 }
 if(cherry){
    cherry += parseFloat(0.25) * num_s;
 }
 amount= cup + sprinkles + hot_fudge + whipped_cream + cherry;
 // Result Variable 
 
 return 