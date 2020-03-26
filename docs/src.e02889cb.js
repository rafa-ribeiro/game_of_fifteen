parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dSJW":[function(require,module,exports) {
"use strict";function i(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function t(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function e(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function t(e,s,o,n,h,a){i(this,t),this.game=e,this.value=s,this.width=o,this.height=n,this.rowIndex=h,this.columnIndex=a,this.position=null,this.updateCanvasPosition(),this.speed=0,this.maxSpeed=10,this.isMovingX=!1,this.isMovingY=!1}return e(t,[{key:"updateCanvasPosition",value:function(){this.position={x:this.columnIndex*this.width+10*this.columnIndex+10,y:this.rowIndex*this.height+10*this.rowIndex+10}}},{key:"draw",value:function(i){var t=0===this.value;if(i.fillStyle="rgba(38, 79, 114)",t&&(i.fillStyle="rgba(38, 79, 114, 0.4)"),i.fillRect(this.position.x,this.position.y,this.width,this.height),!t){i.font="40px Arial",i.fillStyle="white",i.textAlign="center",i.textBaseline="middle";var e=this.position.x+this.width/2,s=this.position.y+this.height/2;i.fillText(this.value,e,s)}}},{key:"moveLeft",value:function(){this._moveHorizontally(),this.speed=-this.maxSpeed}},{key:"moveRight",value:function(){this._moveHorizontally(),this.speed=this.maxSpeed}},{key:"_moveHorizontally",value:function(){this.isMovingX=!0,this.isMovingY=!1}},{key:"moveDown",value:function(){this._moveVertically(),this.speed=this.maxSpeed}},{key:"moveUp",value:function(){this._moveVertically(),this.speed=-this.maxSpeed}},{key:"_moveVertically",value:function(){this.isMovingX=!1,this.isMovingY=!0}},{key:"_stopMoving",value:function(){this.isMovingX=!1,this.isMovingY=!1,this.speed=0}},{key:"update",value:function(i){var t=!1;if(this.isMovingX){var e=this.game.board.emptySpace;this.position.x=this.position.x+this.speed,this.speed>0?t=this.position.x>=e.position.x:this.speed<0&&(t=this.position.x<=e.position.x)}else if(this.isMovingY){var s=this.game.board.emptySpace;this.position.y=this.position.y+this.speed,this.speed>0?t=this.position.y>=s.position.y:this.speed<0&&(t=this.position.y<=s.position.y)}t&&(this._stopMoving(),this.game.board.updateBoard(this))}}]),t}();exports.default=s;
},{}],"DZpg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("/src/piece"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),e}var a=function(){function t(o){var n=this;i(this,t),this.boardSpaces=[],this.piecesList=[];this.boardMatrix=[],this.moves=0,this.rowEmptyPiece=null,this.columnEmptyPiece=null,this.emptySpace=null,this.isMoving=!1,r.forEach(function(t,i){t.forEach(function(t,a){n.boardSpaces.push(new e.default(o,t,80,80,i,a))})}),c.forEach(function(t,i){var a=[];t.forEach(function(t,s){var r=new e.default(o,t,80,80,i,s);n.piecesList.push(r),a.push(r),0===t&&(n.emptySpace=r)}),n.boardMatrix.push(Array.from(a))})}return n(t,[{key:"draw",value:function(e){this.boardSpaces.forEach(function(t){t.draw(e)}),this.piecesList.forEach(function(t){t.draw(e)})}},{key:"update",value:function(e){this.piecesList.forEach(function(t){return t.update(e)})}},{key:"moveLeft",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this.emptySpace.columnIndex+1,t=this._getPieceToMoveBy(this.emptySpace.rowIndex,e);t?t.moveLeft():this.isMoving=!1}}},{key:"moveRight",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this.emptySpace.columnIndex-1,t=this._getPieceToMoveBy(this.emptySpace.rowIndex,e);t?t.moveRight():this.isMoving=!1}}},{key:"moveUp",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this.emptySpace.rowIndex+1,t=this._getPieceToMoveBy(e,this.emptySpace.columnIndex);t?t.moveUp():this.isMoving=!1}}},{key:"moveDown",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this.emptySpace.rowIndex-1,t=this._getPieceToMoveBy(e,this.emptySpace.columnIndex);t?t.moveDown():this.isMoving=!1}}},{key:"_getPieceToMoveBy",value:function(e,t){var i=null,o=this.boardMatrix.length,n=this.boardMatrix[0].length;return e>=0&&e<o&&(t>=0&&t<n)&&(i=this.boardMatrix[e][t]),i}},{key:"updateBoard",value:function(e){this.updateBoardMatrix(e),this.moves+=1,this.evaluateGame()}},{key:"updateBoardMatrix",value:function(e){var t=this.emptySpace.rowIndex,i=this.emptySpace.columnIndex,o=e.rowIndex,n=e.columnIndex;e.rowIndex=t,e.columnIndex=i,this.boardMatrix[t][i]=e,e.updateCanvasPosition(),this.emptySpace.rowIndex=o,this.emptySpace.columnIndex=n,this.boardMatrix[o][n]=this.emptySpace,this.emptySpace.updateCanvasPosition(),this.isMoving=!1}},{key:"evaluateGame",value:function(){s(this.boardMatrix)?(console.log("Venci o jogo"),console.log("Jogo ganho com: ",this.moves," movimentos")):console.log("Ainda não")}}]),t}();function s(e){if(!e)return!1;if(e.length!==u.length)return!1;for(var t=u.length,i=u[0].length,o=0;o<t;o++)for(var n=0;n<i;n++){var a=e[o][n],s=u[o][n];if(a.value!==s)return!1}return!0}exports.default=a;var r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c=[[1,2,8,5],[9,7,13,12],[15,14,6,11],[3,0,10,4]],u=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
},{"/src/piece":"dSJW"}],"gFLk":[function(require,module,exports) {
"use strict";function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function o(a){e(this,o),document.addEventListener("keydown",function(e){switch(e.keyCode){case 37:a.board.moveLeft();break;case 39:a.board.moveRight();break;case 38:a.board.moveUp();break;case 40:a.board.moveDown();break;default:console.log(e.keyCode)}})};exports.default=o;
},{}],"HPsM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("/src/board")),t=r(require("/src/input"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}var o=function(){function r(){n(this,r),this.board=new e.default(this),new t.default(this)}return u(r,[{key:"draw",value:function(e){this.board.draw(e)}},{key:"update",value:function(e){this.board.update(e)}}]),r}();exports.default=o;
},{"/src/board":"DZpg","/src/input":"gFLk"}],"H99C":[function(require,module,exports) {
"use strict";var e=t(require("/src/game"));function t(e){return e&&e.__esModule?e:{default:e}}var r=document.getElementById("gameScreen"),a=r.getContext("2d"),n=r.width,u=r.height,i=new e.default,d=0;function c(e){var t=e-d;d=e,a.clearRect(0,0,n,u),i.draw(a),i.update(t),requestAnimationFrame(c)}requestAnimationFrame(c);
},{"/src/game":"HPsM"}]},{},["H99C"], null)
//# sourceMappingURL=src.e02889cb.js.map