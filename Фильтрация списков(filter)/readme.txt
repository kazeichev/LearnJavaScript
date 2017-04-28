LIBRARIES - hexlet.io
------------------------------------------------
		hexlet-pairs-data
------------------------------------------------ 
l - List constructor
Examples
l(); // ()
l(8, 10); // (8, 10)
---
isEmpty - Check if list is empty
Examples
isEmpty(l()); // true
isEmpty(l(0)); // false
isEmpty(l('a', 5)); // false
---
head - Get list's head
Examples
head(l(10, 15, 20)); // 10
---
tail - Get list's tail
Examples
tail(l(10, 15, 20)); // (15, 20)
---
cons - Add element to list
Examples
cons(5, l(1, 0)); // (5, 1, 0)
---
reverse - Reverse list
Examples
reverse(l()); // ()
reverse(l(8, 2, 10)); // (10, 2, 8)

------------------------------------------------
		hexlet-html-tags
------------------------------------------------
name - Get node's name
Examples
name(node('p', 'hello, world')); // p
---
value - Get node's value
Examples
value(node('p', 'hello, world')); // hello, world
---
node - Make a node
Examples
node('h2', 'hello, world');
node('div', l(node('p', 'one'), node('p', 'two')));
---
is - Check if node is tag
Examples
is('h3', node('h3', 'hexlet')); // true
is('h3', node('h6', 'hexlet')); // false
---
make - Make a list of nodes
Examples
make(node('span', 'hello'), node('span', 'world'));
---
append - Append node to a list of nodes
Examples
const dom = make();
append(dom, node('h2', 'hello, world'));