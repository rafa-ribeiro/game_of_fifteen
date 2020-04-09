parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dSJW":[function(require,module,exports) {
"use strict";function i(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function t(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function e(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,CanvasRenderingContext2D.prototype.roundRect=function(i,t,e,s,o){return e<2*o&&(o=e/2),s<2*o&&(o=s/2),this.beginPath(),this.moveTo(i+o,t),this.arcTo(i+e,t,i+e,t+s,o),this.arcTo(i+e,t+s,i,t+s,o),this.arcTo(i,t+s,i,t,o),this.arcTo(i,t,i+e,t,o),this.closePath(),this};var s=function(){function t(e,s,o,n,h,a){i(this,t),this.game=e,this.value=s,this.width=o,this.height=n,this.rowIndex=h,this.columnIndex=a,this.position=null,this.updateCanvasPosition(),this.speed=0,this.maxSpeed=10,this.isMovingX=!1,this.isMovingY=!1}return e(t,[{key:"updateCanvasPosition",value:function(){this.position={x:this.columnIndex*this.width+10*this.columnIndex+10,y:this.rowIndex*this.height+10*this.rowIndex+10}}},{key:"draw",value:function(i,t){if("undefined"!==t&&t)return i.roundRect(this.position.x,this.position.y,this.width,this.height,12),i.fillStyle="#f1f3f4",void i.fill();if(!(0===this.value)){i.roundRect(this.position.x,this.position.y,this.width,this.height,10),i.fillStyle="#79bac1",i.fill(),i.font="45px monospace",i.fillStyle="#512b58",i.textAlign="center",i.textBaseline="middle";var e=this.position.x+this.width/2,s=this.position.y+.5*this.height;i.fillText(this.value,e,s)}}},{key:"moveLeft",value:function(){this._moveHorizontally(),this.speed=-this.maxSpeed}},{key:"moveRight",value:function(){this._moveHorizontally(),this.speed=this.maxSpeed}},{key:"_moveHorizontally",value:function(){this.isMovingX=!0,this.isMovingY=!1}},{key:"moveDown",value:function(){this._moveVertically(),this.speed=this.maxSpeed}},{key:"moveUp",value:function(){this._moveVertically(),this.speed=-this.maxSpeed}},{key:"_moveVertically",value:function(){this.isMovingX=!1,this.isMovingY=!0}},{key:"_stopMoving",value:function(){this.isMovingX=!1,this.isMovingY=!1,this.speed=0}},{key:"update",value:function(i){var t=!1;if(this.isMovingX){var e=this.game.board.emptySpace;this.position.x=this.position.x+this.speed,this.speed>0?t=this.position.x>=e.position.x:this.speed<0&&(t=this.position.x<=e.position.x)}else if(this.isMovingY){var s=this.game.board.emptySpace;this.position.y=this.position.y+this.speed,this.speed>0?t=this.position.y>=s.position.y:this.speed<0&&(t=this.position.y<=s.position.y)}t&&(this._stopMoving(),this.game.board.updateBoard(this))}}]),t}();exports.default=s;
},{}],"DZpg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("/src/piece"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}var n={LEFT:0,UP:1,DOWN:2,RIGHT:3},r=function(){function t(a){var o=this;i(this,t),this.game=a,this.boardSpaces=[],this.piecesList=[];this.boardMatrix=[],this.rowEmptyPiece=null,this.columnEmptyPiece=null,this.emptySpace=null,this.isMoving=!1,c.forEach(function(t,i){t.forEach(function(t,n){o.boardSpaces.push(new e.default(a,t,80,80,i,n))})}),h.forEach(function(t,i){var n=[];t.forEach(function(t,r){var s=new e.default(a,t,80,80,i,r);o.piecesList.push(s),n.push(s),0===t&&(o.emptySpace=s)}),o.boardMatrix.push(Array.from(n))}),this.shuffleFromSolvedGame(1500)}return o(t,[{key:"draw",value:function(e){this.boardSpaces.forEach(function(t){t.draw(e,!0)}),this.piecesList.forEach(function(t){t.draw(e)})}},{key:"update",value:function(e){this.piecesList.forEach(function(t){return t.update(e)})}},{key:"shuffleFromSolvedGame",value:function(e){for(var t=n.RIGHT+1,i=0;i<e;){var a=Math.trunc(Math.random()*(+t-0)+0);this._movePieceOn(a)&&(i+=1)}}},{key:"_movePieceOn",value:function(e){var t=this._getPieceToMoveFromEmptySpace(e);return!!t&&(this.updateBoardMatrix(t),!0)}},{key:"_getPieceToMoveFromEmptySpace",value:function(e){var t=this.emptySpace.rowIndex,i=this.emptySpace.columnIndex;switch(e){case n.RIGHT:i=this.emptySpace.columnIndex-1;break;case n.LEFT:i=this.emptySpace.columnIndex+1;break;case n.DOWN:t=this.emptySpace.rowIndex-1;break;case n.UP:t=this.emptySpace.rowIndex+1}return this._getPieceToMoveBy(t,i)}},{key:"moveLeft",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this._getPieceToMoveFromEmptySpace(n.LEFT);e?e.moveLeft():this.isMoving=!1}}},{key:"moveRight",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this._getPieceToMoveFromEmptySpace(n.RIGHT);e?e.moveRight():this.isMoving=!1}}},{key:"moveUp",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this._getPieceToMoveFromEmptySpace(n.UP);e?e.moveUp():this.isMoving=!1}}},{key:"moveDown",value:function(){if(!this.isMoving){this.isMoving=!0;var e=this._getPieceToMoveFromEmptySpace(n.DOWN);e?e.moveDown():this.isMoving=!1}}},{key:"_getPieceToMoveBy",value:function(e,t){var i=null,a=this.boardMatrix.length,o=this.boardMatrix[0].length;return e>=0&&e<a&&(t>=0&&t<o)&&(i=this.boardMatrix[e][t]),i}},{key:"updateBoard",value:function(e){this.updateBoardMatrix(e),this.updateMoves(),this.evaluateGame()}},{key:"updateMoves",value:function(){this.game.increaseMoves()}},{key:"updateBoardMatrix",value:function(e){var t=this.emptySpace.rowIndex,i=this.emptySpace.columnIndex,a=e.rowIndex,o=e.columnIndex;e.rowIndex=t,e.columnIndex=i,this.boardMatrix[t][i]=e,e.updateCanvasPosition(),this.emptySpace.rowIndex=a,this.emptySpace.columnIndex=o,this.boardMatrix[a][o]=this.emptySpace,this.emptySpace.updateCanvasPosition(),this.isMoving=!1}},{key:"evaluateGame",value:function(){s(this.boardMatrix)&&this.game.win()}}]),t}();function s(e){if(!e)return!1;if(e.length!==h.length)return!1;for(var t=h.length,i=h[0].length,a=0;a<t;a++)for(var o=0;o<i;o++){var n=e[a][o],r=h[a][o];if(n.value!==r)return!1}return!0}function u(e,t){for(var i=Array.from(Array(e*t).keys()),a=[],o=0;o<e;o++){for(var n=[],r=0;r<t;r++){var s=i.length,u=Math.random()*(+s-0)+0,c=i.splice(u,1)[0];n.push(c)}a.push(n)}return a}exports.default=r;var c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],h=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
},{"/src/piece":"dSJW"}],"gFLk":[function(require,module,exports) {
"use strict";function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function o(a){e(this,o),document.addEventListener("keydown",function(e){switch(e.keyCode){case 32:a.start();break;case 37:a.board.moveLeft();break;case 39:a.board.moveRight();break;case 38:a.board.moveUp();break;case 40:a.board.moveDown();break;default:console.log(e.keyCode)}})};exports.default=o;
},{}],"HPsM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("/src/board")),t=i(require("/src/input"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var l={MENU:0,RUNNING:1,FINISHED:2},r=function(){function i(e,n){a(this,i),this.board=null,this.gameWidth=e,this.gameHeight=n,this.gameState=l.MENU,this.moves=0,new t.default(this)}return s(i,[{key:"start",value:function(){this.gameState!==l.MENU&&this.gameState!==l.FINISHED||(this.gameState=l.RUNNING,this.board=new e.default(this),this.moves=0)}},{key:"increaseMoves",value:function(){this.moves+=1}},{key:"win",value:function(){this.gameState===l.RUNNING&&(this.gameState=l.FINISHED)}},{key:"draw",value:function(e){this.gameState===l.MENU?this._drawMenuGame(e):this.gameState===l.RUNNING?this._drawRunningGame(e):this.gameState===l.FINISHED&&this._drawMenuWinnerGame(e)}},{key:"_drawRunningGame",value:function(e){this.board.draw(e)}},{key:"_drawMenuGame",value:function(e){e.rect(0,0,this.gameWidth,this.gameHeight),e.fillStyle="rgba(27, 38, 44, 1)",e.fill(),e.font="30px Arial",e.fillStyle="white",e.textAlign="center",e.fillText("Press SPACEBAR To Start",this.gameWidth/2,this.gameHeight/2)}},{key:"_drawMenuWinnerGame",value:function(e){e.rect(0,0,this.gameWidth,this.gameHeight),e.fillStyle="rgba(27, 38, 44, 1)",e.fill(),e.font="60px Arial",e.fillStyle="gold",e.textAlign="center",e.fillText("You Win!",this.gameWidth/2,this.gameHeight/2),e.font="16px Arial",e.fillStyle="white";var t=this.moves;e.fillText("Moves .................................... "+t,this.gameWidth-this.gameWidth/2,this.gameHeight-this.gameHeight/4),e.font="12px Arial",e.fillStyle="lime",e.fillText("(Press SPACEBAR to play again)",this.gameWidth-this.gameWidth/2,this.gameHeight-this.gameHeight/8)}},{key:"update",value:function(e){this.gameState===l.RUNNING&&this.board.update(e)}}]),i}();exports.default=r;
},{"/src/board":"DZpg","/src/input":"gFLk"}],"qshj":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(i,n,o){e(this,t),this.game=i,this.width=n,this.height=o}return i(t,[{key:"draw",value:function(e){e.font="15px monospace",e.textAlign="center",e.fillStyle="#f1f3f4",e.fillText("MOVES",this.width/2,.25*this.height),e.font="40px monospace",e.fillStyle="#512b58",e.textAlign="center",e.fillText(this.game.moves,this.width/2,this.height/1.2)}}]),t}();exports.default=n;
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=r(require("/src/game")),t=r(require("./scoreboard"));function r(e){return e&&e.__esModule?e:{default:e}}var a=document.getElementById("gameScreen"),n=a.getContext("2d"),d=document.getElementById("scoreboard"),u=d.getContext("2d"),c=a.width,i=a.height,o=d.width,m=d.height,g=new e.default(c,i),l=new t.default(g,o,m),s=0;function h(e){var t=e-s;s=e,n.clearRect(0,0,c,i),g.draw(n),g.update(t),u.clearRect(0,0,o,m),l.draw(u),requestAnimationFrame(h)}requestAnimationFrame(h);
},{"/src/game":"HPsM","./scoreboard":"qshj"}]},{},["H99C"], null)
//# sourceMappingURL=src.c7b1cb63.js.map