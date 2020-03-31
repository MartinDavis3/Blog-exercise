/**
 *
 * JavaScript: Blog Exercise Solution - Martin Davis
 * 
 * Goals:
 * ======
 * - Output into the DOM.
 * - Use a template literal.
 * - Use a for...of loop.
 * - Instantiate an object or object(s) of a class.
 * - Add an element to an array.
 * - Loop through (iterate through) an array.
 * - If you are adding functions or using methods, use ES6 standard.
 */

class Article {
  constructor ( title = 'Blog Title', content = 'Lorem ipsum...' )
  {
    this.title = title;
    this.content = content;
  }
  output ()
  {
    const blogSection = document.querySelector( 'section' );
    blogSection.innerHTML += `
      <h2>${this.title}</h2>
      <p>${this.content}</p>
      `;
  }
}

const blogArticles = [
  new Article(
    'First Day of Class (C#)',
    'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
  ),
  new Article(
    'How to Build Websites! (HTML)',
    'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
  ),
  new Article(
    'Brand new Topic (CSS)',
    'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
  ),
  new Article(
    'Another New Topic!? (JS)',
    'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
  ),
  new Article(
    'Adding on to our JS (TS)',
    'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
  ),
  new Article(
    'Time to React',
    'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
  )
];

const extraArticle = new Article( 'SASS' );
extraArticle.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum purus sit amet neque pretium varius. Nulla ut est eros. Donec pharetra leo eget massa iaculis, sit amet condimentum ex faucibus. Sed arcu urna, molestie nec odio vitae, lobortis lacinia lacus. Nunc dictum, purus quis blandit faucibus, diam libero pretium libero, at tempor odio odio elementum metus. Aliquam varius felis in sapien molestie, ac ultrices justo eleifend. Nulla at velit purus. Suspendisse nec cursus neque, efficitur consequat lorem. Vestibulum ut risus id felis pulvinar blandit sit amet in risus. Morbi maximus condimentum hendrerit. Nulla tempus mauris in efficitur bibendum.'
blogArticles.splice( 3, 0, extraArticle )

for ( let article of blogArticles )
{
  article.output()
}
