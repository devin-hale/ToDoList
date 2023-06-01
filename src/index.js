import './style.css';
import renderHeader from './DOM/header.js';
import {Project} from './LOGIC/projects.js';
import {navRender, navItemRender} from './DOM/navMenu.js';

renderHeader();
navRender();

Project.pushPLib(new Project('Work', 'bleh', 'a', 'color', 'This is my project'))
console.log(Project.getPLib()[0])
navItemRender(Project.getPLib()[0]);