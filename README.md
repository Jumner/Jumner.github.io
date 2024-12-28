# My Portfolio Website
I made this website to showcase my projects and journey of learning.
## Why Make It Complex When It Could Be Simple
Instead of choosing a crazy tech stack with a million components. I wanted to return to the basics and have some fun doing reactivity with no framework, just JavaScript.

## File Structure
Because I'm not using a framework. I'll document where to find everything.

### img/

The [img](https://github.com/Jumner/Jumner.github.io/tree/main/img) directory contains all the logos, background svg, and all content that isn't hosted online somewhere else.

### index.html

[index.html](https://github.com/Jumner/Jumner.github.io/blob/main/index.html) contains all non-reactive HTML for my site. It is pretty barebones since most of the content is rendered dynamically.

### style.css

[style.css](https://github.com/Jumner/Jumner.github.io/blob/main/style.css) contains 700 lines of discusting CSS. I tried my best to make it pretty and I'm fairly happy with how it turned out. That said, I do not have any desire to improve it whatsoever.

### card.js

[card.js](https://github.com/Jumner/Jumner.github.io/blob/main/card.js) contains a class for defining the little cards. This allows me to simply provide the title and description and it describes how to build the DOM object. It also defines the list of all them at the bottom so if you wanted to add one, that's where it would go.

![](README/cards.png)

### work.js

[work.js](https://github.com/Jumner/Jumner.github.io/blob/main/work.js) contains the class for defining my projects. I explicitly excluded class projects and job positions as that is what my resume is for. This allows me to provide the project information and it will automatically construct the DOM object. It also defines the list of all projects at the bottoms so if you wanted to add one, that's where it would go.

![](README/work.jpeg)

### main.js

[main.js](https://github.com/Jumner/Jumner.github.io/blob/main/main.js) contains the heart of the reactivity for the site. The other two js files simply provide an interface for getting their DOM objects, main actually renders the. This does everything from card updating, animations, rendering projects, updating relative years (stuff like what year I'm in or how long ago something was), and scaling for different devices.
