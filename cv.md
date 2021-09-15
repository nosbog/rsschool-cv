### Name and surname
Bogdan Noskov

### Date of birth
29.10.1999

### Contacts
vk/telegram: nosbog  
email: noskovbogdan@gmail.com  
phone: +375296093017  

***

### My priorities
Finish the JavaScript/Front-End 2021Q3 course and sign up for React, NodeJs courses.

***

### Brief information
In 2017 entered the BSEU on a full-time basis. A month before graduation decided to leave the university because I was not positive about the profession I was receiving.

In 2021 successfully completed the JavaScript/Front-End Pre-school course.

***

### Skills

#### Programming languages
JavaScript  
HTML/CSS  
a bit of Python  

#### CSS Preprocessors
SASS/SCSS

#### Methodology for web development 
BEM

#### Version control system
Git (+github)

#### Others
Figma, Chrome DevTools

#### English
English Level: B1+

***

### Code examples
Game Wack-a-mole (HTML/CSS + JS) - ["Wack-a-mole"](https://rolling-scopes-school.github.io/nosbog-JSFEPRESCHOOL/js30-part2/)

Other code examples - [Basic-js (Js/Front-end 2021Q3 task)](https://github.com/nosbog/basic-js/tree/master/src)

Task: all possible permutations of elements in a given array:
```Javascript
function permute(dictionary) {
    let result = [];
    if (dictionary.length === 0) return [];
    if (dictionary.length === 1) return [dictionary];

    for (let i = 0; i < dictionary.length; i++) {
      const current = dictionary[i];
      const rest = dictionary.slice(0, i).concat(dictionary.slice(i + 1));
      const restPermuted = permute(rest);

      for (let j = 0; j < restPermuted.length; j++) {
        let permutedArray = [current].concat(restPermuted[j]);
        result.push(permutedArray)
      }
    }
    return result;
}
```

***

### Video resume
added in html/css version
