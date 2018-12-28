# Recamán's sequence

This is a visualization of Recamán's sequence named after Colombian mathematician Bernardo Recamán. 

## Definition of the sequence

a(0) = 0
For n > 0, **a(n) = a(n-1) - n** (if positive and not already in the sequence)
otherwise  **a(n) = a(n-1) + n**

The first 10 numbers are as follows: 
0, 1, 3, 6, 2, 7, 13, 20, 12, 21.

Starting from 0, the first question is as follows: Can I subtract 1? I cannot, as one of the rules of the sequence is that the numbers have to be positive. Hence, the next number in the sequence is 1. Can I then subtract 2? No, because 0 is already in the sequence. The same holds true for 3. So far, I could only use the second formula: 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6. 
Can I now subtract 4? Yes indeed, because the resulting number 2 is not negative and not yet in the sequence. 
And so on and so forth. 

## How to use this repository
[You can check out my visualization here!](https://nilsde.github.io/recaman-series/) 
(Ideally open in Chrome!)
