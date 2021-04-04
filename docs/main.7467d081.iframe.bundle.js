(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{403:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8);__webpack_exports__.default={title:"Welcome",parameters:{layout:"centered"}};var Default=function Template(){return"Welcome to my CSS Paint API (🧙‍♂ Houdini)️ experiments."}.bind({});Default.parameters=Object.assign({storySource:{source:"() => {\n    return 'Welcome to my CSS Paint API (🧙‍♂ Houdini)️ experiments.';\n}"}},Default.parameters)},444:function(module,exports,__webpack_require__){__webpack_require__(445),__webpack_require__(599),__webpack_require__(600),__webpack_require__(817),__webpack_require__(821),__webpack_require__(822),__webpack_require__(823),__webpack_require__(819),__webpack_require__(818),__webpack_require__(824),__webpack_require__(820),module.exports=__webpack_require__(792)},512:function(module,exports){},600:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(318)},792:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(318).configure)([__webpack_require__(793),__webpack_require__(795),__webpack_require__(796)],module,!1)}).call(this,__webpack_require__(177)(module))},793:function(module,exports,__webpack_require__){var map={"./welcome.stories.js":403};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=793},795:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=795},796:function(module,exports,__webpack_require__){var map={"./badge/badge.component.stories.js":825,"./button/button.component.stories.js":826,"./card/card.component.stories.js":827,"./circles/circles.worklet.stories.js":828,"./corner/corner.worklet.stories.js":829,"./crystal/crystal.worklet.stories.js":808,"./dots/bg-dots.worklet.stories.js":830,"./edge/edge.worklet.stories.js":831,"./lines/bg-lines.worklet.stories.js":832,"./welcome.stories.js":403};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=796},797:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(798);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},798:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"badge {\n    --kode-labs-circles-width: 1 1 2 4;\n    --kode-labs-circles-opacity: .1 .2 .5 .6;\n    --kode-labs-circles-space: 5px;\n    --kode-labs-edge-direction: to right;\n    --kode-labs-edge-width: 1;\n    --kode-labs-edge-marker: circle;\n\n    display: grid;\n    place-items: center;\n    background: paint(kode-labs-circles);\n    padding: 1.5em;\n    border-image-source: paint(kode-labs-edge);\n    border-image-slice: 0 100;\n    width: 2.5em;\n    height: 2.5em;\n    text-align: center;\n    line-height: 1.5em;\n    color: var(--primary-color);\n    border-right: 100px solid transparent;\n    background-clip: padding-box;\n\n    -webkit-animation: badge-pulse 3s ease-in-out infinite forwards;\n\n            animation: badge-pulse 3s ease-in-out infinite forwards;\n}\n\n@-webkit-keyframes badge-pulse {\n    from {\n        --kode-labs-circles-space: 5px;\n    }\n    50% {\n        --kode-labs-circles-space: 2px;\n    }\n    to {\n        --kode-labs-circles-space: 5px;\n    }\n}\n\n@keyframes badge-pulse {\n    from {\n        --kode-labs-circles-space: 5px;\n    }\n    50% {\n        --kode-labs-circles-space: 2px;\n    }\n    to {\n        --kode-labs-circles-space: 5px;\n    }\n}\n",""]),module.exports=exports},799:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(800);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},800:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"button {\n    padding: .3em;\n    border-radius: 2px;\n    color: var(--bg-color);\n    font-size: 42px;\n    font-weight: bold;\n    border: 20px solid transparent;\n    background: paint(kode-labs-bg-lines), var(--bg-color);\n    border-image-source: paint(kode-labs-corner);\n    border-image-slice: 20;\n    transition: all .3s ease,\n    --kode-labs-corner-color .3s ease,\n    --kode-labs-corner-length .2s ease;\n    outline: none;\n    text-transform: uppercase;\n    font-family: inherit;\n}\n\nbutton[labs-primary] {\n    background: paint(kode-labs-bg-lines), var(--primary-color);\n    background-clip: padding-box;\n}\n\n@media (hover) {\n    button:hover {\n        --kode-labs-corner-length: 20px;\n        transform: scale(1.08);\n    }\n}\n\nbutton:active {\n    --kode-labs-corner-length: 60px;\n    --kode-labs-corner-color: var(--primary-color);\n    transform: scale(1);\n}\n",""]),module.exports=exports},801:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(802);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},802:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"card {\n    white-space: nowrap;\n    letter-spacing: 2px;\n    color: var(--bg-color);\n    font-weight: bold;\n    text-transform: uppercase;\n    background: paint(kode-labs-bg-dots), rgba(255,255,255,.02);\n    --kode-labs-bg-dots-radius: 1;\n    --kode-labs-bg-dots-distance: 10;\n    padding: 1.5em;\n    border: 1px solid var(--border-color);\n    font-size: 1em;\n}\n\ncard[labs-primary] {\n    background: paint(kode-labs-bg-lines), var(--primary-color);\n}\n\ncard[labs-xl] {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .2), 0 14px 40px rgba(0, 0, 0, .2);\n    padding: .3em;\n    font-size: 5em;\n}\n",""]),module.exports=exports},803:function(module,exports){CSS.registerProperty({name:"--kode-labs-circles-width",syntax:"<length>+",initialValue:"1px 1px 2px 4px",inherits:!1}),CSS.registerProperty({name:"--kode-labs-circles-opacity",syntax:"<number>+",initialValue:".1 .2 .5 .6",inherits:!1}),CSS.registerProperty({name:"--kode-labs-circles-space",syntax:"<length>",initialValue:"5px",inherits:!1}),CSS.paintWorklet.addModule("circles/circles.worklet.js")},804:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(805);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},805:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"circles-sample {\n    background: paint(kode-labs-circles);\n    --kode-labs-circles-opacity: .1 .2 .5 .6;\n    padding: 1.5em;\n    width: 1.5em;\n    height: 1.5em;\n    line-height: 1.5em;\n    text-align: center;\n    color: var(--primary-color);\n}\n",""]),module.exports=exports},806:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(807);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},807:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"corner-sample {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    padding: .3em;\n    font-size: 42px;\n    font-weight: bold;\n    border: 20px solid transparent;\n    border-image-source: paint(kode-labs-corner);\n    border-image-slice: 20;\n    background-clip: padding-box;\n    transition: all .3s ease,\n    --kode-labs-corner-color .3s ease,\n    --kode-labs-corner-length .2s ease;\n    outline: none;\n    text-transform: uppercase;\n    font-family: inherit;\n}\n\n@media (hover) {\n    corner-sample:hover {\n        --kode-labs-corner-length: 20px !important;\n        transform: scale(1.08);\n    }\n}\n\ncorner-sample:active {\n    --kode-labs-corner-length: 60px !important;\n    --kode-labs-corner-color: var(--primary-color) !important;\n    transform: scale(1);\n}\n",""]),module.exports=exports},808:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(77),__webpack_require__(8),__webpack_require__(809);__webpack_exports__.default={title:"Paint Worklet / Background / Crystal",parameters:{layout:"centered"},argTypes:{progress:{control:"range"},color:{control:"color"}}};var Default=function Template(_ref){var color=_ref.color,progress=_ref.progress;__webpack_require__.e(12).then(__webpack_require__.t.bind(null,835,7));var component=document.createElement("crystal"),prefix="--kode-labs-crystal-";return component.innerHTML="<span>".concat(progress,"%</span>"),component.style.setProperty("".concat(prefix,"color"),color),component.style.setProperty("".concat(prefix,"progress"),"".concat(progress)),component}.bind({});Default.args={color:"rgba(255,255,255,0.8)",progress:42},Default.parameters=Object.assign({storySource:{source:"({color, progress}) => {\n    import('./crystal.registration');\n    const component = document.createElement('crystal');\n    const prefix = '--kode-labs-crystal-';\n    component.innerHTML= `<span>${progress}%</span>`;\n    component.style.setProperty(`${prefix}color`, color);\n    component.style.setProperty(`${prefix}progress`, `${progress}`);\n    return component;\n}"}},Default.parameters)},809:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(810);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},810:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"crystal {\n    width: 350px;\n    height: 60px;\n    background: red;\n    background: paint(crystal);\n    display: grid;\n    color: var(--color-bg);\n    place-items: center;\n    text-shadow: 1px -1px 0 rgba(255,255,255,.6), 1px 1px 0 rgba(255,255,255,.6), -1px -1px 0 rgba(255,255,255,.6),  -1px 1px 0 rgba(255,255,255,.6);\n    -webkit-animation: progress-42 1s ease-in-out forwards;\n            animation: progress-42 1s ease-in-out forwards; /* initial demo animation*/\n}\n\n@-webkit-keyframes progress-42 {\n    from {\n        --kode-labs-crystal-progress: 0;\n    }\n}\n\n@keyframes progress-42 {\n    from {\n        --kode-labs-crystal-progress: 0;\n    }\n}\n\n",""]),module.exports=exports},811:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(812);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},812:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"bg-dots {\n    background: paint(kode-labs-bg-dots);\n    display: grid;\n    place-items: center;\n    width: 100vw;\n    height: 100vh;\n}\n",""]),module.exports=exports},813:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(814);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},814:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"edge-sample{\n    border-image-source: paint(kode-labs-edge);\n    border-image-slice: 20 33%;\n    /*border-image-width: 0 40px 0 0;*/\n    width: 1.5em;\n    height: 1.5em;\n    text-align: center;\n    line-height: 1.5em;\n    color: var(--primary-color);\n    border-right: 40px solid transparent;\n    border-left: none;\n    background-clip: padding-box;\n}\n\nedge-sample[labs-invert-direction] {\n    border-right: none;\n    border-left: 40px solid transparent;\n}\n",""]),module.exports=exports},815:function(module,exports,__webpack_require__){var api=__webpack_require__(86),content=__webpack_require__(816);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},816:function(module,exports,__webpack_require__){(exports=__webpack_require__(87)(!1)).push([module.i,"bg-lines {\n    background: paint(kode-labs-bg-lines), var(--primary-color);\n\n    padding: .3em;\n    box-sizing: border-box;\n    letter-spacing: 2px;\n    color: var(--bg-color);\n    font-size: 42px;\n    font-weight: bold;\n    text-transform: uppercase;\n    display: grid;\n    place-items: center;\n    width: 100vw;\n    height: 100vh;\n}\n",""]),module.exports=exports},820:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(15),__webpack_require__(42),__webpack_require__(47),__webpack_require__(788),__webpack_require__(39),__webpack_require__(40),__webpack_require__(789),__webpack_require__(790),__webpack_require__(791);var client_api=__webpack_require__(838),esm=__webpack_require__(5),create=__webpack_require__(192),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:Object(create.a)({base:"dark",brandTitle:"kode 🧬 labs | Konstantin Denez | @kdenerz",brandUrl:"https://twitter.com/kdenerz",brandImage:"logo.svg"})}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},825:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(797),__webpack_exports__.default={title:"Components / Badge",parameters:{layout:"centered"},argTypes:{value:{control:"range"}}};var Default=function Template(args){return function badgeComponentFactory(_ref){var value=_ref.value;__webpack_require__.e(4).then(__webpack_require__.t.bind(null,923,7)),Promise.resolve().then(__webpack_require__.t.bind(null,803,7));var host=document.createElement("badge");return host.innerText=value,host}(args)}.bind({});Default.args={value:42},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return badgeComponentFactory(args);\n}"}},Default.parameters)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(799),__webpack_exports__.default={title:"Components / Button",parameters:{layout:"centered"}};var Default=function Template(args){return function buttonComponentFactory(_ref){var label=_ref.label,primary=_ref.primary;__webpack_require__.e(0).then(__webpack_require__.t.bind(null,924,7)),__webpack_require__.e(2).then(__webpack_require__.t.bind(null,925,7));var component=document.createElement("button");return component.innerText=label,primary?component.setAttribute("labs-primary",""):component.removeAttribute("labs-primary"),component}(args)}.bind({});Default.args={label:"Button",primary:!0},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return buttonComponentFactory(args);\n}"}},Default.parameters)},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(801),__webpack_exports__.default={title:"Components / Card",parameters:{layout:"centered"}};var card_component_stories_Template=function Template(args){return function cardComponentFactory(_ref){var text=_ref.text,large=_ref.large,primary=_ref.primary;__webpack_require__.e(0).then(__webpack_require__.t.bind(null,924,7)),__webpack_require__.e(3).then(__webpack_require__.t.bind(null,926,7));var component=document.createElement("card");return component.innerText=text,large?component.setAttribute("labs-xl",""):component.removeAttribute("labs-xl"),primary?component.setAttribute("labs-primary",""):component.removeAttribute("labs-primary"),component}(args)},Large=card_component_stories_Template.bind({});Large.args={text:"primary, large",large:!0,primary:!0};var Default=card_component_stories_Template.bind({});Default.args={text:"Default",large:!1,primary:!1},Large.parameters=Object.assign({storySource:{source:"(args) => {\n    return cardComponentFactory(args);\n}"}},Large.parameters),Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return cardComponentFactory(args);\n}"}},Default.parameters)},828:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(803),__webpack_require__(804),__webpack_exports__.default={title:"Paint Worklet / Border / Circles",parameters:{layout:"centered"},argTypes:{value:{control:"range",min:0,max:100},size:{control:"range",min:1,max:50},space:{control:"range",min:1,max:50}}};var Default=function Template(args){return function circlesSampleComponentFactory(_ref){var value=_ref.value,size=_ref.size,widths=_ref.widths,opacities=_ref.opacities,space=_ref.space,prefix="--kode-labs-circles-",component=document.createElement("circles-sample");return component.innerText=value,component.style.setProperty("padding","".concat(size,"em")),component.style.setProperty("".concat(prefix,"width"),"".concat(widths)),component.style.setProperty("".concat(prefix,"opacity"),"".concat(opacities)),component.style.setProperty("".concat(prefix,"space"),"".concat(space,"px")),component}(args)}.bind({});Default.args={value:42,size:1.5,widths:"1px 1px 2px 4px",opacities:"0.1 0.2 0.5 0.6",space:5},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return circlesSampleComponentFactory(args);\n}"}},Default.parameters)},829:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(806),__webpack_exports__.default={title:"Paint Worklet / Border / Corner",parameters:{layout:"centered"},argTypes:{width:{control:"range"},length:{control:"range"},color:{control:"color"}}};var Default=function Template(args){return function cornerSampleComponentFactory(_ref){var label=_ref.label,color=_ref.color,width=_ref.width,length=_ref.length;__webpack_require__.e(2).then(__webpack_require__.t.bind(null,925,7));var prefix="--kode-labs-corner-",component=document.createElement("corner-sample");return component.innerText=label,component.style.setProperty("".concat(prefix,"width"),"".concat(width,"px")),component.style.setProperty("".concat(prefix,"length"),"".concat(length,"px")),component.style.setProperty("".concat(prefix,"color"),color),component}(args)}.bind({});Default.args={label:"Corner",width:10,length:40,color:"rgba(255,255,255,.9)"},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return cornerSampleComponentFactory(args);\n}"}},Default.parameters)},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(811),__webpack_exports__.default={title:"Paint Worklet / Background / Dots",parameters:{layout:"fullscreen"},argTypes:{color:{control:"color"},radius:{control:"range",min:1,step:1,max:100},distance:{control:"range",min:10,step:1,max:100}}};var Default=function Template(args){return function dotsSampleComponentFactory(_ref){var label=_ref.label,radius=_ref.radius,distance=_ref.distance,color=_ref.color;__webpack_require__.e(3).then(__webpack_require__.t.bind(null,926,7));var div=document.createElement("bg-dots");return div.innerText=label,div.style.setProperty("--kode-labs-bg-dots-radius",radius,"important"),div.style.setProperty("--kode-labs-bg-dots-distance",distance),div.style.setProperty("--kode-labs-bg-dots-color",color),div}(args)}.bind({});Default.args={label:"Dots",radius:2,distance:40,color:"rgba(255,255,255,.1)"},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return dotsSampleComponentFactory(args)\n}"}},Default.parameters)},831:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(813),__webpack_exports__.default={title:"Paint Worklet / Border / Edge",parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["to right","to left"]},marker:{control:"radio",options:["circle","square","no marker"]},lengthAndSliceX:{control:"range",min:0,max:400,step:350}}};var Default=function Template(args){return function edgeSampleComponentFactory(_ref){var label=_ref.label,direction=_ref.direction,marker=_ref.marker,lengthAndSliceX=_ref.lengthAndSliceX;__webpack_require__.e(4).then(__webpack_require__.t.bind(null,923,7));var component=document.createElement("edge-sample");return component.innerText=label,component.style.setProperty("".concat("--kode-labs-edge-","direction"),direction),component.style.setProperty("".concat("--kode-labs-edge-","marker"),marker),component.style.setProperty("border-image-slice","0 ".concat(lengthAndSliceX)),"to left"===direction?(component.setAttribute("labs-invert-direction",""),component.style.setProperty("border-left-width","".concat(lengthAndSliceX,"px"))):(component.removeAttribute("labs-invert-direction"),component.style.setProperty("border-right-width","".concat(lengthAndSliceX,"px"))),component}(args)}.bind({});Default.args={marker:"circle",label:"Edge",direction:"to right",lengthAndSliceX:40},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return edgeSampleComponentFactory(args);\n}"}},Default.parameters)},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(77),__webpack_require__(8),__webpack_require__(35),__webpack_require__(16),__webpack_require__(26),__webpack_require__(28),__webpack_require__(31),__webpack_require__(815),__webpack_exports__.default={title:"Paint Worklet / Background / Lines",parameters:{layout:"fullscreen"},argTypes:{color:{control:"color"},width:{control:"range",min:1,step:1,max:100},gap:{control:"range",min:1,step:1,max:100}}};var Default=function Template(args){return function linesSampleComponentFactory(_ref){var label=_ref.label,gap=_ref.gap,width=_ref.width,color=_ref.color;__webpack_require__.e(0).then(__webpack_require__.t.bind(null,924,7));var component=document.createElement("bg-lines"),prefix="--kode-labs-bg-lines-";component.innerText=label;var style=component.style;return style.setProperty("".concat(prefix,"gap"),"".concat(gap,"px")),style.setProperty("".concat(prefix,"width"),"".concat(width,"px")),style.setProperty("".concat(prefix,"color"),color),component}(args)}.bind({});Default.args={label:"Lines",color:"rgba(0,0,0,.20)",width:1,gap:3},Default.parameters=Object.assign({storySource:{source:"(args) => {\n    return linesSampleComponentFactory(args);\n}"}},Default.parameters)}},[[444,6,7]]]);