import './style.css';
import img  from './asset_ic.jpg';

const heading = document.createElement('h1');
heading.textContent = 'Webpack CSS Loader Demo';

const image = document.createElement('img');
image.src = img;
image.height = '200';
image.width = '200';
image.alt = 'Demo Image';

document.body.appendChild(heading);
document.body.appendChild(image);