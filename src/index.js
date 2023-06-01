import './style.css';
import renderHeader from './DOM/header.js';
import {Project} from './LOGIC/projects.js';
import {navRender, navItemRender, newProjectButton} from './DOM/navMenu.js';

renderHeader();
navRender();

let loadedProj = new Project('Work')

Project.pushPLib(loadedProj)
console.log(Project.getPLib()[0])
navItemRender(Project.getPLib()[0]);
newProjectButton();
