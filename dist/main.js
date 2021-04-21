/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (61:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| }\\n| \\n> <<<<<<< HEAD\\n| // Create New Task  inside the project:\\n|  export function taskList(title , description , dueDate , priority){\");\n\n//# sourceURL=webpack://To-Do-List/./src/createProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"clearInputs\": () => (/* binding */ clearInputs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\r\n  constructor(title, description, dueDate, priority){\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\r\nfunction newTask(){\r\n  const title = document.querySelector('#task-title').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const dueDate = document.querySelector('#dueDate').value;\r\n  const priority = document.querySelector('#priority').value;\r\n  const newT = new Task(title,description,dueDate,priority);\r\n  clearInputs();\r\n  return newT;\r\n}\r\n\r\nfunction clearInputs(){\r\n  document.querySelector('#task-title').value = '';\r\n  document.querySelector('#task-description').value = '';\r\n  document.querySelector('#dueDate').value = '';\r\n  document.querySelector('#priority').value = '';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTask);\n\n//# sourceURL=webpack://To-Do-List/./src/createTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\r\n\r\n\r\n(0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\r\n\r\nconst newProjectBtn = document.querySelector('#new-project-btn');\r\nconst newProjectSection = document.querySelector('#new-project-section');\r\nconst addProjectBtn = document.querySelector('#add-project-btn');\r\nconst newTaskSection = document.querySelector('#new-task-card')\r\nconst newTaskBtn = document.querySelector('#add-task-btn');\r\nconst fieldsRequired = document.querySelector('#required-fields');\r\nconst titleRequired = document.querySelector('#required-title');\r\n\r\nfieldsRequired.classList.add('hide');\r\ntitleRequired.classList.add('hide');\r\nnewProjectSection.classList.add('hide');\r\nnewTaskSection.classList.add('hide');\r\n\r\nfunction makeLoop() {\r\n  const projectCards = document.querySelectorAll('.project-name-card');\r\n  for (let card of projectCards) {\r\n    card.addEventListener('click' , ()=> {\r\n      const taskCard = document.querySelector('#new-task-card');\r\n      const projectTitleInTaskCard = document.querySelector('#new-project-task');\r\n      projectTitleInTaskCard.textContent = card.innerText;\r\n      taskCard.classList.remove('hide');\r\n      document.querySelector('#new-project-section').classList.add('hide');\r\n      document.querySelector('#new-project-section').classList.remove('show');\r\n      taskCard.classList.add('show');\r\n      const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectTitleInTaskCard.textContent);\r\n      const index = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(project);\r\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(index);\r\n    })\r\n  }\r\n}\r\n\r\nmakeLoop();\r\n\r\nnewProjectBtn.addEventListener('click' , ()=>{\r\n  fieldsRequired.classList.add('hide');\r\n  fieldsRequired.classList.remove('show');\r\n  let x = document.querySelector('.task-box');\r\n  while(x != null)\r\n  {\r\n    x.remove(x.selectedIndex);\r\n    x = document.querySelector('.task-box');\r\n  }\r\n  newProjectSection.classList.add('show');\r\n  newProjectSection.classList.remove('hide');\r\n  newTaskSection.classList.remove('show');\r\n  newTaskSection.classList.add('hide');\r\n})\r\n\r\naddProjectBtn.addEventListener('click' , ()=>{\r\n  const title = document.querySelector('#project-title').value;\r\n  const isPresent = (project) => project.title === title;\r\n  if (_createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.some(isPresent)) {\r\n    titleRequired.innerText = \"The name of the project is present before!\";\r\n    titleRequired.classList.add('show');\r\n    titleRequired.classList.remove('hide');\r\n  }\r\n  else {\r\n    if (!title) {\r\n      titleRequired.classList.add('show');\r\n      titleRequired.classList.remove('hide');\r\n    }\r\n    else {\r\n      titleRequired.classList.add('hide');\r\n      titleRequired.classList.remove('show');\r\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addNewProject)();\r\n      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();\r\n      newProjectSection.classList.add('hide');\r\n      newProjectSection.classList.remove('show');\r\n      document.querySelector('#project-title').value = '';\r\n      makeLoop();\r\n    }\r\n  }\r\n})\r\n\r\nnewTaskBtn.addEventListener('click', () => {\r\n  const title = document.querySelector('#task-title').value;\r\n  const description = document.querySelector('#task-description').value;\r\n  const dueDate = document.querySelector('#dueDate').value;\r\n  const priority = document.querySelector('#priority').value;\r\n  const projectName = document.querySelector('#new-project-task').innerText;\r\n  const project = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.find(name => name.title == projectName);\r\n  if (!title || !description || !dueDate ||!priority) {\r\n    fieldsRequired.classList.add('show');\r\n    fieldsRequired.classList.remove('hide');\r\n  }\r\n  else {\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addTask)(project,(0,_createTask__WEBPACK_IMPORTED_MODULE_1__.newTask)());\r\n    let x = document.querySelector('.task-box');\r\n    while(x != null)\r\n    {\r\n      x.remove(x.selectedIndex);\r\n      x = document.querySelector('.task-box');\r\n    }\r\n    const index = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectsArray.indexOf(project);\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(index);\r\n    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.clearInputs)();\r\n    fieldsRequired.classList.add('hide');\r\n    fieldsRequired.classList.remove('show');\r\n  }\r\n});\n\n//# sourceURL=webpack://To-Do-List/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;