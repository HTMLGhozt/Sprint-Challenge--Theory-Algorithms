# answers.md

a.) O(1) constant time.

```JavaScript
  let a = 0;
  while (a < n * n * n) {
    a += n * n;
  }
```

b.) I don't actually know this one, x isn't defined, but I'm assuming that arr[0.5] would be undefined, thus I'm also assuming that this is similar to i >= 1... Which would be logarithmic time, or O(log n).

```JavaScript
 let n = arr.length - 1;
 while (arr[i] > x && i >= 0) {
   i = i / 2;
 }
```

c.) This was very difficult I think that it's: O(log n) again. The two inner forloops are constant as they'll always iterate 8**2 times. Sum will return 64 + n^(1/2) / 2.

```JavaScript
let sum = 0;
for (let i = 0; i < Math.sqrt(n) / 2; i++)
  for (let j = i; j < 8 + i; j++)
    for (let k = j; k < 8 + j; k++)
      sum++;
```

d.) O(n log n)

```JavaScript
let sum = 0;
for (let i = 0; i < n; i *= 2)
  for (let j = 0; j < n; j++)
    sum++;
```

e.) Exponential? There's a pattern to this.

```JavaScript
let sum = 0;
for (i = 0; i < n; i++)
  for (j = i + 1; j < n; j++)
    for (k = j + 1; k < n; k++)
      for (l = k + 1; l < 10 + k; l++)
        sum++;
```

f.) This is O(n).

```JavaScript
const bunnyEars = function (bunnies) { // here bunnies === n
  if (bunnies === 0) return 0;
  return 2 + bunnyEars(bunnies-1);
}
```

g.) This is also O(n)

```JavaScript
search = function (array, arraySize, target) { // here arraySize === n
if (arraySize > 0) {
  if (array[arraySize-1] === target) return true;
  else return search(array, arraySize-1, target);
}
  return false;
}
```

