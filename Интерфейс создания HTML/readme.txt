hexlet-pairs-data è hexlet-pairs - hexlet's libraries
https://ru.hexlet.io
-----------------
hexlet-pairs-data
-----------------
l - List constructor
Examples
l(); // ()
l(8, 10); // (8, 10)
-
isEmpty - Check if list is empty
Examples
isEmpty(l()); // true
isEmpty(l(0)); // false
isEmpty(l('a', 5)); // false
-
head - Get list's head
Examples
head(l(10, 15, 20)); // 10
-
tail - Get list's tail
Examples
tail(l(10, 15, 20)); // (15, 20)
-
cons - Add element to list
Examples
cons(5, l(1, 0)); // (5, 1, 0)

------------
hexlet-pairs
------------
cons - Build pair
Examples
const pair = cons(5, 'hello');
const pair = cons(cons(1, null), 'world');
Returns Pair
-
car - Get car (first element) from pair
Examples
const pair = cons(5, 'hello');
car(pair); // 5
-
cdr - Get cdr (second element) from pair
Examples
const pair = cons(5, 'hello');
cdr(pair); // hello