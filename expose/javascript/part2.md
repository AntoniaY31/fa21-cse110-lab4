# Part2

1. What will happen at line 12 and why? If the code causes an error, explain why.

   **Ans: The console logs "3" since _i_  is declared as a _var_, which has the scope of the whole function. And _i_ is initialized to be 0 and the total number of operations is 3, so the final value of  _i_  is 3 after incrementing three times.**

2. What will happen at line 13 and why? If the code causes an error, explain why. 

   **Ans: The console logs "150" since _discountedPrice_ is redeclared during every iteration as a _var_ type. SInce _var_ has the scope of the whole function, _discountedPrice_ will represent the value during the last iteration, which is 300*0.5 = 150.**

3. What will happen at line 14 and why? If the code causes an error, explain why. 

   **Ans: The console logs "150". Although _finalPrice_ is declared at the beginning of the function, the value of it changes during each iteration of the for-loop. When reaching line 14, the value of _finalPrice_ will be the one in the last iteration, which is Math.round(150 * 100) / 100 = 150.**

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.

   **Ans: The function will return _[ 50, 100, 150 ]_.  Since the input is _[100, 200, 300]_, and in each iteration the function calculates the discounted price of the element in the input and push to the _discounted_ list.  In the first iteration, we push 100*0.5 to the empty list; In the second iteration, we push 200*0.5 to [50]; In the last iteration, we push 300*0.5 to [50, 100] and the list becomes _[ 50, 100, 150 ]_ at last. **

5. What will happen at line 12 and why? If the code causes an error, explain why.  (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

   **Ans: The code will cause a Reference Error since _i_ is declared as the type _let_, which only has the scope of the whole block. So _i_ does not exist after the for-loop, when trying to access _i_ in line12.**

6. What will happen at line 13 and why? If the code causes an error, explain why.

   **Ans: Line 13 will cause a Reference Error since _discountedPrice_ is declared as the type _let_ within the loop, which only has the scope of the whole block. So it does not exist after the for-loop, when trying to access _discountedPrice_ in line13.**

7. What will happen at line 14 and why? If the code causes an error, explain why. 

   **Ans: The console logs 150 at line 14 since _finalPrice_ is declared as a _let_ within the whole funciton. So when we try to access it at line 14, it still exists.**

8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 

   **Ans:  The function will return _[ 50, 100, 150 ]_.  Since the input is _[100, 200, 300]_, and in each iteration the function calculates the discounted price of the element in the input and push to the let _discounted_ list.  In the first iteration, we push 100*0.5 to the empty list; In the second iteration, we push 200*0.5 to [50]; In the last iteration, we push 300*0.5 to [50, 100] and _discounted_ becomes _[ 50, 100, 150 ]_ at last and can be returned at line 16. **

9. What will happen at line 11 and why? If the code causes an error, explain why.

   **Ans: Line 11 will cause a Reference Error since _i_ is declared as a _let_ which only exists within the scope of the for-loop.**

10.  What will happen at line 12 and why? If the code causes an error, explain why. 

    **Ans: At line 12 the console logs "3" since _length_ is declared as a _const_ at the begining of the function and it will represent the length of the original prices list.**

11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 

    **Ans:  The function will return _[ 50, 100, 150 ]_.  Since the input is _[100, 200, 300]_, and in each iteration the function calculates the discounted price of the element in the input, redecalre and assign the calculated value to the _const discountedPrice_ , and push to the const _discounted_ list (which is not a reassignment).  Thus, in the first iteration, we push 100*0.5 to the empty list; In the second iteration, we push 200*0.5 to [50]; In the last iteration, we push 300*0.5 to [50, 100] and _discounted_ becomes _[ 50, 100, 150 ]_ at last and can be returned at line 14. **

12. Given the above Object, write the notation for: (These should be in your **part2.md**)

    <ol type = "A">
      <li>Accessing the value of the name property in the student object: <b>student.name</b></li>
      <li>Accessing the value of the Grad Year property in the student object: <b>student["Grad Year"]</b></li>
      <li>Calling the function for the greeting property in the student object: <b>student.greeting()</b></li>
      <li>Accessing the name property of the object in the Favorite Teacher property in student: <b>student["Favorite Teacher"].name</b></li>
      <li>Access the first index in the array of the courseLoad property of the student object: <b>student.course_load[0]</b></li>
    </ol>

13. Arithmetic

    <ol type="A">
      <li>‘3’ + 2: <b>The output is '32' since 2 maps to the string representation '2' and combined with '3'.</b></li>
      <li>‘3’ - 2: <b>The output is 1 since '-' only applies to numbers and then '3' is convert to its numerical representation 3. So the final result is 3 - 2 = 1.</b></li>
      <li>3 + null: <b>The output is 3 since null maps to 0 numerically.</b></li>
      <li>‘3’ + null: <b>The output is '3null' since '3' is a string and null maps to its string representation which is 'null'.</b></li>
      <li>true + 3: <b>The output is 4 since true maps to 1 numerically.</b></li>
      <li>false + null: <b>The output is 0 since false and null all maps to 0 numerically.</b></li>
      <li>'3' + undefined: <b>The output is '3undefined' since '3' is a string and undefined maps to its string representation which is 'undefined'.</b></li>
      <li>'3' - undefined: <b>The output is NaN since the subtraction of a string by undefined is still undefined.</b></li>
    </ol>

14. Comparison

    <ol type="A">
      <li>‘2’ > 1: <b>The output is true since '2' will numerically map to 2 and perform the comparison between two numbers 2 and 1.</b></li>
      <li>‘2’ < ‘12’: <b>The output is false since dictionary comparison will compare the first char and return false since "2" is larger than "1".</b></li>
      <li>2 == ‘2’: <b>The output is true since '2' is converted to the numerical 2.</b></li>
      <li>2 === ‘2’: <b>The output is false since "===" check the equality without type conversion.</b></li>
      <li>true == 2: <b>The output is false since true has the value 1.</b></li>
      <li>true === Boolean(2): <b>The output is true since 2 convert to Boolean is true.</b></li>
    </ol>

15. Explain the difference between the == and === operators.

    **Ans: == compares the equality with type conversion allowed; === compares the strict equality which does not allow type conversion.**

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number. (This should be in a JS file **part2-question16.js**)

17. If the function above is called with the following parameters **modifyArray([1,2,3], doSomething)**, what will be the result? Briefly walk through how you arrived at that result. (This should be in your **part2.md**). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

    **Ans: The result is [ 2, 4, 6 ]. Since doSomething basically doubles the input value and it is called inside the for-loop to double each element inside the input array. After the for-loop, we push 1 * 2, 2 * 2, and 3 * 2 to newArr.**

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. (This should be a JS file - **part2-question18.js**)

19. What is the output of the above code? (This should be in your **part2.md**)

    **Ans: The output is 1 4 3 2, with each number in one line. 1 appears first since line2 executes first and 1 is logged directly; 4 appears second since the code executes synchronously as line 2 while line3 and 4 is setting the timer; 3 appears the third since the delay is only 0; and 2 appears last since the delay is 1 second.**

    

    
