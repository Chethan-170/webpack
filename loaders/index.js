import './assets/styles/style.css';
import './assets/styles/style.scss';
import pngImg from './assets/hg.png';
import jpgImg1  from './assets/asset_ic.jpg';
import jpgImg2 from './assets/4399.jpg';
import txt from './assets/test.txt';
import svgImg from './assets/ic_void.svg';

// this is to test css loader and style-loader
const heading = document.createElement('h1');
heading.textContent = 'Webpack CSS Loader Demo';
document.body.appendChild(heading);
// this is to test asset/resource loader for images
const image = document.createElement('img');
image.src = pngImg;
image.height = '200';
image.width = '200';
image.alt = 'Demo Image';
document.body.appendChild(image);
// this is to test asset/inline loader for SVG images
const svg = document.createElement('img');
svg.src = svgImg;
svg.height = '100';
svg.width = '100';
svg.alt = 'SVG Image';
document.body.appendChild(svg);
// this is to test asset/source loader for text files
console.log('Text content:', txt);
// this is to test asset loader for JPG images
const jpgImage1 = document.createElement('img');
jpgImage1.src = jpgImg1;
jpgImage1.height = '200';
jpgImage1.width = '200';
jpgImage1.alt = 'JPG Image 1';
document.body.appendChild(jpgImage1);   
// this is to test asset loader for JPG images
const jpgImage2 = document.createElement('img');
jpgImage2.src = jpgImg2;
jpgImage2.height = '200';      
jpgImage2.width = '200';
jpgImage2.alt = 'JPG Image 2';
document.body.appendChild(jpgImage2);
// adding a paragraph to display the text content
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a paragraph demonstrating the use of CSS and various asset loaders in Webpack.';
document.body.appendChild(paragraph);
// adding a div and span to demonstrate dynamic content creation
const helloWorldDiv = document.createElement('div');
helloWorldDiv.id = 'hello-world-div';
document.body.appendChild(helloWorldDiv);
const spanHelloWorld = document.createElement('span');
spanHelloWorld.id = 'hello-world-span';
spanHelloWorld.textContent = 'Hello, World!';
helloWorldDiv.appendChild(spanHelloWorld);
