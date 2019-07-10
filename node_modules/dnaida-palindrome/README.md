This is a sample NPM module created in Learn Enough JavaScript to Be Dangerous by Dmytro Naida.

The module can be used as follows:

```
$ npm install --global dnaida-palindrome
$ vim test.js
let Phrase = require("dnaida-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```

