# holberton-smiling-school-javascript
Adding dynamic functionality to [0x0B. Implement a design with bootstrap](./https://github.com/Svcg17/holberton-smiling-school) project using JavaScript and jQuery.
- All the cards, slides and filters get their data from an API.
- Webpage is both responsive and accessible

## Requirements
- You have to use Bootstrap
- Your styles.css must be as small as you can - you must use as much as you can Bootstrap classes
- You have to use JQuery
- Your scripts.js must contain all your Javascript part
- Your Javascript must be executed only when the document is loaded

## Objective
Here the final result:
![website](./images/readme.jpg)

## Tasks
### [0. Reuse and polish your Bootstrap integration](./0-homepage.html)
Copy files from 0x0B. Implement a design with bootstrap:
```
    homepage.html -> 0-homepage.html
    pricing.html -> 0-pricing.html
    courses.html -> 0-courses.html
    styles.css and any files/folders needed (images, fonts…)
```

Important notes with Figma:
  - if your computer doesn’t have missing fonts, you can find them here: source-sans-pro and Spin-Cycle-OT
  - some values are in float - feel free to round them
  - “Be pixel perfect” - yes! but mainly make sure colors, size and position are correct. #C271FF is not purple.

For this task, please write an amazing README.md

Interactions note:
  - Web pages must switch to the tablet version when the screen width is 768px
  - Web pages must switch to the mobile version when the screen width is 576px
  - button hover/active: opacity: 0.9

### [1. Homepage - quotes](./1-homepage.html)
From `0-homepage.html`, create `1-homepage.html`.
Replace static quotes by dynamic loading:

  - URL: https://smileschool-api.hbtn.info/quotes
  - No static quotes should be present in the quotes section
  - During the Ajax request, a loader should be present
  - Carousel should work like before

### [2. Homepage - popular tutorials](./2.homepage.html)
From `1-homepage.html`, create `2-homepage.`html`.

Replace static video cards by dynamic loading:
  - URL: `https://smileschool-api.hbtn.info/popular-tutorials`
  - No static video cards should be present in the section
  - During the Ajax request, a loader should be present
  - Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
  - Don’t forget the responsive part!

### [3. Homepage - latest videos](./3.homepage.html)
From `2-homepage.html`, create `homepage.html`.

Replace static video card by dynamic loading:

 URL: `https://smileschool-api.hbtn.info/latest-videos`
  -  No static video cards should be present in the section
  -  During the Ajax request, a loader should be present
  -  Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
  -  Don’t forget the responsive part!

### [4. Pricing - quotes](./pricing.html)
From `0-pricing.html`, create `pricing.html`.

Replace static quotes by dynamic loading:
  -  URL: `https://smileschool-api.hbtn.info/quotes`
  -  No static quotes should be present in the quotes section
  -  During the Ajax request, a loader should be present
  -  Carousel should work like before

### [5. Courses](./courses.html)
From `0-courses.html`, create `courses.html`.
Replace static video card by dynamic loading:

    - URL: `https://smileschool-api.hbtn.info/courses`
        - GET parameters:
           - q: search value (in our case, the value of the field KEYWORDS)
           - topic: topic filter value (in our case, the value of the field TOPICS)
           - sort: order of all courses (in our case, the value of the field SORT BY)
   - No static video cards should be present in the section
   - During the Ajax request, a loader should be present
   - Dropdowns are dynamic (coming from the API):
       - Topic: list of topics
       - Sort by: list of sorts
   - Search value should be initialized by the value q in the API response
   - The list of video cards is coming from courses in the API response
   - API request must be done when:
        - Search value is changing
        - A new Topic is selected
        - A new Sort by is selected

### [6. JSON to XML ](./xml-scripts.js)
Convert all your JSON Ajax call to another API… a XML API!

Copy files - same content, except loading xml-scripts.js instead of script.js
```
    homepage.html -> xml-homepage.html
    pricing.html -> xml-pricing.html
    courses.html -> xml-courses.html
```
And use this API:
```
    quotes: https://smileschool-api.hbtn.info/xml/quotes
    popular tutorials: https://smileschool-api.hbtn.info/xml/popular-tutorials
    latest videos: https://smileschool-api.hbtn.info/xml/latest-videos
    courses: https://smileschool-api.hbtn.info/xml/courses
```
Final result should be the same as the JSON API version