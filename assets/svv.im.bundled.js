var svv =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SubtitleScript = exports.Subtitle = exports.LoadingCube = exports.Loading = exports.TriangleClipGrid = exports.TriangleMesh = exports.WillApp = exports.WaveApp = exports.TriangleClipGridApp = exports.TriOverlapApp = exports.StarfieldApp = exports.SplotchApp = exports.SmileApp = exports.ShadyHillApp = exports.RibbonApp = exports.QuentinApp = exports.OverlapApp = exports.InstancedHillApp = exports.KanyeApp = exports.GraveyardApp = exports.GrassApp = exports.GoldGridApp = exports.GeodeApp = exports.FlatApp = exports.FaceApp = exports.DripApp = exports.DontYouThinkApp = exports.CubeApp = exports.Diagonal01App = exports.CouchApp = exports.CircleGridApp = exports.CircleApp = undefined;

	var _CircleApp = __webpack_require__(1);

	var _CircleApp2 = _interopRequireDefault(_CircleApp);

	var _CircleGridApp = __webpack_require__(6);

	var _CircleGridApp2 = _interopRequireDefault(_CircleGridApp);

	var _CouchApp = __webpack_require__(7);

	var _CouchApp2 = _interopRequireDefault(_CouchApp);

	var _CubeApp = __webpack_require__(9);

	var _CubeApp2 = _interopRequireDefault(_CubeApp);

	var _Diagonal01App = __webpack_require__(10);

	var _Diagonal01App2 = _interopRequireDefault(_Diagonal01App);

	var _DontYouThinkApp = __webpack_require__(15);

	var _DontYouThinkApp2 = _interopRequireDefault(_DontYouThinkApp);

	var _DripApp = __webpack_require__(18);

	var _DripApp2 = _interopRequireDefault(_DripApp);

	var _FaceApp = __webpack_require__(20);

	var _FaceApp2 = _interopRequireDefault(_FaceApp);

	var _GeodeApp = __webpack_require__(25);

	var _GeodeApp2 = _interopRequireDefault(_GeodeApp);

	var _GrassApp = __webpack_require__(27);

	var _GrassApp2 = _interopRequireDefault(_GrassApp);

	var _GraveyardApp = __webpack_require__(29);

	var _GraveyardApp2 = _interopRequireDefault(_GraveyardApp);

	var _InstancedHillApp = __webpack_require__(35);

	var _InstancedHillApp2 = _interopRequireDefault(_InstancedHillApp);

	var _KanyeApp = __webpack_require__(39);

	var _KanyeApp2 = _interopRequireDefault(_KanyeApp);

	var _OverlapApp = __webpack_require__(46);

	var _OverlapApp2 = _interopRequireDefault(_OverlapApp);

	var _QuentinApp = __webpack_require__(47);

	var _QuentinApp2 = _interopRequireDefault(_QuentinApp);

	var _RibbonApp = __webpack_require__(48);

	var _RibbonApp2 = _interopRequireDefault(_RibbonApp);

	var _ShadyHillApp = __webpack_require__(49);

	var _ShadyHillApp2 = _interopRequireDefault(_ShadyHillApp);

	var _SmileApp = __webpack_require__(50);

	var _SmileApp2 = _interopRequireDefault(_SmileApp);

	var _SplotchApp = __webpack_require__(52);

	var _SplotchApp2 = _interopRequireDefault(_SplotchApp);

	var _StarfieldApp = __webpack_require__(53);

	var _StarfieldApp2 = _interopRequireDefault(_StarfieldApp);

	var _TriGridApp = __webpack_require__(54);

	var _TriGridApp2 = _interopRequireDefault(_TriGridApp);

	var _TriOverlapApp = __webpack_require__(55);

	var _TriOverlapApp2 = _interopRequireDefault(_TriOverlapApp);

	var _TriangleClipGridApp = __webpack_require__(56);

	var _TriangleClipGridApp2 = _interopRequireDefault(_TriangleClipGridApp);

	var _WaveApp = __webpack_require__(57);

	var _WaveApp2 = _interopRequireDefault(_WaveApp);

	var _WillApp = __webpack_require__(60);

	var _WillApp2 = _interopRequireDefault(_WillApp);

	var _GoldGridApp = __webpack_require__(61);

	var _Loading = __webpack_require__(62);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _LoadingCube = __webpack_require__(64);

	var _LoadingCube2 = _interopRequireDefault(_LoadingCube);

	var _TriangleClipGrid = __webpack_require__(66);

	var _TriangleClipGrid2 = _interopRequireDefault(_TriangleClipGrid);

	var _TriangleMesh = __webpack_require__(22);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	var _Subtitles = __webpack_require__(68);

	var _chatBox = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Exports

	// ...
	exports.CircleApp = _CircleApp2.default;
	exports.CircleGridApp = _CircleGridApp2.default;
	exports.CouchApp = _CouchApp2.default;
	exports.Diagonal01App = _Diagonal01App2.default;
	exports.CubeApp = _CubeApp2.default;
	exports.DontYouThinkApp = _DontYouThinkApp2.default;
	exports.DripApp = _DripApp2.default;
	exports.FaceApp = _FaceApp2.default;
	exports.FlatApp = _GoldGridApp.FlatApp;
	exports.GeodeApp = _GeodeApp2.default;
	exports.GoldGridApp = _GoldGridApp.GoldGridApp;
	exports.GrassApp = _GrassApp2.default;
	exports.GraveyardApp = _GraveyardApp2.default;
	exports.KanyeApp = _KanyeApp2.default;
	exports.InstancedHillApp = _InstancedHillApp2.default;
	exports.OverlapApp = _OverlapApp2.default;
	exports.QuentinApp = _QuentinApp2.default;
	exports.RibbonApp = _RibbonApp2.default;
	exports.ShadyHillApp = _ShadyHillApp2.default;
	exports.SmileApp = _SmileApp2.default;
	exports.SplotchApp = _SplotchApp2.default;
	exports.StarfieldApp = _StarfieldApp2.default;
	exports.TriOverlapApp = _TriOverlapApp2.default;
	exports.TriangleClipGridApp = _TriangleClipGridApp2.default;
	exports.WaveApp = _WaveApp2.default;
	exports.WillApp = _WillApp2.default;
	exports.TriangleMesh = _TriangleMesh2.default;
	exports.TriangleClipGrid = _TriangleClipGrid2.default;
	exports.Loading = _Loading2.default;
	exports.LoadingCube = _LoadingCube2.default;
	exports.Subtitle = _Subtitles.Subtitle;
	exports.SubtitleScript = _Subtitles.SubtitleScript;

	// Layout stuff

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _TriGrid = __webpack_require__(3);

	var _TriGrid2 = _interopRequireDefault(_TriGrid);

	var _colors = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CircleApp = function (_App) {
	  _inherits(CircleApp, _App);

	  function CircleApp(params) {
	    _classCallCheck(this, CircleApp);

	    var _this = _possibleConstructorReturn(this, (CircleApp.__proto__ || Object.getPrototypeOf(CircleApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(CircleApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.grid = new _TriGrid2.default(4, 4, 60, 60, 'red');
	      this.setupDots();
	    }
	  }, {
	    key: 'setupDots',
	    value: function setupDots() {
	      var x = Math.floor(this.width * Math.random());
	      var y = Math.floor(this.width * Math.random());
	      var size = 10;

	      var r = Math.floor(Math.random() * 255);
	      var g = Math.floor(Math.random() * 255);
	      var b = Math.floor(Math.random() * 255);
	      var a = 1;
	      var rgb = (0, _colors.rgba)(r, g, b, a);
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "white";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      ctx.save();
	      ctx.globalCompositeOperation = 'darken';
	      this.grid.draw(ctx);
	      ctx.restore();
	    }
	  }]);

	  return CircleApp;
	}(_App3.default);

	exports.default = CircleApp;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	  function App(params) {
	    _classCallCheck(this, App);
	  }

	  _createClass(App, [{
	    key: 'setup',
	    value: function setup(params) {
	      throw new Error('Calling empty setup function');
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      throw new Error('Calling empty update function');
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      throw new Error('Calling empty draw function');
	    }
	  }, {
	    key: 'loop',
	    value: function loop(params) {
	      requestAnimationFrame(function () {
	        this.loop(params);
	      }.bind(this));
	      this.update(params);
	      this.draw();
	    }
	  }]);

	  return App;
	}();

	exports.default = App;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tri = __webpack_require__(4);

	var _Tri2 = _interopRequireDefault(_Tri);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TriGrid = function () {
	  function TriGrid(x, y, rad, size, color, theta) {
	    _classCallCheck(this, TriGrid);

	    this.theta = theta;
	    this.x = x;
	    this.y = y;
	    this.dx = this.rad;
	    this.dy = this.rad;
	    this.dots = [];
	    this.size = size;
	    this.rad = rad;
	    this.col = color;
	    this.dx = 1.73 / 2. * this.rad;
	    this.dy = this.rad / 2.;

	    // Final
	    this.setup();
	  }

	  _createClass(TriGrid, [{
	    key: 'get',
	    value: function get(i, j) {

	      var row = Math.floor(i / 2);

	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      var p1 = this.get(1, 1);
	      var p2 = this.get(2, 1);
	      var p3 = this.get(3, 1);
	      var p4 = this.get(4, 1);
	      var p5 = this.get(5, 1);

	      var q1 = this.get(1, 2);
	      var q2 = this.get(2, 2);
	      var q3 = this.get(3, 2);
	      var q4 = this.get(4, 2);
	      var q5 = this.get(5, 2);

	      var r2 = this.get(2, 3);
	      var s2 = this.get(2, 4);

	      this.grid = [new _Tri2.default(p1.x, p1.y, this.rad, 'black', -Math.PI / 2.), new _Tri2.default(p2.x, p2.y, this.rad, 'cyan', Math.PI / 2.), new _Tri2.default(p3.x, p3.y, this.rad, 'magenta', -Math.PI / 2.), new _Tri2.default(p4.x, p4.y, this.rad, 'gray', Math.PI / 2.), new _Tri2.default(p5.x, p5.y, this.rad, 'pink', -Math.PI / 2.), new _Tri2.default(q1.x, q1.y, this.rad, 'black', Math.PI / 2.), new _Tri2.default(q2.x, q2.y, this.rad, 'red', -Math.PI / 2.), new _Tri2.default(q3.x, q3.y, this.rad, 'magenta', Math.PI / 2.), new _Tri2.default(q4.x, q4.y, this.rad, 'red', -Math.PI / 2.), new _Tri2.default(q5.x, q5.y, this.rad, 'pink', Math.PI / 2.), new _Tri2.default(r2.x, r2.y, this.rad, 'yellow', Math.PI / 2.), new _Tri2.default(s2.x, s2.y, this.rad, 'blue', -Math.PI / 2.)];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var self = this;
	      ctx.save();
	      self.grid.forEach(function (tri, i) {
	        tri.draw(ctx);
	      });
	      ctx.restore();
	    }
	  }]);

	  return TriGrid;
	}();

	exports.default = TriGrid;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tri = function () {
	  function Tri() {
	    _classCallCheck(this, Tri);
	  }

	  _createClass(Tri, [{
	    key: "constuctor",
	    value: function constuctor(x, y, rad, color, theta, up) {
	      this.x = x;
	      this.y = y;
	      this.rad = rad;
	      this.color = color;
	      this.theta = theta;
	      this.up = up;
	    }
	  }]);

	  return Tri;
	}();

	exports.default = Tri;


	Tri.prototype.draw = function (ctx) {
	  var sig = this.up ? -1 : +1;
	  var t = this.theta;

	  ctx.save();
	  ctx.beginPath();
	  ctx.fillStyle = this.color;
	  ctx.strokeStyle = this.color;
	  ctx.lineWidth = 0.90;

	  ctx.moveTo(Math.round(this.x + this.rad * Math.cos(t)), Math.round(this.y + this.rad * Math.sin(t)));

	  for (var i = 1; i < 3; i++) {
	    var theta = i * 2 * Math.PI / 3;
	    var u = this.x + sig * this.rad * Math.cos(theta + t);
	    var v = this.y + sig * this.rad * Math.sin(theta + t);
	    u = Math.round(u);
	    v = Math.round(v);
	    ctx.lineTo(u, v);
	  }

	  ctx.closePath();
	  ctx.stroke();
	  ctx.fill();

	  var d = 1.73 / 2. * this.rad;
	  //  var w = 1.73*this.rad;
	  //  var h = 1.5*this.rad;
	  //  var x = this.x - w/2.;
	  //  var y = this.y - this.rad;
	  //  ctx.beginPath();
	  //  ctx.strokeStyle = 'black';
	  //  ctx.rect(x, y, w, h);
	  //  ctx.stroke();

	  //  ctx.beginPath();
	  //  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
	  //  ctx.stroke();
	  ctx.restore();
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function rgba(r, g, b, a) {
	  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
	}

	function randomRGB() {
	  var r = Math.floor(Math.random() * 255);
	  var g = Math.floor(Math.random() * 255);
	  var b = Math.floor(Math.random() * 255);
	  var a = 1;
	  return rgba(r, g, b, a);
	}

	exports.rgba = rgba;
	exports.randomRGB = randomRGB;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dot = function () {
	  function Dot(x, y, rad, color) {
	    _classCallCheck(this, Dot);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	    this.col = color;
	  }

	  _createClass(Dot, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.fillStyle = this.col;
	      ctx.lineWidth = "1";
	      ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
	      ctx.fill();
	    }
	  }]);

	  return Dot;
	}();

	var Grid = function () {
	  function Grid(x, y, rad, size, color, theta) {
	    _classCallCheck(this, Grid);

	    this.theta = theta;
	    this.x = x;
	    this.y = y;
	    this.dx = this.rad;
	    this.dy = this.rad;
	    this.dots = [];
	    this.size = size;
	    this.rad = rad;
	    this.col = color;
	    this.setup();
	    // this.center_dot = new Dot(this.x, this.y, this.rad, 'white');
	  }

	  _createClass(Grid, [{
	    key: 'setup',
	    value: function setup() {
	      var self = this;
	      var rows_x = 2 * this.size + 1;
	      var rows_y = 2 * this.size + 1;

	      self.dots = new Array(rows_y);

	      for (var i = 0; i < self.dots.length; i++) {
	        self.dots[i] = new Array(rows_x);
	      }

	      var center = [this.x, this.y];

	      for (var i = 0; i < self.dots.length; i++) {
	        var row = self.dots[i];
	        for (var j = 0; j < row.length; j++) {

	          var u = i - this.size;
	          var v = j - this.size;
	          var dxy = 2 * this.rad + 10;

	          if (j % 2 == 1) {
	            u += 0.5;
	          }

	          var x = u * dxy;
	          var y = v * dxy;
	          var t = this.theta;

	          x = x * Math.cos(t) - y * Math.sin(t);
	          y = x * Math.sin(t) + y * Math.cos(t);

	          x += this.x;
	          y += this.y;
	          self.dots[i][j] = new Dot(x, y, self.rad, this.col);
	        }
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var self = this;
	      ctx.save();
	      self.dots.forEach(function (row, i) {
	        row.forEach(function (dot, j) {
	          dot.draw(ctx);
	        });
	      });
	      // self.center_dot.draw(ctx);
	      ctx.restore();
	    }
	  }]);

	  return Grid;
	}();

	var CircleGridApp = function (_App) {
	  _inherits(CircleGridApp, _App);

	  function CircleGridApp(params) {
	    _classCallCheck(this, CircleGridApp);

	    var _this = _possibleConstructorReturn(this, (CircleGridApp.__proto__ || Object.getPrototypeOf(CircleGridApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(CircleGridApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.setupDots();
	    }
	  }, {
	    key: 'setupDots',
	    value: function setupDots() {
	      var x = Math.floor(this.width * Math.random());
	      var y = Math.floor(this.width * Math.random());
	      var size = Math.floor(15 + 30 * Math.random());
	      var theta2 = Math.random() * Math.PI / 20 - Math.PI / 20;

	      this.grid1 = new Grid(x, y, size, 29, 'rgba(255, 0, 0, 1)', 0);
	      this.grid2 = new Grid(x, y, size, 29, 'rgba(0, 200, 255, 1)', theta2);
	    }
	  }, {
	    key: 'update',
	    value: function update(_) {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "white";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      ctx.save();
	      ctx.globalCompositeOperation = 'darken';
	      this.grid1.draw(ctx);
	      this.grid2.draw(ctx);
	      ctx.restore();
	    }
	  }]);

	  return CircleGridApp;
	}(_App3.default);

	exports.default = CircleGridApp;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Couch = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App3 = __webpack_require__(2);

	var _App4 = _interopRequireDefault(_App3);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *
	 *
	 *
	 */

	var CouchApp = function (_App) {
	  _inherits(CouchApp, _App);

	  function CouchApp(params) {
	    _classCallCheck(this, CouchApp);

	    var _this = _possibleConstructorReturn(this, (CouchApp.__proto__ || Object.getPrototypeOf(CouchApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    return _this;
	  }

	  _createClass(CouchApp, [{
	    key: 'init',
	    value: function init() {
	      var self = this;

	      // okay
	      console.log("!?!?", 1);
	      self.ambientColor = [0xCF, 0xCF, 0xCF];
	      self.pointColor = [0x66, 0x66, 0x66];

	      var w = this.el.parentElement.offsetWidth;
	      var h = this.el.parentElement.offsetHeight;

	      self.app.width = w;
	      self.app.height = h;
	      self.app.view_angle = 15;
	      self.app.aspect = w / h;
	      self.app.near = 0.1;
	      self.app.far = 10000;
	      self.app.iterations = 0;
	      self.app.time = 0;

	      self.params = { y: 0, speed: 30.0 };
	      self.scene = new THREE.Scene();
	      self.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      if (!this.renderer) {
	        this.renderer = new THREE.CanvasRenderer();
	      }

	      self.camera = {};
	      self.camera.persp = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      console.log(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // self.camera.eye      = new THREE.Vector3(0, 0, 0);
	      // self.camera.dest     = new THREE.Vector3(0, 0, 0);
	      //// self.camera.position = new THREE.Vector3(0, 0, 3);

	      var manager = new THREE.LoadingManager();
	      manager.onProgress = function () {};

	      var loader = new THREE.OBJLoader(manager);

	      this.renderer.setSize(this.app.width, this.app.height);

	      this.couches = new Array();

	      this.pointLight1 = new THREE.PointLight(0x446666);
	      this.pointLight2 = new THREE.PointLight(0x664444);
	      this.ambientLight = new THREE.AmbientLight(0x999999);
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      var scene = this.scene;

	      var COUCH_TIME = 1800;

	      setInterval(function () {
	        self.addCouch();
	      }, COUCH_TIME);

	      setTimeout(function () {
	        setInterval(function () {
	          self.removeCouch();
	        }, COUCH_TIME);
	      }, 13000);

	      this.renderer.setClearColor(new THREE.Color(0xFFFFFF));
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.app.time += .00005;

	      this.camera.persp.position.set(0, 15, 0);
	      this.camera.persp.up = new THREE.Vector3(0, 1, 0);
	      this.camera.persp.lookAt(new THREE.Vector3(0, 0, 0));

	      this.pointLight1.position.set(-20, 25, 0);
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));

	      this.pointLight2.position.set(20, 25, 0);
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      for (var i = 0; i < this.couches.length; i++) {
	        this.couches[i].update();
	      }
	    }

	    // Draw cube to scene

	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera.persp);
	    }
	  }, {
	    key: 'addCouch',
	    value: function addCouch() {
	      var self = this;
	      var couch = new Couch();

	      // let geometry = new THREE.BoxGeometry( 200, 200, 200 );
	      // let material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
	      // let cube = new THREE.Mesh( geometry, material );
	      // self.scene.add(cube);

	      couch.loaded(function () {
	        if (!couch.obj) return;

	        self.couches.push(couch);
	        var x = self.scene.add(self.couches[self.couches.length - 1].obj);
	      });
	    }
	  }, {
	    key: 'removeCouch',
	    value: function removeCouch() {
	      var self = this;
	      var obj = self.couches.shift();
	      self.scene.remove(obj.obj);
	    }
	  }]);

	  return CouchApp;
	}(_App4.default);

	exports.default = CouchApp;

	var Couch = exports.Couch = function (_App2) {
	  _inherits(Couch, _App2);

	  _createClass(Couch, [{
	    key: 'init',
	    value: function init() {
	      this.manager = new THREE.LoadingManager();
	      this.manager.onProgress = function () {};
	      this.loader = new THREE.OBJLoader(this.manager);
	    }
	  }]);

	  function Couch(params) {
	    _classCallCheck(this, Couch);

	    var _this2 = _possibleConstructorReturn(this, (Couch.__proto__ || Object.getPrototypeOf(Couch)).call(this, params));

	    var self = _this2;

	    // Related to the Object
	    self.obj_file = 'obj/Couch.obj';
	    self.obj = undefined;
	    self.is_loaded = false;

	    var x = 8.0;
	    var y = 8 * (2 * Math.random() - 1.0);
	    var z = 2 * Math.random() - 1.0;

	    var xr = Math.random() * 1.0 - 0.5;
	    var yr = Math.random() * 1.0 - 0.5;
	    var zr = Math.random() * 1.0 - 0.5;

	    self.position = { x: x, y: y, z: z };
	    self.velocity = { x: -12.0, y: 0.0, z: 0.0 };
	    self.acceleration = { x: 0.0, y: 0.0, z: 0.0 };

	    self.rotation = { x: 0.0, y: 0.0, z: 0.0 };
	    self.rotation_vel = { x: xr, y: yr, z: zr };

	    self.time_step = 0.005 * Math.random() + 0.005;

	    self.color = [0, 0, 0];

	    self.init();

	    // Callback functions
	    self.success = undefined;
	    self.failure = undefined;

	    self.finished_loading = function () {
	      if (typeof self.success === 'function') self.success.apply(self);
	      self.is_loaded = true;
	    };

	    setTimeout(function () {
	      self.load(self.obj_file);
	    }, 1000);
	    return _this2;
	  }

	  _createClass(Couch, [{
	    key: 'load',
	    value: function load(file_name) {
	      var self = this;
	      this.loader.load(self.obj_file, function (object) {
	        self.obj = object;
	        self.obj.position.x = self.position.x;
	        self.obj.position.y = self.position.y;
	        self.obj.position.z = self.position.z;
	        self.finished_loading();
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var self = this;

	      var t = self.time_step;

	      self.velocity.x += t * self.acceleration.x;
	      self.velocity.y += t * self.acceleration.y;
	      self.velocity.z += t * self.acceleration.z;

	      self.position.x += t * self.velocity.x;
	      self.position.y += t * self.velocity.y;
	      self.position.z += t * self.velocity.z;

	      self.rotation.x += t * self.rotation_vel.x;
	      self.rotation.y += t * self.rotation_vel.y;
	      self.rotation.z += t * self.rotation_vel.z;

	      self.obj.position.set(this.position.x, this.position.y, this.position.z);

	      self.obj.rotation.x = self.rotation.x;
	      self.obj.rotation.y = self.rotation.y;
	      self.obj.rotation.z = self.rotation.z;
	    }
	  }, {
	    key: 'loaded',
	    value: function loaded(success) {
	      this.success = success;
	    }
	  }]);

	  return Couch;
	}(_App4.default);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = THREE;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var THREE = __webpack_require__(8);

	var CubeApp = function (_App) {
	  _inherits(CubeApp, _App);

	  function CubeApp(params) {
	    _classCallCheck(this, CubeApp);

	    return _possibleConstructorReturn(this, (CubeApp.__proto__ || Object.getPrototypeOf(CubeApp)).call(this, params));
	  }

	  _createClass(CubeApp, [{
	    key: 'setup',
	    value: function setup(params) {}
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }]);

	  return CubeApp;
	}(_App3.default);

	exports.default = CubeApp;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _track = __webpack_require__(14);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Diagonal01App = function (_QuentinLike) {
	  _inherits(Diagonal01App, _QuentinLike);

	  function Diagonal01App(params) {
	    _classCallCheck(this, Diagonal01App);

	    var _this = _possibleConstructorReturn(this, (Diagonal01App.__proto__ || Object.getPrototypeOf(Diagonal01App)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(Diagonal01App, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 10000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.pointLight1 = new THREE.PointLight(0x446666);
	      this.pointLight2 = new THREE.PointLight(0x664444);
	      this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setClearColor(new THREE.Color(0xFFEEFF));

	      this.loadObj();
	      this.app.time = 0;

	      var mat = new THREE.MeshPhongMaterial({ color: 0xEEFFFF });

	      for (var i = 0; i < 5; i++) {
	        for (var j = 0; j < 10; j++) {
	          var x = 2 * (i - 2);
	          var y = 0;
	          var z = -3 * j - 1;

	          var box = new THREE.BoxGeometry(1.5, 2 + j, 2);
	          var mesh = new THREE.Mesh(box, mat);
	          mesh.position.set(x, y, z);
	          this.scene.add(mesh);
	        }
	      }

	      this.sequencer = new _track.CameraSequence();
	      this.sequencer.add(new _track.LinearCameraTrack([0, 0, 40], [0, 0, 20]), 1.0);
	      this.sequencer.add(new _track.LinearCameraTrack([0, 0, 20], [0, 0, 40]), 1.0);

	      this.cameraTrack = this.quentin(this.camera.position, (0, _math.scale)(this.camera.position, 0.75));

	      this.camera.position.set(0, 0, 40);

	      var camera_pos = [this.camera.position.x, this.camera.position.y, this.camera.position.z];

	      var p = this.getPlane(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.backwall = this.getPlaneWidth(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.view_angle = this.getFov(this.backwall, camera_pos, [0, 0, 0]);

	      this.scene.add(this.getDot(p[0]));
	      this.scene.add(this.getDot(p[1]));
	      this.scene.add(this.getDot(p[2]));
	      this.scene.add(this.getDot(p[3]));
	    }
	  }, {
	    key: 'loadObj',
	    value: function loadObj() {
	      this.obj_file = 'obj/skull.obj';
	      var manager = new THREE.LoadingManager();
	      manager.onProgress = function () {};
	      var loader = new THREE.OBJLoader(manager);

	      loader.load(this.obj_file, function (object) {
	        object.position.x = 0;
	        object.position.y = -1.5;
	        object.position.z = 0;
	        this.scene.add(object);
	        console.log("Added");
	      }.bind(this));
	    }
	  }, {
	    key: 'getDot',
	    value: function getDot(_ref, color) {
	      var _ref2 = _slicedToArray(_ref, 3),
	          x = _ref2[0],
	          y = _ref2[1],
	          z = _ref2[2];

	      color = color || 0x000000;
	      var dotGeometry = new THREE.Geometry();
	      dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
	      var dotMaterial = new THREE.PointsMaterial({ size: 3, sizeAttenuation: false, color: color });
	      return new THREE.Points(dotGeometry, dotMaterial);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.app.time += .01;
	      var t = this.app.time / 3.0 % 2.0;

	      var x = 0;
	      var y = 0;
	      var z = 40;

	      var p = [0, 0, 40];
	      var q = [0, 0, 1.5];

	      var a = 15;
	      var b = 15;

	      var cameraState = this.sequencer.at(t);

	      var _cameraState$position = _slicedToArray(cameraState.position, 3);

	      x = _cameraState$position[0];
	      y = _cameraState$position[1];
	      z = _cameraState$position[2];


	      this.camera.position.set(x, y, z);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	      // this.camera.fov = this.getFov(this.backwall, [x, y, z], [0, 0, 0]);
	      // this.camera.updateProjectionMatrix();

	      this.pointLight1.position.set(-20, 25, 0);
	      this.pointLight1.lookAt(new THREE.Vector2(0, 0, 0));

	      this.pointLight2.position.set(20, 25, 0);
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return Diagonal01App;
	}(_Quentin2.default);

	exports.default = Diagonal01App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _math = __webpack_require__(12);

	var _math2 = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuentinLike = function (_App) {
	  _inherits(QuentinLike, _App);

	  function QuentinLike() {
	    _classCallCheck(this, QuentinLike);

	    return _possibleConstructorReturn(this, (QuentinLike.__proto__ || Object.getPrototypeOf(QuentinLike)).apply(this, arguments));
	  }

	  _createClass(QuentinLike, [{
	    key: 'quentin',

	    /**
	     * @param p start position
	     * @param q stop position
	     * @param theta start angle
	     * @param fi stop angle
	     * @param steps
	     */
	    value: function quentin(p, q, steps) {
	      steps = steps || 50;
	      var theta = this.camera.view_angle * Math.PI / 2;
	      var fi = 24 * Math.PI / 2;

	      // Get series of x's and theta's
	      var xs = (0, _math.line)(p, q, steps);
	      var ts = (0, _math.line)(theta, fi, steps);

	      var position = (0, _math2.add)((0, _math2.scale)(p, 1 - xs), (0, _math2.scale)(q, xs));

	      var angle = theta * (1 - ts) + fi * ts;

	      console.log('...same chains');
	    }
	  }, {
	    key: 'getPlane',
	    value: function getPlane(fov, p, q) {
	      var d = (0, _math2.sub)(q, p);
	      var x = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);

	      var theta = fov * Math.PI / 180;
	      var b = 2 * x * Math.tan(theta / 2) / 2.0 - 0.02;

	      return [[q[0] - b, q[1] - b, q[2]], [q[0] + b, q[1] - b, q[2]], [q[0] - b, q[1] + b, q[2]], [q[0] + b, q[1] + b, q[2]]];
	    }
	  }, {
	    key: 'getPlaneWidth',
	    value: function getPlaneWidth(fov, p, q) {
	      var d = (0, _math2.sub)(q, p);
	      var x = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);

	      var theta = fov * Math.PI / 180;
	      var b = 2 * x * Math.tan(theta / 2);

	      return b;
	    }
	  }, {
	    key: 'getFov',
	    value: function getFov(backwall, p, q) {
	      var d = (0, _math2.sub)(q, p);
	      var x = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);

	      var theta = 2 * Math.atan(backwall / 2.0 / x) * 180 / Math.PI;

	      return theta;
	    }
	  }]);

	  return QuentinLike;
	}(_App3.default);

	exports.default = QuentinLike;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.line = line;
	/**
	 * Return a set of points
	 */
	function line(p, q, steps) {
	  steps = steps || 50;

	  var points = [];
	  var d = 1.0 / (steps - 1);

	  for (var i = 0; i < steps; i++) {
	    points.push(i * d);
	  }

	  return points;
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.norm = norm;
	exports.proj = proj;
	exports.cross = cross;
	exports.add = add;
	exports.sub = sub;
	exports.scale = scale;
	exports.normalize = normalize;
	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	/**
	 * Project u onto v
	 */
	function proj(u, v) {
	  var s = 1;
	  v = normalize(v);
	  return scale(v, s);
	}

	function cross(u, v) {
	  return [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
	}

	function add(x, y) {
	  return [x[0] + y[0], x[1] + y[1], x[2] + y[2]];
	}

	function sub(x, y) {
	  return [x[0] - y[0], x[1] - y[1], x[2] - y[2]];
	}

	function scale(v, s) {
	  return [v[0] * s, v[1] * s, v[2] * s];
	}

	function normalize(v) {
	  var n = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

	  if (n == 0) {
	    return [0, 0, 0];
	  }

	  return [v[0] / n, v[1] / n, v[2] / n];
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CameraState = exports.LinearCameraTrack = exports.CameraSequence = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.line = line;
	exports.linearTrack = linearTrack;

	var _math = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Class to sequence camera pans
	 */
	var CameraSequence = exports.CameraSequence = function () {
	  function CameraSequence() {
	    _classCallCheck(this, CameraSequence);

	    this.tracks = [];
	    this.durations = [];
	    this.stops = [0];
	    this.pieces = [];
	  }

	  /**
	   * Monotonically increasing
	   */


	  _createClass(CameraSequence, [{
	    key: "add",
	    value: function add(track, duration) {
	      this.tracks.push(track);
	      this.stops.push(this.stops[this.stops.length - 1] + duration);
	      return this;
	    }

	    /**
	     * Return ...
	     */

	  }, {
	    key: "getIndex",
	    value: function getIndex(t) {
	      for (var i = 0; i < this.stops.length; i++) {
	        if (t < this.stops[i]) {
	          return i - 1;
	        }
	      }
	      return this.stops.length - 1;
	    }

	    /**
	     * Return Camera Position
	     */

	  }, {
	    key: "at",
	    value: function at(t) {
	      console.log("t=" + t);
	      var offset = this.stops[this.getIndex(t)];
	      return this.tracks[this.getIndex(t)].at(t - offset);
	    }
	  }]);

	  return CameraSequence;
	}();

	/**
	 * Camera Track
	 */


	var CameraTrack = function () {
	  function CameraTrack() {
	    _classCallCheck(this, CameraTrack);
	  }

	  _createClass(CameraTrack, [{
	    key: "at",
	    value: function at() {}
	  }]);

	  return CameraTrack;
	}();

	/**
	 * Continually moving forward from points A -> B
	 */


	var LinearCameraTrack = exports.LinearCameraTrack = function () {
	  function LinearCameraTrack(start, end, duration) {
	    _classCallCheck(this, LinearCameraTrack);

	    this.start = start;
	    this.end = end;
	    this.direction = (0, _math.normalize)((0, _math.sub)(this.end, this.start));
	    this.up = [0, 1, 0];
	    this.duration = duration || 1.0;
	  }

	  _createClass(LinearCameraTrack, [{
	    key: "at",
	    value: function at(t) {
	      return new CameraState(line(this.start, this.end, t), this.up, undefined);
	    }
	  }]);

	  return LinearCameraTrack;
	}();

	/**
	 * Capture basic information to represent a camera
	 * To be honest, dog, I ain't feelin your energy
	 */


	var CameraState = exports.CameraState = function CameraState(position, up, fov) {
	  _classCallCheck(this, CameraState);

	  this.position = position;
	  this.up = up;
	  this.fov = fov;
	};

	/**
	 * Return ...
	 * @param p Vector3 ...
	 * @param q Vector3 ...
	 * @param t Vector3 ...
	 */


	function line(p, q, t) {
	  return (0, _math.add)((0, _math.scale)(q, t), (0, _math.scale)(p, 1 - t));
	}

	/**
	 * Return a camera state for a 
	 */
	function linearTrack(p, q, t) {
	  return new CameraState(line(p, q, t), [0, 1, 0], undefined);
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DontYouThinkApp = function (_QuentinLike) {
	  _inherits(DontYouThinkApp, _QuentinLike);

	  function DontYouThinkApp(params) {
	    _classCallCheck(this, DontYouThinkApp);

	    var _this = _possibleConstructorReturn(this, (DontYouThinkApp.__proto__ || Object.getPrototypeOf(DontYouThinkApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(DontYouThinkApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 10000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.pointLight1 = new THREE.PointLight(0x223333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x332222, 2, 800);
	      this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

	      // var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	      // directionalLight.position.set( 1, 1, 1 ).normalize();
	      // this.scene.add( directionalLight );

	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setClearColor(new THREE.Color(0xFFEEFF));

	      this.app.time = 0;

	      var mat = new THREE.MeshPhongMaterial({
	        color: 0x2194CE,
	        emissive: 0x0,
	        specular: 0x111111,
	        reflectivity: 0.2,
	        shininess: 30,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });
	      var ribbon = this.buildRibbon();

	      this.scene.add(new THREE.Mesh(ribbon, mat));
	      //1this.scene.add(new THREE.Mesh(new THREE.SphereBufferGeometry(2, 4, 20), mat));

	      this.cameraTrack = this.quentin(this.camera.position, (0, _math.scale)(this.camera.position, 0.75));

	      this.camera.position.set(0, 0, 40);

	      var camera_pos = [this.camera.position.x, this.camera.position.y, this.camera.position.z];

	      var p = this.getPlane(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.backwall = this.getPlaneWidth(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.view_angle = this.getFov(this.backwall, camera_pos, [0, 0, 0]);

	      // this.scene.add(this.getDot(p[0]));
	      // this.scene.add(this.getDot(p[1]));
	      // this.scene.add(this.getDot(p[2]));
	      // this.scene.add(this.getDot(p[3]));
	    }
	  }, {
	    key: 'buildRibbon',
	    value: function buildRibbon() {
	      var ribbonPath = new _RibbonPath2.default();
	      ribbonPath.computePoints();

	      var ribbon = new _Ribbon2.default();

	      ribbonPath.points.forEach(function (_, i) {
	        var _ribbonPath$points$i = _slicedToArray(ribbonPath.points[i], 3),
	            x = _ribbonPath$points$i[0],
	            y = _ribbonPath$points$i[1],
	            z = _ribbonPath$points$i[2];

	        var _ribbonPath$slopes$i = _slicedToArray(ribbonPath.slopes[i], 3),
	            dx = _ribbonPath$slopes$i[0],
	            dy = _ribbonPath$slopes$i[1],
	            dz = _ribbonPath$slopes$i[2];

	        var v = (0, _math.sub)((0, _math.normalize)([x, y, z]), (0, _math.normalize)(ribbonPath.center));

	        var u = (0, _math.normalize)(ribbonPath.slopes[i]);
	        var w = (0, _math.cross)(u, v);

	        var _add = (0, _math.add)([x, y, z], (0, _math.scale)(w, +0.1)),
	            _add2 = _slicedToArray(_add, 3),
	            a = _add2[0],
	            b = _add2[1],
	            c = _add2[2];

	        var _add3 = (0, _math.add)([x, y, z], (0, _math.scale)(w, -0.1)),
	            _add4 = _slicedToArray(_add3, 3),
	            d = _add4[0],
	            e = _add4[1],
	            f = _add4[2];

	        ribbon.addPoint([x, y, z], w);
	      });

	      return ribbon.build();
	    }
	  }, {
	    key: 'loadObj',
	    value: function loadObj() {
	      this.obj_file = 'obj/trees/AS12_6.obj';
	      var manager = new THREE.LoadingManager();
	      manager.onProgress = function () {};
	      var loader = new THREE.OBJLoader(manager);

	      loader.load(this.obj_file, function (object) {
	        object.position.x = 0;
	        object.position.y = -1.5;
	        object.position.z = 0;
	        this.scene.add(object);
	        console.log("Added");
	      }.bind(this));
	    }
	  }, {
	    key: 'getDot',
	    value: function getDot(_ref, color) {
	      var _ref2 = _slicedToArray(_ref, 3),
	          x = _ref2[0],
	          y = _ref2[1],
	          z = _ref2[2];

	      color = color || 0x000000;
	      var dotGeometry = new THREE.Geometry();
	      dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
	      var dotMaterial = new THREE.PointsMaterial({ size: 3, sizeAttenuation: false, color: color });
	      return new THREE.Points(dotGeometry, dotMaterial);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.app.time += .01;
	      var t = this.app.time / 3.0 % 1.0;

	      var x = 0;
	      var y = 0;
	      var z = 40;

	      var p = [0, 0, 40];
	      var q = [0, 0, 1.5];

	      var a = 15;
	      var b = 15;

	      var _add5 = (0, _math.add)((0, _math.scale)(p, 1 - t), (0, _math.scale)(q, t));

	      var _add6 = _slicedToArray(_add5, 3);

	      x = _add6[0];
	      y = _add6[1];
	      z = _add6[2];


	      this.camera.position.set(x, y, z);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	      this.camera.fov = this.getFov(this.backwall, [x, y, z], [0, 0, 0]);
	      this.camera.updateProjectionMatrix();

	      this.pointLight1.position.set(x - 10, y, z);
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));

	      this.pointLight2.position.set(x + 10, y, z);
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return DontYouThinkApp;
	}(_Quentin2.default);

	exports.default = DontYouThinkApp;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _math = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RibbonPath = function () {
	  function RibbonPath(center, direction) {
	    _classCallCheck(this, RibbonPath);

	    this.center = [0, 0, 0];
	    this.direction = (0, _math.normalize)([1, 1, 0]);
	    this.position = [0, 0, 0];

	    this.width = 1;

	    this.vertices = [];
	    this.faces = [];

	    this.points = [];
	    this.slopes = [];
	    // this.disturbVertices();
	  }

	  _createClass(RibbonPath, [{
	    key: 'computePoints',
	    value: function computePoints() {
	      var points = [];
	      var slopes = [];
	      var h = 0.003;

	      var theta = 0;
	      var delta = Math.PI / 90;

	      var distance = 1;

	      var _scale = (0, _math.scale)((0, _math.normalize)([4, 0, 0]), distance),
	          _scale2 = _slicedToArray(_scale, 3),
	          x = _scale2[0],
	          y = _scale2[1],
	          z = _scale2[2];

	      var x0 = 0,
	          y0 = 0,
	          z0 = 0;

	      var _direction$slice = this.direction.slice(),
	          _direction$slice2 = _slicedToArray(_direction$slice, 3),
	          dx = _direction$slice2[0],
	          dy = _direction$slice2[1],
	          dz = _direction$slice2[2];

	      var f = function f(t) {
	        return [distance * Math.cos(t), distance * Math.sin(t)];
	      };

	      // Push initial
	      points.push([x, y, z]);
	      slopes.push([dx, dy, dz]);

	      for (var i = 1; i < 230; i++) {

	        var p0 = f(theta);
	        var p1 = f(theta + delta);

	        // Update step
	        x0 = x;
	        y0 = y;
	        z0 = z;
	        x = x + dx;
	        y = y + dy;
	        z = z + dz;

	        var _scale3 = (0, _math.scale)((0, _math.normalize)([x, y, z]), distance);

	        var _scale4 = _slicedToArray(_scale3, 3);

	        x = _scale4[0];
	        y = _scale4[1];
	        z = _scale4[2];


	        var randomness = (0, _math.scale)((0, _math.normalize)([Math.random(), Math.random(), Math.random()]), 0.05);

	        var _sub = (0, _math.sub)([x, y, z], [x0, y0, z0]);

	        var _sub2 = _slicedToArray(_sub, 3);

	        dx = _sub2[0];
	        dy = _sub2[1];
	        dz = _sub2[2];

	        // Push
	        var _scale5 = (0, _math.scale)((0, _math.normalize)((0, _math.sub)([dx, dy, dz], randomness)), 0.3);

	        var _scale6 = _slicedToArray(_scale5, 3);

	        dx = _scale6[0];
	        dy = _scale6[1];
	        dz = _scale6[2];
	        points.push([x, y, z]);
	        slopes.push([dx, dy, dz]);

	        // Move
	        theta += delta;
	        // distance = 2 + Math.cos(0.5*theta);
	        distance += 0.015;
	      }

	      this.points = points;
	      this.slopes = slopes;
	    }
	  }, {
	    key: 'disturbVertices',
	    value: function disturbVertices() {
	      this.vertices.forEach(function (v) {
	        var s = 0.1;
	        v[0] += s * (Math.random() - 0.5);
	        v[1] += s * (Math.random() - 0.5);
	        v[2] += s * (Math.random() - 0.5);
	        v[3] += s * (Math.random() - 0.5);
	      });
	    }
	  }]);

	  return RibbonPath;
	}();

	exports.default = RibbonPath;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _math = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Rib = function () {

	  /**
	   * Construct a ribbon
	   */
	  function Rib(params) {
	    _classCallCheck(this, Rib);

	    this.params = params;
	    this.pieces = [];
	    this.slopes = [];
	    this.normals = [];
	    this.directionals = [];
	  }

	  _createClass(Rib, [{
	    key: 'init',
	    value: function init(p) {
	      // this.pieces.push(p.slice());
	      return this;
	    }

	    /**
	     * Add position and normal
	     */

	  }, {
	    key: 'addPoint',
	    value: function addPoint(p, c) {
	      this.pieces.push(p.slice());
	      // this.slopes.push(slope);
	      this.directionals.push(c.slice());

	      return this;
	    }
	  }, {
	    key: 'toVector3',
	    value: function toVector3(_ref) {
	      var _ref2 = _slicedToArray(_ref, 3),
	          x = _ref2[0],
	          y = _ref2[1],
	          z = _ref2[2];

	      return new THREE.Vector3(x, y, z);
	    }

	    /**
	     * Return a mesh
	     */

	  }, {
	    key: 'build',
	    value: function build() {
	      var g = new THREE.Geometry();

	      for (var i = 0; i < this.pieces.length; i++) {

	        // Get bounding points
	        var p0 = this.pieces[i];
	        // let p1 = this.pieces[i+1];

	        // let d = normalize(sub(p1, p0));
	        // let n = normalize(this.di[i]);
	        // let c = scale(normalize(cross(d, n)), 0.25);
	        var c = this.directionals[i];
	        c = (0, _math.scale)((0, _math.normalize)(c), 0.25);

	        g.vertices.push(this.toVector3((0, _math.add)(p0, (0, _math.scale)(c, 1))));
	        g.vertices.push(this.toVector3((0, _math.add)(p0, (0, _math.scale)(c, -1))));
	      }

	      for (var _i = 0; 2 * _i + 3 < g.vertices.length; _i += 1) {

	        var n1 = this.getNormal(g.vertices[2 * _i + 0], g.vertices[2 * _i + 1], g.vertices[2 * _i + 2]);
	        var n2 = this.getNormal(g.vertices[2 * _i + 3], g.vertices[2 * _i + 2], g.vertices[2 * _i + 1]);

	        console.log(n1, n2);

	        g.faces.push(new THREE.Face3(2 * _i + 0, 2 * _i + 1, 2 * _i + 2, n1));
	        g.faces.push(new THREE.Face3(2 * _i + 3, 2 * _i + 2, 2 * _i + 1, n2));
	      }

	      return g;
	    }
	  }, {
	    key: 'getNormal',
	    value: function getNormal(a, b, c) {
	      var p = new THREE.Vector3().subVectors(b, a);
	      var q = new THREE.Vector3().subVectors(c, a);
	      return new THREE.Vector3().crossVectors(p, q).normalize();
	    }
	  }]);

	  return Rib;
	}();

	exports.default = Rib;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Line = __webpack_require__(19);

	var _Line2 = _interopRequireDefault(_Line);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function random_between(low, high) {
	  return (high - low) * Math.random() + low;
	}

	var DripApp = function (_App) {
	  _inherits(DripApp, _App);

	  function DripApp(params) {
	    _classCallCheck(this, DripApp);

	    var _this = _possibleConstructorReturn(this, (DripApp.__proto__ || Object.getPrototypeOf(DripApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;
	    _this.ctx = _this.el.getContext('2d');
	    _this.lines = [];
	    return _this;
	  }

	  _createClass(DripApp, [{
	    key: 'setup',
	    value: function setup() {
	      for (var i = 0; i < 5; i++) {
	        this.lines.unshift(new _Line2.default(300 + 40 * i, 500 + 80 * i + 20 * Math.random(), 40 + 30 + 40 * i + random_between(-30, 80), 450 + random_between(-100, 100)));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.clear();
	      var ctx = this.ctx;
	      var width = this.width;
	      ctx.imageSmoothingEnabled = true;
	      this.lines.forEach(function (val) {
	        val.draw(ctx, width);
	      });
	    }
	  }]);

	  return DripApp;
	}(_App3.default);

	exports.default = DripApp;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Line = function () {
	  function Line(top, bottom, width, mid) {
	    _classCallCheck(this, Line);

	    this.bot = bottom;
	    this.top = top;
	    this.width = width;
	    this.mid = mid;
	  }

	  _createClass(Line, [{
	    key: 'drawDip',
	    value: function drawDip(ctx, w) {
	      var mid = this.mid;
	      var m = mid;
	      var d = Math.floor(this.width / 2);
	      ctx.moveTo(m - d, this.top);
	      sCurveTo(ctx, m - d, this.top, m, this.bot);
	      sCurveTo(ctx, m, this.bot, m + d, this.top);
	    }
	  }, {
	    key: 'drawShape',
	    value: function drawShape(ctx, w) {
	      var mid = this.mid;
	      var m = mid;
	      var d = Math.floor(this.width / 2);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx, w) {
	      var mid = this.mid;
	      var m = mid;
	      var d = Math.floor(this.width / 2);

	      ctx.save();
	      ctx.beginPath();
	      this.drawDip(ctx, w);
	      ctx.closePath();
	      ctx.fillStyle = 'black';
	      ctx.strokeStyle = 'white';
	      ctx.lineWidth = '2.5';
	      ctx.fill();
	      ctx.restore();

	      ctx.beginPath();
	      ctx.closePath();

	      ctx.save();
	      ctx.moveTo(0, this.top);
	      ctx.lineTo(m - d, this.top);

	      ctx.moveTo(m + d, this.top);
	      ctx.lineTo(w, this.top);

	      this.drawDip(ctx, w);

	      ctx.strokeStyle = 'white';
	      ctx.lineWidth = '4.5';
	      ctx.stroke();
	      ctx.restore();
	    }
	  }]);

	  return Line;
	}();

	exports.default = Line;


	function sCurveTo(ctx, x0, y0, x1, y1) {
	  var x_mid = x0 + Math.floor((x1 - x0) / 2);
	  var y_mid = y0 + Math.floor((y1 - y0) / 2);
	  ctx.bezierCurveTo(x_mid, y0, x_mid, y1, x1, y1);
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _FlatTriangleMesh = __webpack_require__(21);

	var _TriangleMesh = __webpack_require__(22);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	var _utils = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FaceApp = function (_App) {
	  _inherits(FaceApp, _App);

	  function FaceApp(params) {
	    _classCallCheck(this, FaceApp);

	    var REGULAR_TRIANGLE_RATIO = Math.sqrt(3) / 2.0;

	    var _this = _possibleConstructorReturn(this, (FaceApp.__proto__ || Object.getPrototypeOf(FaceApp)).call(this));

	    _this.el = params.el;
	    _this.ctx = _this.el.getContext('2d');
	    _this.width = params.el.width;
	    _this.height = params.el.height;
	    _this.backgroundImage = new Image();
	    _this.backgroundImage.onload = function () {
	      _this.setup();
	    };
	    _this.backgroundImage.src = params.backgroundImage;

	    // Ayy
	    _this.mesh = new _TriangleMesh2.default(100, { x: 0, y: 0 });

	    var self = _this;

	    _this.sunGrid = [];
	    for (var i = 0; i < 20; i++) {
	      for (var j = 0; j < 20; j++) {
	        _this.sunGrid.push(_this.getRandomImagePiece(_this.backgroundImage, 200, 200));
	      }
	    }
	    return _this;
	  }

	  _createClass(FaceApp, [{
	    key: 'setup',
	    value: function setup(params) {
	      console.log(":D");
	      console.log(this.backgroundImage);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'draw',
	    value: function draw(params) {
	      var _this2 = this;

	      this.clear();

	      this.sunGrid.forEach(function (val, i) {
	        var x = i % 20;
	        var y = Math.floor(i / 20);
	        _this2.ctx.drawImage(_this2.backgroundImage, val[0].x, val[0].y, 200, 200, x * 100, y * 100, 100, 100);
	      });
	    }
	  }, {
	    key: 'getRandomImagePiece',
	    value: function getRandomImagePiece(img, width, height) {
	      var x = (0, _utils.random)(0, img.width - width);
	      var y = (0, _utils.random)(0, img.height - height);
	      return [{ x: x, y: y }, { x: x + width, y: y }, { x: x + width, y: y + height }, { x: x, y: y + height }];
	    }

	    /**
	     * Draw a triangle from a set of points
	     * */

	  }, {
	    key: 'drawTriangle',
	    value: function drawTriangle(i, j, color) {
	      var points = this.mesh.get(i, j).getPointList();
	      var ctx = this.ctx;
	      debugger;
	      ctx.save();
	      ctx.beginPath();
	      ctx.fillStyle = color;
	      ctx.moveTo(points[0].x, points[0].y);
	      ctx.lineTo(points[1].x, points[1].y);
	      ctx.lineTo(points[2].x, points[2].y);
	      ctx.fill();
	      ctx.fill();
	      ctx.fill();
	      ctx.fill();
	      ctx.closePath();
	      ctx.restore();
	    }
	  }]);

	  return FaceApp;
	}(_App3.default);

	exports.default = FaceApp;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FlatTriangleMesh = exports.FlatTriangleMesh = function () {
	  function FlatTriangleMesh(w, h, cols, rows) {
	    _classCallCheck(this, FlatTriangleMesh);

	    this.width = w;
	    this.height = h;
	    this.cols = cols;
	    this.rows = rows;
	    this.dx = cols % 2 == 1 ? this.width / (cols + 1) : this.width / cols;
	    this.dy = this.height / rows;
	  }

	  _createClass(FlatTriangleMesh, [{
	    key: "get",
	    value: function get(i, j) {
	      var dx = this.dx,
	          dy = this.dy;

	      var x = this.dx / 2.0 + j * this.dx / 2.;
	      var y = this.dy / 2.0 + i * this.dy;

	      if ((i + j) % 2 == 0) {
	        /**
	         *   3
	         *  /+\
	         * 1---2
	         */
	        return [[x - dx / 2., y - dy / 2.], [x + dx / 2., y - dy / 2.], [x, y + dy / 2.]];
	      } else {
	        /**
	         *  1---2
	         *   \ /
	         *    3
	         */
	        return [[x - dx / 2., y + dy / 2.], [x + dx / 2., y + dy / 2.], [x, y - dy / 2.]];
	      }
	    }
	  }]);

	  return FlatTriangleMesh;
	}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RegularTriangle = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * --------------------------------------
	 * \1,1 /\1,3 /\1,1 /\1,3 /\   1 /\1,
	 *  \  /  \  /  \  /  \  /  \   /  \ 
	 *   \/1,2 \/1,  \/1,2 \/1,4 \ /1,2 \
	 *  ---------------------------------
	 *   /\2,2 /\    /\2,2 /\    / \2,2 /
	 *  /  \  /  \  /  \  /  \  /   \  / 
	 *   2,1\/    \/ 2,1\/    \/   ,1\/  
	 * --------------------------------------
	 */
	var TriangleMesh = function () {

	  /**
	   * Construct a grid where xy-coordinates correspond to triangles instead of squares
	   *  This class mostly just wraps the Triangle method with some math to know
	   *  exactly where everything is located.
	   */
	  function TriangleMesh(rad, props) {
	    _classCallCheck(this, TriangleMesh);

	    props = props || {};

	    this.x = props.x || 0;
	    this.y = props.y || 0;
	    this.rad = rad;

	    // This is probably rounded-off too much, and creating
	    // a slight overlap along the edges of the triangles
	    // TODO: Generalize this for a given theta
	    this.dx = 1.73 / 2. * this.rad;
	    this.dy = this.rad / 2.;
	  }

	  /**
	   * Return the xy-coordinate
	   */


	  _createClass(TriangleMesh, [{
	    key: 'getCenter',
	    value: function getCenter(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': x,
	        'y': y
	      };
	    }
	  }, {
	    key: 'getPoints',


	    /**
	     * Return the xy-coordinate
	     */
	    value: function getPoints(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': x,
	        'y': y
	      };
	    }
	  }, {
	    key: 'getBoundingBox',


	    /**
	     * Return the xy-coordinate
	     */
	    value: function getBoundingBox(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }

	    /**
	     * Return the Triangle defined at i, j
	     */

	  }, {
	    key: 'get',
	    value: function get(i, j) {
	      var center = this.getCenter(i, j);
	      var theta = (i + j) % 2 ? Math.PI / 2 : -Math.PI / 2;
	      return new _RegularTriangle.RegularTriangle(center.x, center.y, this.rad, theta);
	    }
	  }]);

	  return TriangleMesh;
	}();

	exports.default = TriangleMesh;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Abstraction for a regular triangle
	 */
	var RegularTriangle = exports.RegularTriangle = function () {
	  function RegularTriangle(x, y, size, theta) {
	    _classCallCheck(this, RegularTriangle);

	    this.x = x;
	    this.y = y;
	    this.size = size;
	    this.theta = theta || 0;
	  }

	  /**
	   * Return the center point
	   */


	  _createClass(RegularTriangle, [{
	    key: 'getCenter',
	    value: function getCenter() {
	      return {
	        'x': this.x,
	        'y': this.y
	      };
	    }

	    /**
	     * Return a list of points used to draw, etc. this triangle
	     */

	  }, {
	    key: 'getPointList',
	    value: function getPointList() {
	      var t = this.theta;
	      var rad = this.size;
	      var points = [];

	      for (var i = 0; i < 3; i++) {
	        var theta = i * 2 * Math.PI / 3;

	        var u = this.x + rad * Math.cos(t + theta);
	        var v = this.y + rad * Math.sin(t + theta);

	        // XXX: Add this if you dont want aliasing in canvas
	        // u = Math.round(u);
	        // v = Math.round(v);

	        points.push({
	          'x': u,
	          'y': v
	        });
	      }

	      return points;
	    }

	    /**
	     * Return an xy-coord bounding box
	     */

	  }, {
	    key: 'getBoundingBox',
	    value: function getBoundingBox() {
	      var points = this.getPointList();
	      var x = { 'min': +Infinity, 'max': -Infinity };
	      var y = { 'min': +Infinity, 'max': -Infinity };

	      // Naive
	      points.forEach(function (val) {
	        x.min = Math.min(x.min, val.x);
	        x.max = Math.max(x.max, val.x);
	        y.min = Math.min(y.min, val.y);
	        y.max = Math.max(y.max, val.y);
	      });

	      return {
	        'x': x.min,
	        'y': y.min,
	        'w': x.max - x.min,
	        'h': y.max - y.min
	      };
	    }
	  }, {
	    key: 'getAlteredTriangle',
	    value: function getAlteredTriangle(radius) {
	      return new RegularTriangle(this.x, this.y, radius, this.theta);
	    }
	  }]);

	  return RegularTriangle;
	}();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.select = select;
	exports.makeArray3 = makeArray3;
	exports.rgb = rgb;
	exports.random = random;
	exports.stringToHex = stringToHex;
	function select(list) {
	  return list[Math.floor(Math.random() * list.length)];
	};

	/**
	 * Make 3 dimensional multi array
	 *
	 */
	function makeArray3(height, width, depth) {
	  var array3 = new Array(height);
	  for (var i = 0; i < height; i++) {
	    array3[i] = new Array(width);
	    for (var j = 0; j < width; j++) {
	      array3[i][j] = new Array(depth);
	    }
	  }
	  return array3;
	};

	function rgb(r, g, b) {
	  return "rgb(" + r + ", " + g + ", " + b + ")";
	};

	function random(lower, upper) {
	  return lower + Math.random() * (upper - lower);
	};

	var getElapsedTime = function () {
	  var start = +new Date();
	  return function () {
	    return (new Date() - start) / 1000.;
	  };
	}();

	// Return hex value from a hex string
	function stringToHex(str) {
	  return parseInt(str.substring(1), 16);
	}

	exports.getElapsedTime = getElapsedTime;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _TriangleSurface = __webpack_require__(26);

	var _TriangleSurface2 = _interopRequireDefault(_TriangleSurface);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GeodeApp = function (_QuentinLike) {
	  _inherits(GeodeApp, _QuentinLike);

	  function GeodeApp(params) {
	    _classCallCheck(this, GeodeApp);

	    var _this = _possibleConstructorReturn(this, (GeodeApp.__proto__ || Object.getPrototypeOf(GeodeApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(GeodeApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 10000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.pointLight1 = new THREE.PointLight(0x223333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x332222, 2, 800);
	      this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

	      // var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	      // directionalLight.position.set( 1, 1, 1 ).normalize();
	      // this.scene.add( directionalLight );

	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setClearColor(new THREE.Color(0xFFEEFF));

	      this.app.time = 0;

	      var mat = new THREE.MeshPhongMaterial({
	        // color: 0x2194CE,
	        color: 0x222222,
	        emissive: 0x0,
	        specular: 0x222222,
	        reflectivity: 0.2,
	        shininess: 20,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });

	      this.cameraTrack = this.quentin(this.camera.position, (0, _math.scale)(this.camera.position, 0.75));

	      this.camera.position.set(0, 0, 40);

	      var camera_pos = [this.camera.position.x, this.camera.position.y, this.camera.position.z];

	      var p = this.getPlane(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.backwall = this.getPlaneWidth(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.view_angle = this.getFov(this.backwall, camera_pos, [0, 0, 0]);

	      this.surface = new _TriangleSurface2.default(function (x, y) {
	        var u = Math.sin(x);
	        var v = Math.cos(y);
	        return Math.cos(1.2 * Math.sqrt(x * x + y * y)) + 0.5 * Math.sin(x);
	        return Math.random();
	      }, 0.15);
	      this.scene.add(new THREE.Mesh(this.surface.build(), mat));
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.app.time += .01;
	      var t = this.app.time / 3.0 % 1.0;

	      var x = 0;
	      var y = 10;
	      var z = 10;

	      var p = [0, 0, 40];
	      var q = [0, 0, 1.5];

	      var a = 15;
	      var b = 15;

	      this.camera.position.set(x, y, z);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	      this.camera.fov = this.getFov(this.backwall, [x, y, z], [0, 0, 0]);
	      this.camera.updateProjectionMatrix();

	      this.pointLight1.position.set(x - 10, y, z);
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));

	      this.pointLight2.position.set(x + 10, y, z);
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return GeodeApp;
	}(_Quentin2.default);

	exports.default = GeodeApp;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TriangleMesh = __webpack_require__(22);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	var _math = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Construct a surface with a triangular mesh
	 * [x, y, f(x, y)], where x,y in set of triangular points
	 *
	 */
	var TriangleSurface = function () {
	  function TriangleSurface(f, radius, width, height) {
	    _classCallCheck(this, TriangleSurface);

	    this.f = f;
	    this.mesh = new _TriangleMesh2.default(radius);
	    this.width = width;
	    this.height = height;
	    this.radius = radius;
	  }

	  _createClass(TriangleSurface, [{
	    key: 'vector',
	    value: function vector(v) {
	      return [v.x, this.f(v.x, v.y), v.y];
	    }
	  }, {
	    key: 'build',
	    value: function build() {

	      var k = 0;
	      var f = this.f;
	      var geo = new THREE.Geometry();

	      var X_SEGS = Math.floor(this.width / this.radius);
	      var Y_SEGS = Math.floor(this.height / this.radius);

	      console.log(this.width, this.height);
	      console.log(X_SEGS, Y_SEGS);

	      for (var i = -X_SEGS / 2; i < X_SEGS / 2; i++) {
	        for (var j = -Y_SEGS; j < Y_SEGS; j++) {
	          var _mesh$get$getPointLis = this.mesh.get(i, j).getPointList(),
	              _mesh$get$getPointLis2 = _slicedToArray(_mesh$get$getPointLis, 3),
	              a = _mesh$get$getPointLis2[0],
	              b = _mesh$get$getPointLis2[1],
	              c = _mesh$get$getPointLis2[2];

	          var pointList = this.mesh.get(i, j).getPointList();

	          var u = (0, _math.sub)(this.vector(pointList[0]), this.vector(pointList[1]));
	          var v = (0, _math.sub)(this.vector(pointList[1]), this.vector(pointList[2]));
	          var n = (0, _math.cross)(u, v);
	          var n_vec = new THREE.Vector3(n[0], n[1], n[2]);

	          pointList.forEach(function (t) {
	            geo.vertices.push(new THREE.Vector3(t.x, f(t.x, t.y), t.y));
	          });

	          geo.faces.push(new THREE.Face3(k + 0, k + 1, k + 2, n_vec));

	          k += 3;
	        }
	      }

	      return geo;
	    }
	  }]);

	  return TriangleSurface;
	}();

	exports.default = TriangleSurface;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _Grass = __webpack_require__(28);

	var _Grass2 = _interopRequireDefault(_Grass);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Generative objects


	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	var GrassApp = function (_QuentinLike) {
	  _inherits(GrassApp, _QuentinLike);

	  function GrassApp(params) {
	    _classCallCheck(this, GrassApp);

	    var _this = _possibleConstructorReturn(this, (GrassApp.__proto__ || Object.getPrototypeOf(GrassApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(GrassApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 10000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.pointLight1 = new THREE.PointLight(0xDDDDDD, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0xDDDDDD, 2, 800);
	      this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

	      this.pointLight1.position.set(-10, 10, 0);
	      this.pointLight2.position.set(-10, 10, 0);

	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setClearColor(0xDDDDDD);

	      this.app.time = 0;

	      // Helper setup functions
	      this.setupTrack();

	      // Add visible components
	      this.addFloor();
	      this.addGrass(0, 0, 0);

	      for (var i = 0; i < 800; i++) {
	        var x = 4 * Math.random() - 1;
	        var z = 4 * Math.random() - 1;
	        this.addGrass(x, 0, z, Math.random() * 0.05);
	      }

	      this.force = new THREE.Vector3(0, 0, 1);
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	      this.addForceArrow();
	      this.updateForce(2.0);
	    }

	    // Setup a camera track... but in this case actually do nothing

	  }, {
	    key: 'setupTrack',
	    value: function setupTrack() {
	      this.camera.position.set(0, 10, 40);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 4));
	    }

	    /**
	     * Create the Force ArrowHelper and Update
	     */

	  }, {
	    key: 'addForceArrow',
	    value: function addForceArrow() {
	      this.forceArrow = new THREE.ArrowHelper(this.force, this.dest, norm(this.force), 0x000000);
	      this.scene.add(this.forceArrow);
	      this.updateForceArrow();
	    }

	    /**
	     * Update Force ArrowHelper
	     */

	  }, {
	    key: 'updateForceArrow',
	    value: function updateForceArrow() {
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	      this.forceArrow.setLength(norm(this.force));
	      this.forceArrow.position.x = this.force.x;
	      this.forceArrow.position.y = this.force.y;
	      this.forceArrow.position.z = this.force.z;
	      this.forceArrow.position.multiplyScalar(-1);
	    }

	    /**
	     * Add a piece of  grass
	     */

	  }, {
	    key: 'addGrass',
	    value: function addGrass(x, y, z, theta) {
	      var mat = new THREE.MeshPhongMaterial({
	        color: 0x044000,
	        emissive: 0x0,
	        specular: 0xCCCCCC,
	        reflectivity: 0.2,
	        shininess: 30,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });
	      mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
	      this.field = [];

	      var g = new _Grass2.default(x, y, z, theta);
	      var geo = g.getGeo();
	      this.scene.add(new THREE.Mesh(geo, mat));
	    }

	    // Just draw a simple floor

	  }, {
	    key: 'addFloor',
	    value: function addFloor() {
	      var mat = new THREE.LineBasicMaterial({ color: 0xB7B7BA });
	      var VALS = 100;
	      for (var i = -VALS; i <= VALS; i++) {
	        var geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(i, 0, -40));
	        geo.vertices.push(new THREE.Vector3(i, 0, 40));
	        this.scene.add(new THREE.Line(geo, mat));
	        geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(-40, 0, i));
	        geo.vertices.push(new THREE.Vector3(40, 0, i));
	        this.scene.add(new THREE.Line(geo, mat));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      this.app.time += .01;
	      var t = this.app.time;
	      t = 20;
	      var x = 20 * Math.sin(t);
	      var y = 8;
	      var z = 20 * Math.cos(t);
	      this.camera.position.set(x, y, z);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	      this.updateForce(params.force);
	    }
	  }, {
	    key: 'updateForce',
	    value: function updateForce(n) {
	      this.force.normalize();
	      this.force.multiplyScalar(n);
	      this.updateForceArrow();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return GrassApp;
	}(_Quentin2.default);

	exports.default = GrassApp;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WindyGrass = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _math = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DEBUG = true;

	function magnitude(vec, s) {
	  return (0, _math.scale)((0, _math.normalize)(vec), s);
	}

	function vec(_ref) {
	  var _ref2 = _slicedToArray(_ref, 3),
	      x = _ref2[0],
	      y = _ref2[1],
	      z = _ref2[2];

	  return new THREE.Vector3(x, y, z);
	}

	var WindyGrass = exports.WindyGrass = function () {
	  function WindyGrass(x, y, z, wind) {
	    _classCallCheck(this, WindyGrass);

	    this.up = [0, 1, 0];
	    this.root = [x, y, z];
	    this.updateWind(wind || [1, 0, 0]);
	    this.updateGeometry();
	  }

	  _createClass(WindyGrass, [{
	    key: 'getTheta',
	    value: function getTheta() {
	      return 0.0;
	    }
	  }, {
	    key: 'updateWind',
	    value: function updateWind(wind) {
	      this.wind = wind || [1, 0, 0];
	    }
	  }, {
	    key: 'updateGeometry',
	    value: function updateGeometry() {}
	  }]);

	  return WindyGrass;
	}();

	var Grass = function () {

	  /**
	   * Dynamic Locations
	   */
	  function Grass(x, y, z, theta) {
	    _classCallCheck(this, Grass);

	    this.up = [0, 1, 0];
	    this.root = [x, y, z];
	    this.theta = theta || 0.0;

	    this.segments = [];
	    this.force = [0, 0, 0];

	    this.NUM_SEGMENTS = 20;
	    this.LENGTH_SEGMENT = 0.5;
	    this.HEIGHT_SEGMENT = 0.08 + Math.random() * 0.02;
	    this.WIDTH_SEGMENT = 0.0;

	    var d = this.theta;

	    // Add segments and give it a slight bend
	    for (var i = 0; i <= this.NUM_SEGMENTS; i++) {
	      var _theta = d * i;
	      var _ref3 = [Math.cos(_theta), Math.sin(_theta)],
	          a = _ref3[0],
	          b = _ref3[1];

	      this.segments.push({
	        'delta': magnitude([0, a, b], this.HEIGHT_SEGMENT),
	        'normal': (0, _math.normalize)([a, b, 0])
	      });
	    }
	  }

	  _createClass(Grass, [{
	    key: 'updateTheta',
	    value: function updateTheta(theta) {}

	    /**
	     * Return
	     */

	  }, {
	    key: 'getGeo',
	    value: function getGeo() {
	      var geo = new THREE.Geometry();

	      var _root = _slicedToArray(this.root, 3),
	          x = _root[0],
	          y = _root[1],
	          z = _root[2];

	      for (var i = 0; i <= this.NUM_SEGMENTS; i++) {
	        var _segments$i$delta = _slicedToArray(this.segments[i].delta, 3),
	            dx = _segments$i$delta[0],
	            dy = _segments$i$delta[1],
	            dz = _segments$i$delta[2];

	        var _s = (this.NUM_SEGMENTS - i + 1) / this.NUM_SEGMENTS;

	        geo.vertices.push(vec([x + 0.13 * _s, y, z]));
	        geo.vertices.push(vec([x - 0.13 * _s, y, z]));

	        x += dx;
	        y += dy;
	        z += dz;
	      }

	      for (var _i = 0; _i < this.NUM_SEGMENTS; _i++) {
	        var n = vec(this.segments[_i].normal);
	        geo.faces.push(new THREE.Face3(2 * _i + 0, 2 * _i + 1, 2 * _i + 2, n));
	        geo.faces.push(new THREE.Face3(2 * _i + 3, 2 * _i + 2, 2 * _i + 1, n));
	      }

	      return geo;
	    }

	    /**
	     */

	  }, {
	    key: 'updateWind',
	    value: function updateWind(x, y, z) {
	      this.wind[0] = x;
	      this.wind[1] = y;
	      this.wind[2] = z;
	    }

	    /**
	     * Update Geometry from origin and wind
	     */

	  }, {
	    key: 'updateGeometry',
	    value: function updateGeometry() {}
	  }, {
	    key: 'getGeo2',
	    value: function getGeo2() {
	      var geo = new THREE.Geometry();

	      var _root2 = _slicedToArray(this.root, 3),
	          x = _root2[0],
	          y = _root2[1],
	          z = _root2[2];

	      var _up = _slicedToArray(this.up, 3),
	          dx = _up[0],
	          dy = _up[1],
	          dz = _up[2];

	      for (var i = 0; i < this.NUM_SEGMENTS; i++) {
	        var n = this.segments[i].normal;
	        var cl = (0, _math.scale)((0, _math.normalize)((0, _math.cross)([dx, dy, dz], n)), s * this.WIDTH_SEGMENT);
	        var cr = (0, _math.scale)((0, _math.normalize)((0, _math.cross)([dx, dy, dz], n)), -s * this.WIDTH_SEGMENT);

	        geo.vertices.push(vec((0, _math.add)(cl, [x, y, z])));
	        geo.vertices.push(vec((0, _math.add)(cr, [x, y, z])));

	        var old_vec = [x, y, z];

	        var _add = (0, _math.add)([x, y, z], magnitude([dx, dy, dz], this.HEIGHT_SEGMENT));

	        var _add2 = _slicedToArray(_add, 3);

	        x = _add2[0];
	        y = _add2[1];
	        z = _add2[2];

	        dx = x - old_vec[0];
	        dy = y - old_vec[1];
	        dz = z - old_vec[2];
	      }

	      for (var _i2 = 0; _i2 < this.NUM_SEGMENTS - 1; _i2++) {
	        var _n = vec(this.segments[0].normal);
	        geo.faces.push(new THREE.Face3(2 * _i2 + 0, 2 * _i2 + 1, 2 * _i2 + 2, _n));
	        geo.faces.push(new THREE.Face3(2 * _i2 + 3, 2 * _i2 + 2, 2 * _i2 + 1, _n));
	      }

	      return geo;
	    }
	  }]);

	  return Grass;
	}();

	exports.default = Grass;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _GrassyField = __webpack_require__(30);

	var _Land = __webpack_require__(33);

	var _simplexNoise = __webpack_require__(34);

	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Generative objects


	/**
	 * Return the norm of the vector
	 */
	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	/**
	 * ...
	 */

	var GraveyardApp = function (_QuentinLike) {
	  _inherits(GraveyardApp, _QuentinLike);

	  function GraveyardApp(params) {
	    _classCallCheck(this, GraveyardApp);

	    var _this = _possibleConstructorReturn(this, (GraveyardApp.__proto__ || Object.getPrototypeOf(GraveyardApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(GraveyardApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 1000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.ambientLight = new THREE.AmbientLight(0xCCCCCC);
	      this.directionalLight = new THREE.DirectionalLight(0x333333, 0.5);
	      this.pointLight1 = new THREE.PointLight(0x333333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x333333, 2, 800);

	      this.directionalLight.position.set(0, 0, -1);
	      this.pointLight1.position.set(0, 10, -10);
	      this.pointLight2.position.set(0, 10, -10);

	      this.directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      this.scene.add(this.directionalLight);
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setPixelRatio(1.5);
	      this.renderer.setClearColor(0xDDDDDD);

	      // Helper setup functions
	      this.setupTrack();

	      // Add visible components
	      this.addFloor();

	      // ...
	      var start = (0, _utils.getElapsedTime)();
	      this.addGrassyField();
	      console.log("Create grassy field time:", (0, _utils.getElapsedTime)() - start);

	      this.force = new THREE.Vector3(0, 0, 1);
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	    }

	    // Setup a camera track... but in this case actually do nothing

	  }, {
	    key: 'setupTrack',
	    value: function setupTrack() {
	      this.camera.position.set(0, 30, 80);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }

	    // Update Force ArrowHelper

	  }, {
	    key: 'addForceArrow',
	    value: function addForceArrow() {
	      this.forceArrow = new THREE.ArrowHelper(this.force, this.dest, norm(this.force), 0x000000);
	      this.scene.add(this.forceArrow);
	      // this.updateForceArrow();
	    }

	    // Update Force ArrowHelper

	  }, {
	    key: 'updateForceArrow',
	    value: function updateForceArrow() {
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	      this.forceArrow.setLength(norm(this.force));
	      this.forceArrow.position.x = this.force.x;
	      this.forceArrow.position.y = this.force.y;
	      this.forceArrow.position.z = this.force.z;
	      this.forceArrow.position.multiplyScalar(-1);
	    }

	    // ...

	  }, {
	    key: 'addGrassyField',
	    value: function addGrassyField() {
	      this.field = new _GrassyField.GrassyField(30, 30, 9.0, 30, this.floor.f);
	      this.fieldMesh = new THREE.Mesh(this.field.geometry(), this.grassMaterial);
	      this.scene.add(this.fieldMesh);
	    }

	    // ...

	  }, {
	    key: 'addTombstone',
	    value: function addTombstone(x, z) {
	      var geometry = new THREE.BoxGeometry(4, 8, 1);
	      var material = new THREE.MeshPhongMaterial({
	        color: 0x333333,
	        emissive: 0x777777,
	        specular: 0x000000,
	        reflectivity: 0,
	        shininess: 0,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });

	      var cube = new THREE.Mesh(geometry, material);
	      cube.position.x = x;
	      cube.position.y = 4;;
	      cube.position.z = z;
	      this.scene.add(cube);
	    }

	    // ...

	  }, {
	    key: 'setWind',
	    value: function setWind(wind) {
	      this.wind = wind;
	      this.fieldMesh.material.uniforms.wind.value = wind;
	    }
	  }, {
	    key: 'setPhong',
	    value: function setPhong(params) {
	      this.grassMaterial = this.field.material(params);
	      this.fieldMesh.material = this.grassMaterial;
	    }

	    // Just draw a simple floor

	  }, {
	    key: 'addFloor',
	    value: function addFloor() {
	      var mat = new THREE.MeshBasicMaterial({
	        color: 0xCCCCC,
	        wireframe: true
	      });

	      var _abc = function () {
	        var s = 80.0;
	        var simplex = new _simplexNoise2.default("whatever");
	        return function (x, y) {
	          return 4.0 * simplex.noise2D(x / s, y / s);
	        };
	      }();

	      this.floor = new _Land.Land({
	        height: 20,
	        width: 20,
	        floor: _abc
	      });

	      var geo = this.floor.getMesh();

	      this.scene.add(new THREE.Mesh(geo, mat));
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      var t = +new Date() / 300000.0;
	      var r = 70;
	      var x = r * Math.cos(t);
	      var z = r * Math.sin(t);

	      var a = r * Math.cos(t),
	          b = r / 2,
	          c = r * Math.sin(t);

	      // ...

	      this.camera.position.set(a, b, c);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'setupCamera',
	    value: function setupCamera() {
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);
	    }
	  }, {
	    key: 'setSize',
	    value: function setSize(width, height) {
	      this.app.width = width;
	      this.app.height = height;
	      this.app.aspect = width / height;
	      this.setupCamera();
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(this.app.width, this.app.height);
	    }
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this.setSize(width, height);
	    }
	  }, {
	    key: 'updateForce',
	    value: function updateForce(n) {
	      this.force.normalize();
	      this.force.multiplyScalar(n);
	      this.updateForceArrow();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return GraveyardApp;
	}(_Quentin2.default);

	exports.default = GraveyardApp;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GrassyField = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _Grass = __webpack_require__(28);

	var _Grass2 = _interopRequireDefault(_Grass);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function magnitude(vec, s) {
	  return (0, _math.scale)((0, _math.normalize)(vec), s);
	}

	function extend(xs, ys) {
	  ys.forEach(function (y) {
	    xs.push(y);
	  });
	}

	function translate(xs, _ref) {
	  var _ref2 = _slicedToArray(_ref, 3),
	      x = _ref2[0],
	      y = _ref2[1],
	      z = _ref2[2];

	  for (var i = 0; i < xs.length; i += 3) {
	    xs[i + 0] += x;
	    xs[i + 1] += y;
	    xs[i + 2] += z;
	  }
	}

	function rotateyMesh(xs, rot) {
	  if (xs.length % 3 != 0) {
	    throw "whatever";
	  }

	  for (var i = 0; i < xs.length; i += 3) {
	    var x = xs[i + 0];
	    var z = xs[i + 2];
	    xs[i + 0] = x * Math.cos(rot) + z * Math.sin(rot);
	    xs[i + 2] = -x * Math.sin(rot) + z * Math.cos(rot);
	  }
	}

	var GrassyField = exports.GrassyField = function () {
	  function GrassyField(width, height, density, variations, floor) {
	    _classCallCheck(this, GrassyField);

	    this.width = width;
	    this.height = height;
	    this.density = density || 1.0;
	    this.variations = variations || 20;
	    this.blades = [];
	    this.floor = floor || undefined;

	    this.vertices = [];
	    this.normals = [];

	    for (var i = 0; i < variations; i++) {
	      var bend = Math.PI / 30 * Math.random();
	      var rot = 2 * Math.PI * (Math.random() - 0.5);
	      this.blades.push(this.blade(0, 0, 0, bend, rot));
	    }

	    var bladeStart = (0, _utils.getElapsedTime)();

	    var X_SEGS = 90;
	    var Y_SEGS = 91;

	    X_SEGS = Math.floor(this.width * Math.sqrt(this.density));
	    Y_SEGS = Math.floor(this.height * Math.sqrt(this.density));

	    var DX = this.width / X_SEGS;
	    var DY = this.height / Y_SEGS;

	    function stagger() {
	      var r = 2 * Math.random() - 1.0;
	      return r * DX / 2.0;
	    }

	    for (var _i = 0; _i < X_SEGS; _i++) {
	      for (var j = 0; j < Y_SEGS; j++) {
	        var k = Math.floor(this.blades.length * Math.random());
	        var x = _i * DX - this.width / 2.0 + stagger();
	        var z = j * DY - this.width / 2.0 + stagger();
	        var y = this.floor(x, z);

	        var _blades$k = _slicedToArray(this.blades[k], 2),
	            v = _blades$k[0],
	            n = _blades$k[1];

	        v = v.slice();
	        translate(v, [x, y, z]);
	        extend(this.vertices, v);
	        extend(this.normals, n);
	      }
	    }

	    // console.log("Extend array time:", getElapsedTime()-bladeStart);
	  }

	  /**
	   * Return geometry matrix for a blade of grass
	   */


	  _createClass(GrassyField, [{
	    key: 'blade',
	    value: function blade(x, y, z, theta, rot) {
	      var _blade2 = this._blade(theta),
	          _blade3 = _slicedToArray(_blade2, 2),
	          v = _blade3[0],
	          n = _blade3[1];

	      rotateyMesh(v, rot);
	      translate(v, [x, y, z]);
	      rotateyMesh(n, rot);

	      return [v, n];
	    }
	  }, {
	    key: '_blade',
	    value: function _blade(theta) {
	      var x = 0;
	      var y = 0;
	      var z = 0;

	      // Params
	      var NUM_SEGMENTS = 10;
	      var HEIGHT_SEGMENT = 0.08 + 0.03 * Math.random();
	      var WIDTH_SEGMENT = 0.10;

	      // Build segments
	      var segments = [];
	      var vertices = [];
	      var normals = [];

	      for (var i = 0; i <= NUM_SEGMENTS; i++) {
	        var t = theta * i;
	        var _ref3 = [0, Math.cos(t), Math.sin(t)],
	            _x = _ref3[0],
	            _y = _ref3[1],
	            _z = _ref3[2];

	        var _cross = (0, _math.cross)([1, 0, 0], [_x, _y, _z]),
	            _cross2 = _slicedToArray(_cross, 3),
	            a = _cross2[0],
	            b = _cross2[1],
	            c = _cross2[2];

	        segments.push({
	          'delta': magnitude([_x, _y, _z], HEIGHT_SEGMENT),
	          'normal': (0, _math.normalize)([a, b, c])
	        });
	      }

	      for (var _i2 = 0; _i2 <= NUM_SEGMENTS; _i2++) {
	        var _segments$_i2$delta = _slicedToArray(segments[_i2].delta, 3),
	            dx = _segments$_i2$delta[0],
	            dy = _segments$_i2$delta[1],
	            dz = _segments$_i2$delta[2];

	        var s = (NUM_SEGMENTS - _i2 + 1) / NUM_SEGMENTS;

	        var a = [x + WIDTH_SEGMENT * s, y, z];
	        var b = [x - WIDTH_SEGMENT * s, y, z];
	        var c = [x + dx + WIDTH_SEGMENT * s, y + dy, z + dz];
	        var d = [x + dx - WIDTH_SEGMENT * s, y + dy, z + dz];

	        // Face 1
	        extend(vertices, b);
	        extend(vertices, a);
	        extend(vertices, c);

	        // Face 2
	        extend(vertices, b);
	        extend(vertices, c);
	        extend(vertices, d);

	        // Normals
	        var n = segments[_i2].normal;
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);

	        x += dx;
	        y += dy;
	        z += dz;
	      }

	      return [vertices, normals];
	    }
	  }, {
	    key: 'geometry',
	    value: function geometry() {
	      this.geo = new THREE.BufferGeometry();

	      var start = (0, _utils.getElapsedTime)();
	      var v = Float32Array.from(this.vertices);

	      this.geo.addAttribute('position', new THREE.BufferAttribute(v, 3));

	      var n = Float32Array.from(this.normals);
	      this.geo.addAttribute('normal', new THREE.BufferAttribute(n, 3));
	      return this.geo;
	    }

	    // Return the phong material

	  }, {
	    key: 'material',
	    value: function material(params) {
	      this.params = params;
	      return new THREE.ShaderMaterial({
	        vertexShader: __webpack_require__(31),
	        fragmentShader: __webpack_require__(32),
	        uniforms: {
	          wind: { value: 10.0 }
	        }
	      });
	    }
	  }]);

	  return GrassyField;
	}();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "varying vec4 n;\nuniform float wind;\nvoid main() {\n  vec4 p = vec4(position, 1.0);\n  p.x += wind;\n  gl_Position = projectionMatrix * modelViewMatrix * p;\n}\n"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "uniform float time;\nuniform vec3 dir;\nvarying vec4 n;\n\nvoid main() {\n  float x = sin(time);\n  vec4 u = normalize(vec4(dir, 1.0));\n  vec4 v = normalize(n);\n  float l = dot(u, v);\n  // l = (sin(time) + 1.0)/2.0;\n\n  l = 0.2;\n  // gl_FragColor = n;\n  gl_FragColor = vec4(l, l, l, 1.0);\n  // gl_FragColor = vec4(l, l, l, 1.0);\n}\n"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Land = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TriangleSurface = __webpack_require__(26);

	var _TriangleSurface2 = _interopRequireDefault(_TriangleSurface);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Land = exports.Land = function () {
	  /**
	   * Create a Land
	   */
	  function Land(_ref) {
	    var height = _ref.height,
	        width = _ref.width,
	        floor = _ref.floor;

	    _classCallCheck(this, Land);

	    this.height = height;
	    this.width = width;
	    this.f = floor;
	    this.surface = new _TriangleSurface2.default(this.f, 1.0, width, height);
	  }

	  /**
	   * Return the heigh of the land at this position
	   */


	  _createClass(Land, [{
	    key: 'position',
	    value: function position(x, y) {
	      return this.f(x, y);
	    }

	    /**
	     * Return Buffer Mesh for this tract of land
	     */

	  }, {
	    key: 'getMesh',
	    value: function getMesh() {
	      return this.surface.build();
	    }
	  }]);

	  return Land;
	}();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * A fast javascript implementation of simplex noise by Jonas Wagner

	Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
	Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
	With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
	Better rank ordering method by Stefan Gustavson in 2012.


	 Copyright (c) 2018 Jonas Wagner

	 Permission is hereby granted, free of charge, to any person obtaining a copy
	 of this software and associated documentation files (the "Software"), to deal
	 in the Software without restriction, including without limitation the rights
	 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 copies of the Software, and to permit persons to whom the Software is
	 furnished to do so, subject to the following conditions:

	 The above copyright notice and this permission notice shall be included in all
	 copies or substantial portions of the Software.

	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 SOFTWARE.
	 */
	(function() {
	  'use strict';

	  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
	  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
	  var F3 = 1.0 / 3.0;
	  var G3 = 1.0 / 6.0;
	  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
	  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

	  function SimplexNoise(randomOrSeed) {
	    var random;
	    if (typeof randomOrSeed == 'function') {
	      random = randomOrSeed;
	    }
	    else if (randomOrSeed) {
	      random = alea(randomOrSeed);
	    } else {
	      random = Math.random;
	    }
	    this.p = buildPermutationTable(random);
	    this.perm = new Uint8Array(512);
	    this.permMod12 = new Uint8Array(512);
	    for (var i = 0; i < 512; i++) {
	      this.perm[i] = this.p[i & 255];
	      this.permMod12[i] = this.perm[i] % 12;
	    }

	  }
	  SimplexNoise.prototype = {
	    grad3: new Float32Array([1, 1, 0,
	      -1, 1, 0,
	      1, -1, 0,

	      -1, -1, 0,
	      1, 0, 1,
	      -1, 0, 1,

	      1, 0, -1,
	      -1, 0, -1,
	      0, 1, 1,

	      0, -1, 1,
	      0, 1, -1,
	      0, -1, -1]),
	    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
	      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
	      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
	      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
	      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
	      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
	      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
	      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
	    noise2D: function(xin, yin) {
	      var permMod12 = this.permMod12;
	      var perm = this.perm;
	      var grad3 = this.grad3;
	      var n0 = 0; // Noise contributions from the three corners
	      var n1 = 0;
	      var n2 = 0;
	      // Skew the input space to determine which simplex cell we're in
	      var s = (xin + yin) * F2; // Hairy factor for 2D
	      var i = Math.floor(xin + s);
	      var j = Math.floor(yin + s);
	      var t = (i + j) * G2;
	      var X0 = i - t; // Unskew the cell origin back to (x,y) space
	      var Y0 = j - t;
	      var x0 = xin - X0; // The x,y distances from the cell origin
	      var y0 = yin - Y0;
	      // For the 2D case, the simplex shape is an equilateral triangle.
	      // Determine which simplex we are in.
	      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
	      if (x0 > y0) {
	        i1 = 1;
	        j1 = 0;
	      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
	      else {
	        i1 = 0;
	        j1 = 1;
	      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
	      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
	      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
	      // c = (3-sqrt(3))/6
	      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
	      var y1 = y0 - j1 + G2;
	      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
	      var y2 = y0 - 1.0 + 2.0 * G2;
	      // Work out the hashed gradient indices of the three simplex corners
	      var ii = i & 255;
	      var jj = j & 255;
	      // Calculate the contribution from the three corners
	      var t0 = 0.5 - x0 * x0 - y0 * y0;
	      if (t0 >= 0) {
	        var gi0 = permMod12[ii + perm[jj]] * 3;
	        t0 *= t0;
	        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
	      }
	      var t1 = 0.5 - x1 * x1 - y1 * y1;
	      if (t1 >= 0) {
	        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
	        t1 *= t1;
	        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
	      }
	      var t2 = 0.5 - x2 * x2 - y2 * y2;
	      if (t2 >= 0) {
	        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
	        t2 *= t2;
	        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
	      }
	      // Add contributions from each corner to get the final noise value.
	      // The result is scaled to return values in the interval [-1,1].
	      return 70.0 * (n0 + n1 + n2);
	    },
	    // 3D simplex noise
	    noise3D: function(xin, yin, zin) {
	      var permMod12 = this.permMod12;
	      var perm = this.perm;
	      var grad3 = this.grad3;
	      var n0, n1, n2, n3; // Noise contributions from the four corners
	      // Skew the input space to determine which simplex cell we're in
	      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
	      var i = Math.floor(xin + s);
	      var j = Math.floor(yin + s);
	      var k = Math.floor(zin + s);
	      var t = (i + j + k) * G3;
	      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
	      var Y0 = j - t;
	      var Z0 = k - t;
	      var x0 = xin - X0; // The x,y,z distances from the cell origin
	      var y0 = yin - Y0;
	      var z0 = zin - Z0;
	      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
	      // Determine which simplex we are in.
	      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
	      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
	      if (x0 >= y0) {
	        if (y0 >= z0) {
	          i1 = 1;
	          j1 = 0;
	          k1 = 0;
	          i2 = 1;
	          j2 = 1;
	          k2 = 0;
	        } // X Y Z order
	        else if (x0 >= z0) {
	          i1 = 1;
	          j1 = 0;
	          k1 = 0;
	          i2 = 1;
	          j2 = 0;
	          k2 = 1;
	        } // X Z Y order
	        else {
	          i1 = 0;
	          j1 = 0;
	          k1 = 1;
	          i2 = 1;
	          j2 = 0;
	          k2 = 1;
	        } // Z X Y order
	      }
	      else { // x0<y0
	        if (y0 < z0) {
	          i1 = 0;
	          j1 = 0;
	          k1 = 1;
	          i2 = 0;
	          j2 = 1;
	          k2 = 1;
	        } // Z Y X order
	        else if (x0 < z0) {
	          i1 = 0;
	          j1 = 1;
	          k1 = 0;
	          i2 = 0;
	          j2 = 1;
	          k2 = 1;
	        } // Y Z X order
	        else {
	          i1 = 0;
	          j1 = 1;
	          k1 = 0;
	          i2 = 1;
	          j2 = 1;
	          k2 = 0;
	        } // Y X Z order
	      }
	      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
	      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
	      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
	      // c = 1/6.
	      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
	      var y1 = y0 - j1 + G3;
	      var z1 = z0 - k1 + G3;
	      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
	      var y2 = y0 - j2 + 2.0 * G3;
	      var z2 = z0 - k2 + 2.0 * G3;
	      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
	      var y3 = y0 - 1.0 + 3.0 * G3;
	      var z3 = z0 - 1.0 + 3.0 * G3;
	      // Work out the hashed gradient indices of the four simplex corners
	      var ii = i & 255;
	      var jj = j & 255;
	      var kk = k & 255;
	      // Calculate the contribution from the four corners
	      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
	      if (t0 < 0) n0 = 0.0;
	      else {
	        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
	        t0 *= t0;
	        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
	      }
	      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
	      if (t1 < 0) n1 = 0.0;
	      else {
	        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
	        t1 *= t1;
	        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
	      }
	      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
	      if (t2 < 0) n2 = 0.0;
	      else {
	        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
	        t2 *= t2;
	        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
	      }
	      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
	      if (t3 < 0) n3 = 0.0;
	      else {
	        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
	        t3 *= t3;
	        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
	      }
	      // Add contributions from each corner to get the final noise value.
	      // The result is scaled to stay just inside [-1,1]
	      return 32.0 * (n0 + n1 + n2 + n3);
	    },
	    // 4D simplex noise, better simplex rank ordering method 2012-03-09
	    noise4D: function(x, y, z, w) {
	      var perm = this.perm;
	      var grad4 = this.grad4;

	      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
	      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
	      var s = (x + y + z + w) * F4; // Factor for 4D skewing
	      var i = Math.floor(x + s);
	      var j = Math.floor(y + s);
	      var k = Math.floor(z + s);
	      var l = Math.floor(w + s);
	      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
	      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
	      var Y0 = j - t;
	      var Z0 = k - t;
	      var W0 = l - t;
	      var x0 = x - X0; // The x,y,z,w distances from the cell origin
	      var y0 = y - Y0;
	      var z0 = z - Z0;
	      var w0 = w - W0;
	      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
	      // To find out which of the 24 possible simplices we're in, we need to
	      // determine the magnitude ordering of x0, y0, z0 and w0.
	      // Six pair-wise comparisons are performed between each possible pair
	      // of the four coordinates, and the results are used to rank the numbers.
	      var rankx = 0;
	      var ranky = 0;
	      var rankz = 0;
	      var rankw = 0;
	      if (x0 > y0) rankx++;
	      else ranky++;
	      if (x0 > z0) rankx++;
	      else rankz++;
	      if (x0 > w0) rankx++;
	      else rankw++;
	      if (y0 > z0) ranky++;
	      else rankz++;
	      if (y0 > w0) ranky++;
	      else rankw++;
	      if (z0 > w0) rankz++;
	      else rankw++;
	      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
	      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
	      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
	      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
	      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
	      // impossible. Only the 24 indices which have non-zero entries make any sense.
	      // We use a thresholding to set the coordinates in turn from the largest magnitude.
	      // Rank 3 denotes the largest coordinate.
	      i1 = rankx >= 3 ? 1 : 0;
	      j1 = ranky >= 3 ? 1 : 0;
	      k1 = rankz >= 3 ? 1 : 0;
	      l1 = rankw >= 3 ? 1 : 0;
	      // Rank 2 denotes the second largest coordinate.
	      i2 = rankx >= 2 ? 1 : 0;
	      j2 = ranky >= 2 ? 1 : 0;
	      k2 = rankz >= 2 ? 1 : 0;
	      l2 = rankw >= 2 ? 1 : 0;
	      // Rank 1 denotes the second smallest coordinate.
	      i3 = rankx >= 1 ? 1 : 0;
	      j3 = ranky >= 1 ? 1 : 0;
	      k3 = rankz >= 1 ? 1 : 0;
	      l3 = rankw >= 1 ? 1 : 0;
	      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
	      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
	      var y1 = y0 - j1 + G4;
	      var z1 = z0 - k1 + G4;
	      var w1 = w0 - l1 + G4;
	      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
	      var y2 = y0 - j2 + 2.0 * G4;
	      var z2 = z0 - k2 + 2.0 * G4;
	      var w2 = w0 - l2 + 2.0 * G4;
	      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
	      var y3 = y0 - j3 + 3.0 * G4;
	      var z3 = z0 - k3 + 3.0 * G4;
	      var w3 = w0 - l3 + 3.0 * G4;
	      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
	      var y4 = y0 - 1.0 + 4.0 * G4;
	      var z4 = z0 - 1.0 + 4.0 * G4;
	      var w4 = w0 - 1.0 + 4.0 * G4;
	      // Work out the hashed gradient indices of the five simplex corners
	      var ii = i & 255;
	      var jj = j & 255;
	      var kk = k & 255;
	      var ll = l & 255;
	      // Calculate the contribution from the five corners
	      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
	      if (t0 < 0) n0 = 0.0;
	      else {
	        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
	        t0 *= t0;
	        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
	      }
	      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
	      if (t1 < 0) n1 = 0.0;
	      else {
	        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
	        t1 *= t1;
	        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
	      }
	      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
	      if (t2 < 0) n2 = 0.0;
	      else {
	        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
	        t2 *= t2;
	        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
	      }
	      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
	      if (t3 < 0) n3 = 0.0;
	      else {
	        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
	        t3 *= t3;
	        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
	      }
	      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
	      if (t4 < 0) n4 = 0.0;
	      else {
	        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
	        t4 *= t4;
	        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
	      }
	      // Sum up and scale the result to cover the range [-1,1]
	      return 27.0 * (n0 + n1 + n2 + n3 + n4);
	    }
	  };

	  function buildPermutationTable(random) {
	    var i;
	    var p = new Uint8Array(256);
	    for (i = 0; i < 256; i++) {
	      p[i] = i;
	    }
	    for (i = 0; i < 255; i++) {
	      var r = i + ~~(random() * (256 - i));
	      var aux = p[i];
	      p[i] = p[r];
	      p[r] = aux;
	    }
	    return p;
	  }
	  SimplexNoise._buildPermutationTable = buildPermutationTable;

	  function alea() {
	    // Johannes Baagøe <baagoe@baagoe.com>, 2010
	    var s0 = 0;
	    var s1 = 0;
	    var s2 = 0;
	    var c = 1;

	    var mash = masher();
	    s0 = mash(' ');
	    s1 = mash(' ');
	    s2 = mash(' ');

	    for (var i = 0; i < arguments.length; i++) {
	      s0 -= mash(arguments[i]);
	      if (s0 < 0) {
	        s0 += 1;
	      }
	      s1 -= mash(arguments[i]);
	      if (s1 < 0) {
	        s1 += 1;
	      }
	      s2 -= mash(arguments[i]);
	      if (s2 < 0) {
	        s2 += 1;
	      }
	    }
	    mash = null;
	    return function() {
	      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
	      s0 = s1;
	      s1 = s2;
	      return s2 = t - (c = t | 0);
	    };
	  }
	  function masher() {
	    var n = 0xefc8249d;
	    return function(data) {
	      data = data.toString();
	      for (var i = 0; i < data.length; i++) {
	        n += data.charCodeAt(i);
	        var h = 0.02519603282416938 * n;
	        n = h >>> 0;
	        h -= n;
	        h *= n;
	        n = h >>> 0;
	        h -= n;
	        n += h * 0x100000000; // 2^32
	      }
	      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
	    };
	  }

	  // amd
	  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return SimplexNoise;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  // common js
	  if (true) exports.SimplexNoise = SimplexNoise;
	  // browser
	  else if (typeof window !== 'undefined') window.SimplexNoise = SimplexNoise;
	  // nodejs
	  if (true) {
	    module.exports = SimplexNoise;
	  }

	})();


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _simplexNoise = __webpack_require__(34);

	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

	var _Grass = __webpack_require__(28);

	var _Grass2 = _interopRequireDefault(_Grass);

	var _InstancedGrassyField = __webpack_require__(36);

	var _Land = __webpack_require__(33);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Generative objects


	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	function stringToHex(str) {
	  return parseInt(str.substring(1), 16);
	}

	var InstancedHillApp = function (_QuentinLike) {
	  _inherits(InstancedHillApp, _QuentinLike);

	  function InstancedHillApp(params) {
	    _classCallCheck(this, InstancedHillApp);

	    var _this = _possibleConstructorReturn(this, (InstancedHillApp.__proto__ || Object.getPrototypeOf(InstancedHillApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(InstancedHillApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 1000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.ambientLight = new THREE.AmbientLight(0xCCCCCC);
	      this.directionalLight = new THREE.DirectionalLight(0x333333, 0.5);
	      this.pointLight1 = new THREE.PointLight(0x333333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x333333, 2, 800);

	      this.directionalLight.position.set(0, 0, -1);
	      this.pointLight1.position.set(0, 10, -10);
	      this.pointLight2.position.set(0, 10, -10);

	      this.directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      this.scene.add(this.directionalLight);
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setPixelRatio(1.2);
	      this.renderer.setClearColor(0xFFFFFF);

	      // Helper setup functions
	      this.setupTrack();

	      // Add visible components
	      this.addFloor();

	      /*
	      for (let i=-8; i <= 8; i++) {
	        let x = 8*i;
	        this.addTombstone(x, 0);
	      }
	      //*/

	      var start = (0, _utils.getElapsedTime)();
	      this.addGrassyField();
	      console.log("Create grassy field time:", (0, _utils.getElapsedTime)() - start);

	      this.force = new THREE.Vector3(0, 0, 1);
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);

	      this.loadObjs();
	    }

	    // Setup a camera track... but in this case actually do nothing

	  }, {
	    key: 'setupTrack',
	    value: function setupTrack() {
	      this.camera.position.set(0, 30, 80);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }

	    /**
	     * Create the Force ArrowHelper and Update
	     */

	  }, {
	    key: 'addForceArrow',
	    value: function addForceArrow() {
	      this.forceArrow = new THREE.ArrowHelper(this.force, this.dest, norm(this.force), 0x000000);
	      this.scene.add(this.forceArrow);
	      // this.updateForceArrow();
	    }

	    /**
	     * Update Force ArrowHelper
	     */

	  }, {
	    key: 'updateForceArrow',
	    value: function updateForceArrow() {
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	      this.forceArrow.setLength(norm(this.force));
	      this.forceArrow.position.x = this.force.x;
	      this.forceArrow.position.y = this.force.y;
	      this.forceArrow.position.z = this.force.z;
	      this.forceArrow.position.multiplyScalar(-1);
	    }

	    /**
	     * ...
	     */

	  }, {
	    key: 'addGrassyField',
	    value: function addGrassyField() {
	      console.log("Meow!");
	      this.field = new _InstancedGrassyField.InstancedGrassyField(30, 30, 9.0, 30, this.floor.f);
	      this.fieldMesh = new THREE.Mesh(this.field.geometry(), this.grassMaterial);
	      this.scene.add(this.fieldMesh);
	      console.log(">>>>>");
	    }
	  }, {
	    key: 'setPhong',
	    value: function setPhong(_ref) {
	      var color = _ref.color,
	          emissive = _ref.emissive,
	          specular = _ref.specular,
	          shininess = _ref.shininess,
	          reflectivity = _ref.reflectivity;

	      this.grassMaterial = new THREE.MeshPhongMaterial({
	        color: stringToHex(color),
	        emissive: stringToHex(emissive),
	        specular: stringToHex(specular),
	        shininess: shininess,
	        reflectivity: reflectivity,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });
	      this.fieldMesh.material = this.grassMaterial;
	      // this.fieldMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
	    }
	  }, {
	    key: 'addTombstone',
	    value: function addTombstone(x, z) {
	      var geometry = new THREE.BoxGeometry(4, 8, 1);
	      var material = new THREE.MeshPhongMaterial({
	        color: 0x333333,
	        emissive: 0x777777,
	        specular: 0x000000,
	        reflectivity: 0,
	        shininess: 0,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });
	      var cube = new THREE.Mesh(geometry, material);
	      cube.position.x = x;
	      cube.position.y = 4;;
	      cube.position.z = z;
	      // cube.rotation.y = Math.PI/4;
	      this.scene.add(cube);
	    }
	  }, {
	    key: 'loadObjs',
	    value: function loadObjs() {
	      var loader = new THREE.OBJLoader();
	      var scene = this.scene;
	      loader.load('obj/Tombstone.obj', function (obj) {
	        scene.add(obj);
	      }, function (xhr) {}, function (err) {
	        console.error(err);
	      });
	    }
	  }, {
	    key: 'addTombstones',
	    value: function addTombstones() {}

	    // Just draw a simple floor

	  }, {
	    key: 'addFloor',
	    value: function addFloor() {
	      var mat = new THREE.MeshPhongMaterial({
	        color: 0x33333,
	        emissive: 0x000000,
	        specular: 0x000000,
	        shininess: 0.0,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });

	      var _abc = function () {
	        var s = 80.0;
	        var simplex = new _simplexNoise2.default("whatever");
	        return function (x, y) {
	          return 4.0 * simplex.noise2D(x / s, y / s);
	        };
	      }();

	      this.floor = new _Land.Land({
	        height: 50,
	        width: 50,
	        floor: _abc
	      });

	      // this.addGrid();
	      // let geo = this.floor.getMesh();

	      // this.scene.add(new THREE.Mesh(geo, mat));
	    }
	  }, {
	    key: 'addGrid',
	    value: function addGrid() {
	      var mat = new THREE.LineBasicMaterial({ color: 0xB7B7BA });
	      var VALS = 100;
	      for (var i = -VALS; i <= VALS; i++) {
	        var geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(i, 0, -80));
	        geo.vertices.push(new THREE.Vector3(i, 0, 80));
	        this.scene.add(new THREE.Line(geo, mat));
	        geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(-80, 0, i));
	        geo.vertices.push(new THREE.Vector3(80, 0, i));
	        this.scene.add(new THREE.Line(geo, mat));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      var t = +new Date() / 100000.0;
	      var r = 90;
	      var x = r * Math.cos(t);
	      var z = r * Math.sin(t);
	      var y = params.y;

	      var a = r * Math.cos(t),
	          b = y,
	          c = r * Math.sin(t);

	      // ...

	      this.camera.position.set(a, b, c);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'setupCamera',
	    value: function setupCamera() {
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);
	    }
	  }, {
	    key: 'setSize',
	    value: function setSize(width, height) {
	      this.app.width = width;
	      this.app.height = height;
	      this.app.aspect = width / height;
	      this.setupCamera();
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(this.app.width, this.app.height);
	    }
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this.setSize(width, height);
	    }
	  }, {
	    key: 'updateForce',
	    value: function updateForce(n) {
	      this.force.normalize();
	      this.force.multiplyScalar(n);
	      this.updateForceArrow();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return InstancedHillApp;
	}(_Quentin2.default);

	exports.default = InstancedHillApp;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InstancedGrassyField = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _Grass = __webpack_require__(28);

	var _Grass2 = _interopRequireDefault(_Grass);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function magnitude(vec, s) {
	  return (0, _math.scale)((0, _math.normalize)(vec), s);
	}

	function extend(xs, ys) {
	  ys.forEach(function (y) {
	    xs.push(y);
	  });
	}

	function translate(xs, _ref) {
	  var _ref2 = _slicedToArray(_ref, 3),
	      x = _ref2[0],
	      y = _ref2[1],
	      z = _ref2[2];

	  for (var i = 0; i < xs.length; i += 3) {
	    xs[i + 0] += x;
	    xs[i + 1] += y;
	    xs[i + 2] += z;
	  }
	}

	function rotateyMesh(xs, rot) {
	  if (xs.length % 3 != 0) {
	    throw "whatever";
	  }

	  for (var i = 0; i < xs.length; i += 3) {
	    var x = xs[i + 0];
	    var z = xs[i + 2];
	    xs[i + 0] = x * Math.cos(rot) + z * Math.sin(rot);
	    xs[i + 2] = -x * Math.sin(rot) + z * Math.cos(rot);
	  }
	}

	var InstancedGrassyField = exports.InstancedGrassyField = function () {
	  function InstancedGrassyField(width, height, density, variations, floor) {
	    _classCallCheck(this, InstancedGrassyField);

	    console.log("[Loading instanced grassy field]]");
	    this.width = width;
	    this.height = height;
	    this.density = density || 1.0;
	    this.variations = variations || 20;
	    this.blades = [];
	    this.floor = floor || undefined;

	    this.vertices = [];
	    this.normals = [];

	    // Make all the different variations
	    for (var i = 0; i < variations; i++) {
	      var bend = Math.PI / 30 * Math.random();
	      var rot = 2 * Math.PI * (Math.random() - 0.5);

	      var _blade2 = this.blade(bend, rot),
	          _blade3 = _slicedToArray(_blade2, 2),
	          v = _blade3[0],
	          n = _blade3[1];

	      v = Float32Array.from(v);
	      n = Float32Array.from(n);

	      var bgeo = new THREE.BufferGeometry();
	      bgeo.addAttribute('position', new THREE.BufferAttribute(v, 3));
	      bgeo.addAttribute('normal', new THREE.BufferAttribute(n, 3));

	      var igeo = new THREE.InstancedBufferGeometry();
	      igeo.addAttribute('position', v);
	      igeo.addAttribute('normal', n);
	    }

	    console.log(this.shader());

	    return;

	    var bladeStart = (0, _utils.getElapsedTime)();

	    var X_SEGS = 90;
	    var Y_SEGS = 91;

	    X_SEGS = Math.floor(this.width * Math.sqrt(this.density));
	    Y_SEGS = Math.floor(this.height * Math.sqrt(this.density));

	    var DX = this.width / X_SEGS;
	    var DY = this.height / Y_SEGS;

	    function stagger() {
	      var r = 2 * Math.random() - 1.0;
	      return r * DX / 2.0;
	    }

	    for (var _i = 0; _i < X_SEGS; _i++) {
	      for (var j = 0; j < Y_SEGS; j++) {
	        var k = Math.floor(this.blades.length * Math.random());
	        var x = _i * DX - this.width / 2.0 + stagger();
	        var z = j * DY - this.width / 2.0 + stagger();
	        var y = this.floor(x, z);

	        var _blades$k = _slicedToArray(this.blades[k], 2),
	            v = _blades$k[0],
	            n = _blades$k[1];

	        v = v.slice();
	        translate(v, [x, y, z]);
	        extend(this.vertices, v);
	        extend(this.normals, n);
	      }
	    }

	    console.log("Extend array time:", (0, _utils.getElapsedTime)() - bladeStart);
	  }

	  _createClass(InstancedGrassyField, [{
	    key: 'shader',
	    value: function shader() {
	      return new THREE.RawShaderMaterial({
	        vertexShader: __webpack_require__(37),
	        fragmentShader: __webpack_require__(38),
	        uniforms: {}
	      });
	    }

	    /**
	     * Return geometry matrix for a blade of grass
	     */

	  }, {
	    key: 'blade',
	    value: function blade(theta, rot) {
	      var _blade4 = this._blade(theta),
	          _blade5 = _slicedToArray(_blade4, 2),
	          v = _blade5[0],
	          n = _blade5[1];

	      rotateyMesh(v, rot);
	      rotateyMesh(n, rot);

	      return [v, n];
	    }
	  }, {
	    key: '_blade',
	    value: function _blade(theta) {
	      var x = 0;
	      var y = 0;
	      var z = 0;

	      // Params
	      var NUM_SEGMENTS = 10;
	      var HEIGHT_SEGMENT = 0.08 + 0.03 * Math.random();
	      var WIDTH_SEGMENT = 0.10;

	      // Build segments
	      var segments = [];
	      var vertices = [];
	      var normals = [];

	      for (var i = 0; i <= NUM_SEGMENTS; i++) {
	        var t = theta * i;
	        var _ref3 = [0, Math.cos(t), Math.sin(t)],
	            _x = _ref3[0],
	            _y = _ref3[1],
	            _z = _ref3[2];

	        var _cross = (0, _math.cross)([1, 0, 0], [_x, _y, _z]),
	            _cross2 = _slicedToArray(_cross, 3),
	            a = _cross2[0],
	            b = _cross2[1],
	            c = _cross2[2];

	        segments.push({
	          'delta': magnitude([_x, _y, _z], HEIGHT_SEGMENT),
	          'normal': (0, _math.normalize)([a, b, c])
	        });
	      }

	      for (var _i2 = 0; _i2 <= NUM_SEGMENTS; _i2++) {
	        var _segments$_i2$delta = _slicedToArray(segments[_i2].delta, 3),
	            dx = _segments$_i2$delta[0],
	            dy = _segments$_i2$delta[1],
	            dz = _segments$_i2$delta[2];

	        var s = (NUM_SEGMENTS - _i2 + 1) / NUM_SEGMENTS;

	        var a = [x + WIDTH_SEGMENT * s, y, z];
	        var b = [x - WIDTH_SEGMENT * s, y, z];
	        var c = [x + dx + WIDTH_SEGMENT * s, y + dy, z + dz];
	        var d = [x + dx - WIDTH_SEGMENT * s, y + dy, z + dz];

	        // Face 1
	        extend(vertices, b);
	        extend(vertices, a);
	        extend(vertices, c);

	        // Face 2
	        extend(vertices, b);
	        extend(vertices, c);
	        extend(vertices, d);

	        // Normals
	        var n = segments[_i2].normal;
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);
	        extend(normals, n);

	        x += dx;
	        y += dy;
	        z += dz;
	      }

	      return [vertices, normals];
	    }
	  }, {
	    key: 'geometry',
	    value: function geometry() {
	      this.geo = new THREE.BufferGeometry();

	      var start = (0, _utils.getElapsedTime)();
	      var v = Float32Array.from(this.vertices);

	      this.geo.addAttribute('position', new THREE.BufferAttribute(v, 3));

	      var n = Float32Array.from(this.normals);
	      this.geo.addAttribute('normal', new THREE.BufferAttribute(n, 3));
	      console.log("Copy array time:", (0, _utils.getElapsedTime)() - start);
	      return this.geo;
	    }
	  }]);

	  return InstancedGrassyField;
	}();

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "#define SHADER_NAME grassy_vert\n\nprecision highp float;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nattribute vec3 position;\nattribute vec3 mcol0;\nattribute vec3 mcol1;\nattribute vec3 mcol2;\nattribute vec3 mcol3;\n\n#ifdef PICKING\nattribute vec3 pickingColor;\n#else\nattribute vec3 color;\nvarying vec3 vPosition;\n#endif\n\nvarying vec3 vColor;\n\nvoid main()\t{\n\n  // ...\n  mat4 matrix = mat4(\n    vec4( mcol0, 0 ),\n    vec4( mcol1, 0 ),\n    vec4( mcol2, 0 ),\n    vec4( mcol3, 1 ),\n  );\n\n  vec3 positionEye = ( modelViewMatrix * matrix * vec4( position, 1.0 ) ).xyz;\n\n#ifdef PICKING\n  vColor = pickingColor;\n#else\n  vColor = color;\n  vPosition = positionEye;\n#endif\n\n  gl_Position = projectionMatrix * vec4( positionEye, 1.0 );\n\n}\n"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = ""

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _StarrySky = __webpack_require__(40);

	var _SunnySky = __webpack_require__(43);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _simplexNoise = __webpack_require__(34);

	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

	var _GrassyField = __webpack_require__(30);

	var _Land = __webpack_require__(33);

	var _TriangleSurface = __webpack_require__(26);

	var _TriangleSurface2 = _interopRequireDefault(_TriangleSurface);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Generative objects


	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	var KanyeApp = function (_QuentinLike) {
	  _inherits(KanyeApp, _QuentinLike);

	  function KanyeApp(params) {
	    _classCallCheck(this, KanyeApp);

	    var _this = _possibleConstructorReturn(this, (KanyeApp.__proto__ || Object.getPrototypeOf(KanyeApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(KanyeApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 2000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.ambientLight = new THREE.AmbientLight(0xCCCCCC);
	      this.directionalLight = new THREE.DirectionalLight(0x333333, 0.5);
	      this.pointLight1 = new THREE.PointLight(0x333333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x333333, 2, 800);

	      this.directionalLight.position.set(0, 0, -1);
	      this.pointLight1.position.set(0, 10, -10);
	      this.pointLight2.position.set(0, 10, -10);

	      this.directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      this.scene.add(this.directionalLight);
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setPixelRatio(1.2);
	      this.renderer.setClearColor(0xFFFFFF);

	      // Sky
	      this.sky = this.getSky();

	      this.scene.add(this.sky.sky);
	      this.setTheta(0.0);

	      // Add visible components

	      var start = (0, _utils.getElapsedTime)();
	      this.fieldMesh = {};

	      this.addFloor();
	    }

	    /**
	     * Return a sky [and helper objects]
	     */

	  }, {
	    key: 'getSky',
	    value: function getSky() {
	      return new _SunnySky.SunnySky({
	        size: 950.0,
	        sunPosition: [1, 0, 0]
	      });
	    }
	  }, {
	    key: 'setPhong',
	    value: function setPhong(_ref) {
	      var color = _ref.color,
	          emissive = _ref.emissive,
	          specular = _ref.specular,
	          shininess = _ref.shininess,
	          reflectivity = _ref.reflectivity;

	      this.grassMaterial = new THREE.MeshPhongMaterial({
	        color: (0, _utils.stringToHex)(color),
	        emissive: (0, _utils.stringToHex)(emissive),
	        specular: (0, _utils.stringToHex)(specular),
	        shininess: shininess,
	        reflectivity: reflectivity,
	        // shading: THREE.SmoothShading,
	        flatShading: true,
	        side: THREE.BackSide
	      });
	      this.fieldMesh.material = this.grassMaterial;
	      // this.fieldMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
	    }

	    // Set the theta of the sky

	  }, {
	    key: 'setTheta',
	    value: function setTheta(theta) {
	      this.skyTheta = theta;
	      this.skyAxis = new THREE.Vector3(Math.cos(-theta), Math.sin(-theta), 0.0);
	    }
	  }, {
	    key: 'addFloor',
	    value: function addFloor() {
	      var _this2 = this;

	      var mat = new THREE.MeshPhongMaterial({
	        color: 0x00000,
	        emissive: 0x000000,
	        specular: 0x000000,
	        shininess: 0.0,
	        // shading: THREE.SmoothShading,
	        flatShading: true,
	        side: THREE.DoubleSide
	      });

	      var _abc = function () {
	        var s = 30.0;
	        var simplex = new _simplexNoise2.default("whatever");
	        return function (x, y) {
	          return 10.0 * simplex.noise2D(x / s, y / s);
	        };
	      }();

	      this.floor = new _Land.Land({
	        height: 100.0,
	        width: 100.0,
	        floor: _abc
	      });

	      var images = [];

	      var loader = new THREE.FontLoader();
	      loader.load('helvetiker.json', function (font) {
	        var textGeo = new THREE.TextGeometry("you know better", {
	          font: font,
	          size: 3.0,
	          height: 0.01,
	          curveSegments: 12,
	          bevelEnabled: false
	        });
	        var textMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
	        _this2.scene.add(new THREE.Mesh(textGeo, textMat));
	      });

	      var floorMat = new THREE.MeshBasicMaterial({
	        color: 0x000000,
	        wireframe: false,
	        side: THREE.DoubleSide
	      });

	      var surface = new _TriangleSurface2.default(this.floor.f, 4.0, 1000.0, 1000.0);

	      this.scene.add(new THREE.Mesh(surface.build(), floorMat));
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      var t = +new Date() / 200.0 / 1.0;
	      var f = t / 70.;

	      // ...
	      var TWOPI = 2 * Math.PI;
	      var theta = f % 2 * Math.PI;

	      // xD
	      var a = 0,
	          b = 10.0,
	          c = 0;

	      this.camera.position.set(a, b, c);
	      this.camera.lookAt(-1.0, b, 0);
	      this.sky.mat.uniforms.theta.value = theta;
	      /*
	      this.sky.sky.position.x = a;
	      this.sky.sky.position.y = b;
	      this.sky.sky.position.z = c;
	      //*/

	      // ...
	      var u = 2. * theta;
	      var x = Math.sin(u);
	      var y = 0.1 * Math.cos(u);
	      var z = 0.1 * Math.sin(u);
	      this.sky.setSunPosition(-1.0, y, z);
	    }
	  }, {
	    key: 'setupCamera',
	    value: function setupCamera() {
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);
	    }
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this.app.width = width;
	      this.app.height = height;
	      this.app.aspect = width / height;
	      this.setupCamera();
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(this.app.width, this.app.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return KanyeApp;
	}(_Quentin2.default);

	exports.default = KanyeApp;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.sky = sky;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var vert = __webpack_require__(41);
	var frag = __webpack_require__(42);

	var SKY_SIZE = 2;

	// Return the L-infinity norm of a 3-array
	function linf(v) {
	  return Math.max(Math.abs(v[0]), Math.abs(v[1]), Math.abs(v[2]));
	}

	/**
	 * Return a sky object
	 */
	function sky(stars, boxSize) {
	  try {
	    var size = Math.floor(3 * boxSize);
	    var skyBox = new THREE.CubeGeometry(boxSize, boxSize, boxSize, 1, 1, 1);
	    var skyMat = skyMaterial(stars, size);
	    var skyMesh = new THREE.Mesh(skyBox, skyMat);
	    return skyMesh;
	  } catch (err) {
	    console.log("Fail", err);
	  }
	}

	/**
	 * Return information to determine which face the texture is on
	 */
	function sidetc(v) {
	  var norm = -1;
	  var sign = undefined;
	  var coord = -1;

	  for (var i = 0; i < v.length; i++) {
	    var x = Math.abs(v[i]);
	    if (x > norm) {
	      norm = x;
	      sign = v[i] >= 0 ? 1 : -1;
	      coord = i;
	    }
	  }

	  return [norm, sign, coord];
	}

	/**
	 * Return uv-coord from the xyz-coord
	 */
	function remap(_ref, skyWidth, skyHeight) {
	  var _ref2 = _slicedToArray(_ref, 3),
	      x = _ref2[0],
	      y = _ref2[1],
	      z = _ref2[2];

	  var _sidetc = sidetc([x, y, z]),
	      _sidetc2 = _slicedToArray(_sidetc, 3),
	      n = _sidetc2[0],
	      s = _sidetc2[1],
	      i = _sidetc2[2];

	  var u = -1,
	      v = -1;

	  var face = 0;

	  switch (i) {
	    // X-coord dominant
	    case 0:
	      u = -s * z / n;
	      v = y / n;
	      face = s > 0 ? 0 : 1;
	      break;
	    case 1:
	      u = x / n;
	      v = -s * z / n;
	      face = s > 0 ? 2 : 3;
	      break;
	    case 2:
	      u = s * x / n;
	      v = y / n;
	      face = s > 0 ? 4 : 5;
	      break;
	    default:
	      throw "What the fuck";
	  }

	  u = (u + 1) / 2. * skyWidth;
	  v = (v + 1) / 2. * skyHeight;

	  return [Math.floor(u), Math.floor(v), face];
	}

	function __blank_data(width, height) {
	  var size = width * height;
	  return new Uint8Array(4 * size);
	}

	// {X,Y,Z}{-,+}-Faces for cube
	var X_POSITIVE = 0;
	var X_NEGATIVE = 1;
	var Y_POSITIVE = 2;
	var Y_NEGATIVE = 3;
	var Z_POSITIVE = 4;
	var Z_NEGATIVE = 5;

	/**
	 * Return sky texture
	 */
	function skyTextures(stars, width, height) {
	  var size = width * height;

	  var data = [];

	  for (var j = 0; j < 6; j++) {
	    var r = Math.floor(Math.random() * 255);
	    r = 0;
	    data.push(__blank_data(width, height));
	    for (var i = 0; i < size; i++) {
	      data[j][4 * i + 0] = r;
	      data[j][4 * i + 1] = r;
	      data[j][4 * i + 2] = r;
	      data[j][4 * i + 3] = 255;
	    }
	  }

	  function setWhite(lis, x, y, lum) {
	    lum = lum || 255.0;
	    var i = 4 * (y * height + x);
	    lis[i + 0] = lum;
	    lis[i + 1] = lum;
	    lis[i + 2] = lum;
	    lis[i + 3] = lum;
	  }

	  stars = stars || [];

	  var lum = 0;
	  stars.forEach(function (v) {
	    lum = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

	    var _remap = remap(v, width, height),
	        _remap2 = _slicedToArray(_remap, 3),
	        x = _remap2[0],
	        y = _remap2[1],
	        i = _remap2[2];

	    if (x >= 0 && y >= 0) {
	      setWhite(data[i], x, y, Math.floor(255 * lum));
	    }
	  });

	  function __texture(data) {
	    var tex = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.UnsignedByteType, THREE.UVMapping);
	    tex.needsUpdate = true;
	    return tex;
	  }

	  return [__texture(data[X_POSITIVE]), __texture(data[X_NEGATIVE]), __texture(data[Y_POSITIVE]), __texture(data[Y_NEGATIVE]), __texture(data[Z_POSITIVE]), __texture(data[Z_NEGATIVE])];
	}

	/**
	 * Return a sky material
	 */
	function skyMaterial(stars, size) {

	  var width = size;
	  var height = size;

	  var uniforms = {
	    time: { value: 1.0 },
	    dir: { value: new THREE.Vector3(0.0, 0.0, 1.0), type: 'v3' }
	  };

	  var textures = skyTextures(stars, width, height);

	  var faceMaterials = [new THREE.MeshBasicMaterial({ map: textures[0], side: THREE.DoubleSide }), new THREE.MeshBasicMaterial({ map: textures[1], side: THREE.DoubleSide }), new THREE.MeshBasicMaterial({ map: textures[2], side: THREE.DoubleSide }), new THREE.MeshBasicMaterial({ map: textures[3], side: THREE.DoubleSide }), new THREE.MeshBasicMaterial({ map: textures[4], side: THREE.DoubleSide }), new THREE.MeshBasicMaterial({ map: textures[5], side: THREE.DoubleSide })];

	  return faceMaterials;
	}

	var StarrySky = exports.StarrySky = function StarrySky(stars, boxSize) {
	  _classCallCheck(this, StarrySky);

	  this.stars = stars;
	  var size = Math.floor(3 * boxSize);
	  this.sky = sky(stars, boxSize);
	  this.textures = skyTextures(stars, size, size);
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "varying vec4 n;\nvoid main() {\n  n = vec4(normal, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = "uniform float time;\nuniform vec3 dir;\nvarying vec4 n;\n\nvoid main() {\n  float x = sin(time);\n  vec4 u = normalize(vec4(dir, 1.0));\n  vec4 v = normalize(n);\n  float l = dot(u, v);\n  // l = (sin(time) + 1.0)/2.0;\n\n  // gl_FragColor = n;\n  gl_FragColor = vec4(l, l, l, 1.0);\n  // gl_FragColor = vec4(l, l, l, 1.0);\n}\n"

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SunnySky = exports.SunnySky = function () {
	  function SunnySky(_ref) {
	    var size = _ref.size,
	        sunPosition = _ref.sunPosition;

	    _classCallCheck(this, SunnySky);

	    this.size = size;
	    this.demoSun = this.getDemoSphere(sunPosition);
	    this.geo = this.geometry();
	    this.mat = this.material();
	    this.sky = new THREE.Group();
	    this.sky.add(new THREE.Mesh(this.geo, this.mat));
	  }

	  _createClass(SunnySky, [{
	    key: 'getDemoSphere',
	    value: function getDemoSphere(_ref2) {
	      var _ref3 = _slicedToArray(_ref2, 3),
	          x = _ref3[0],
	          y = _ref3[1],
	          z = _ref3[2];

	      var geo = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }));
	      geo.position.x = x;
	      geo.position.y = y;
	      geo.position.z = z;
	      return geo;
	    }
	  }, {
	    key: 'geometry',
	    value: function geometry() {
	      var size = this.size;
	      var geo = new THREE.BoxGeometry(size, size, size, 1, 1, 1);
	      return geo;
	    }

	    // Return material for

	  }, {
	    key: 'material',
	    value: function material() {
	      return new THREE.ShaderMaterial({
	        transparent: true,
	        vertexShader: __webpack_require__(44),
	        fragmentShader: __webpack_require__(45),
	        side: THREE.DoubleSide,
	        uniforms: {
	          rayleigh: { value: 4.0 },
	          turbidity: { value: 4.9 },
	          mieDirectionalG: { value: 0.0 },
	          mieCoefficient: { value: 0.0 },
	          luminance: { value: 1.0 },
	          sunPosition: { value: this.demoSun.position },

	          theta: { value: 0.3 },
	          size: { value: this.size }
	        }
	      });
	    }
	  }, {
	    key: 'setSunPosition',
	    value: function setSunPosition(x, y, z) {
	      this.demoSun.position.x = x;
	      this.demoSun.position.y = y;
	      this.demoSun.position.z = z;
	    }
	  }]);

	  return SunnySky;
	}();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "// precision mediump float;\n// precision mediump int;\n\n// uniform mat4 modelViewMatrix; // optional\n// uniform mat4 projectionMatrix; // optional\n\nuniform float size;\nuniform vec3 sunPosition;\n\nvarying vec3 vPosition;\n\n/**\n * \n */\nvarying vec3 vWorldPosition;\nvarying vec3 vSunDirection;\nvarying float vSunfade;\nvarying vec3 vBetaR;\nvarying vec3 vBetaM;\nvarying float vSunE;\n\nuniform float rayleigh;\nuniform float turbidity;\nuniform float mieCoefficient;\n\nconst vec3 up = vec3(0.0, 1.0, 0.0);\n\n// constants for atmospheric scattering\nconst float e = 2.71828182845904523536028747135266249775724709369995957;\nconst float pi = 3.141592653589793238462643383279502884197169;\n\n// wavelength of used primaries, according to preetham\nconst vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\nconst vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n\n// mie stuff\n// K coefficient for the primaries\nconst float v = 4.0;\nconst vec3 K = vec3( 0.686, 0.678, 0.666 );\n\n// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\nconst vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n\n// earth shadow hack\n// cutoffAngle = pi / 1.95;\nconst float cutoffAngle = 1.6110731556870734;\nconst float steepness = 1.5;\nconst float EE = 1000.0;\n\nfloat sunIntensity( float zenithAngleCos ) {\n  zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n  return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n}\n\nvec3 totalMie( float T ) {\n\tfloat c = ( 0.2 * T ) * 10E-18;\n\treturn 0.434 * c * MieConst;\n}\n\nvoid main() {\n\n  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n  vWorldPosition = worldPosition.xyz;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position.z = gl_Position.w; // set z to camera.far\n\n  vSunDirection = normalize( sunPosition );\n\n  vSunE = sunIntensity( dot( vSunDirection, up ) );\n\n  vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n\n  float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n\n  // extinction (absorbtion + out scattering)\n  // rayleigh coefficients\n  vBetaR = totalRayleigh * rayleighCoefficient;\n\n  // mie coefficients\n  vBetaM = totalMie( turbidity ) * mieCoefficient;\n\n}\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = "\nvarying vec3 vWorldPosition;\nvarying vec3 vSunDirection;\nvarying float vSunfade;\nvarying vec3 vBetaR;\nvarying vec3 vBetaM;\nvarying float vSunE;\n\nuniform float luminance;\nuniform float mieDirectionalG;\n\nconst vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n\n// constants for atmospheric scattering\nconst float pi = 3.141592653589793238462643383279502884197169;\n\nconst float n = 1.0003; // refractive index of air\nconst float N = 2.545E25; // number of molecules per unit volume for air at\n// 288.15K and 1013mb (sea level -45 celsius)\n\n// optical length at zenith for molecules\nconst float rayleighZenithLength = 8.4E3;\nconst float mieZenithLength = 1.25E3;\nconst vec3 up = vec3( 0.0, 1.0, 0.0 );\n// 66 arc seconds -> degrees, and the cosine of that\nconst float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n\n// 3.0 / ( 16.0 * pi )\nconst float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n// 1.0 / ( 4.0 * pi )\nconst float ONE_OVER_FOURPI = 0.07957747154594767;\n\nfloat rayleighPhase( float cosTheta ) {\n  return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n}\n\nfloat hgPhase( float cosTheta, float g ) {\n  float g2 = pow( g, 2.0 );\n  float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n  return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n}\n\n// Filmic ToneMapping http://filmicgames.com/archives/75\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nconst float whiteScale = 1.0748724675633854; // 1.0 / Uncharted2Tonemap(1000.0)\n\nvec3 Uncharted2Tonemap( vec3 x ) {\n  return ( ( x * ( A * x + C * B ) + D * E ) / ( x * ( A * x + B ) + D * F ) ) - E / F;\n}\n\n\nvoid main() {\n  // optical length\n  // cutoff angle at 90 to avoid singularity in next formula.\n  float zenithAngle = acos( max( 0.0, dot( up, normalize( vWorldPosition - cameraPos ) ) ) );\n  float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n  float sR = rayleighZenithLength * inverse;\n  float sM = mieZenithLength * inverse;\n\n  // combined extinction factor\n  vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n\n  // in scattering\n  float cosTheta = dot( normalize( vWorldPosition - cameraPos ), vSunDirection );\n\n  float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );\n  vec3 betaRTheta = vBetaR * rPhase;\n\n  float mPhase = hgPhase( cosTheta, mieDirectionalG );\n  vec3 betaMTheta = vBetaM * mPhase;\n\n  vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );\n  Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );\n\n  // nightsky\n  vec3 direction = normalize( vWorldPosition - cameraPos );\n  float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]\n  float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]\n  vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );\n  vec3 L0 = vec3( 0.1 ) * Fex;\n\n  // composition + solar disc\n  float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );\n  L0 += ( vSunE * 19000.0 * Fex ) * sundisk;\n\n  vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );\n\n  vec3 curr = Uncharted2Tonemap( ( log2( 2.0 / pow( luminance, 4.0 ) ) ) * texColor );\n  vec3 color = curr * whiteScale;\n\n  vec3 retColor = pow( color, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );\n\n  gl_FragColor = vec4( retColor, 1.0 );\n}\n"

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OverlapApp = function (_App) {
	  _inherits(OverlapApp, _App);

	  function OverlapApp(params) {
	    _classCallCheck(this, OverlapApp);

	    var _this = _possibleConstructorReturn(this, (OverlapApp.__proto__ || Object.getPrototypeOf(OverlapApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(OverlapApp, [{
	    key: 'addOverlap',
	    value: function addOverlap() {
	      if (!this.overlaps) {
	        this.overlaps = [new Lap(150, 150, 30)];
	        return;
	      }

	      var newPos = this.overlaps.slice(-1)[0].randomEdge();
	      var rad = 10 + Math.random() * 10;

	      this.overlaps.push(new Lap(newPos[0], newPos[1], rad));
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');

	      for (var i = 0; i < 4000; i++) {
	        this.addOverlap();
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      this.overlaps.forEach(function (val) {
	        val.draw(ctx);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return OverlapApp;
	}(_App3.default);

	exports.default = OverlapApp;

	var Lap = function () {
	  function Lap(x, y, rad) {
	    _classCallCheck(this, Lap);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	  }

	  _createClass(Lap, [{
	    key: 'randomEdge',
	    value: function randomEdge() {
	      var randomAngle = Math.random() * 2 * Math.PI;
	      return [this.x + this.rad * Math.cos(randomAngle), this.y + this.rad * Math.sin(randomAngle)];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.strokeStyle = 'white';
	      ctx.lineWidth = "1";
	      ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
	      ctx.stroke();
	    }
	  }]);

	  return Lap;
	}();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuentinApp = function (_QuentinLike) {
	  _inherits(QuentinApp, _QuentinLike);

	  function QuentinApp(params) {
	    _classCallCheck(this, QuentinApp);

	    var _this = _possibleConstructorReturn(this, (QuentinApp.__proto__ || Object.getPrototypeOf(QuentinApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(QuentinApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 10000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.pointLight1 = new THREE.PointLight(0x446666);
	      this.pointLight2 = new THREE.PointLight(0x664444);
	      this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setClearColor(new THREE.Color(0xFFEEFF));

	      this.loadObj();
	      this.app.time = 0;

	      var mat = new THREE.MeshPhongMaterial({ color: 0xEEFFFF });

	      for (var i = 0; i < 5; i++) {
	        for (var j = 0; j < 10; j++) {
	          var x = 2 * (i - 2);
	          var y = 0;
	          var z = -3 * j - 1;

	          var box = new THREE.BoxGeometry(1.5, 2 + j, 2);
	          var mesh = new THREE.Mesh(box, mat);
	          mesh.position.set(x, y, z);
	          this.scene.add(mesh);
	        }
	      }

	      this.cameraTrack = this.quentin(this.camera.position, (0, _math.scale)(this.camera.position, 0.75));

	      this.camera.position.set(0, 0, 40);

	      var camera_pos = [this.camera.position.x, this.camera.position.y, this.camera.position.z];

	      var p = this.getPlane(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.backwall = this.getPlaneWidth(this.camera.fov, camera_pos, [0, 0, 0]);

	      this.view_angle = this.getFov(this.backwall, camera_pos, [0, 0, 0]);

	      this.scene.add(this.getDot(p[0]));
	      this.scene.add(this.getDot(p[1]));
	      this.scene.add(this.getDot(p[2]));
	      this.scene.add(this.getDot(p[3]));
	    }
	  }, {
	    key: 'loadObj',
	    value: function loadObj() {
	      this.obj_file = 'obj/trees/AS12_6.obj';
	      var manager = new THREE.LoadingManager();
	      manager.onProgress = function () {};
	      var loader = new THREE.OBJLoader(manager);

	      loader.load(this.obj_file, function (object) {
	        object.position.x = 0;
	        object.position.y = -1.5;
	        object.position.z = 0;
	        this.scene.add(object);
	        console.log("Added");
	      }.bind(this));
	    }
	  }, {
	    key: 'getDot',
	    value: function getDot(_ref, color) {
	      var _ref2 = _slicedToArray(_ref, 3),
	          x = _ref2[0],
	          y = _ref2[1],
	          z = _ref2[2];

	      color = color || 0x000000;
	      var dotGeometry = new THREE.Geometry();
	      dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
	      var dotMaterial = new THREE.PointsMaterial({ size: 3, sizeAttenuation: false, color: color });
	      return new THREE.Points(dotGeometry, dotMaterial);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.app.time += .01;
	      var t = this.app.time / 3.0 % 1.0;

	      var x = 0;
	      var y = 0;
	      var z = 40;

	      var p = [0, 0, 40];
	      var q = [0, 0, 1.5];

	      var a = 15;
	      var b = 15;

	      var _add = (0, _math.add)((0, _math.scale)(p, 1 - t), (0, _math.scale)(q, t));

	      var _add2 = _slicedToArray(_add, 3);

	      x = _add2[0];
	      y = _add2[1];
	      z = _add2[2];


	      this.camera.position.set(x, y, z);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	      this.camera.fov = this.getFov(this.backwall, [x, y, z], [0, 0, 0]);
	      this.camera.updateProjectionMatrix();

	      this.pointLight1.position.set(-20, 25, 0);
	      this.pointLight1.lookAt(new THREE.Vector2(0, 0, 0));

	      this.pointLight2.position.set(20, 25, 0);
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return QuentinApp;
	}(_Quentin2.default);

	exports.default = QuentinApp;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _math = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function toGeometry(vertices, faces) {
	  var geo = new THREE.Geometry();

	  vertices.forEach(function (v) {
	    geo.vertices.push(new THREE.Vector3(v[0], v[1], v[2]));
	  });

	  faces.forEach(function (f) {
	    geo.faces.push(new THREE.Face3(f[0], f[1], f[2]));
	  });

	  return geo;
	}

	var Ribbon = function () {
	  function Ribbon(center, direction) {
	    _classCallCheck(this, Ribbon);

	    this.center = [0, 0, 0];
	    this.direction = (0, _math.normalize)([1, 1, 0]);
	    this.position = [0, 0, 0];

	    this.width = 1;

	    this.vertices = [];
	    this.faces = [];

	    this.points = [];
	    this.slopes = [];
	    // this.disturbVertices();
	  }

	  _createClass(Ribbon, [{
	    key: 'computePoints',
	    value: function computePoints() {
	      var points = [];
	      var slopes = [];
	      var h = 0.003;

	      var theta = 0;
	      var delta = Math.PI / 90;

	      var distance = 1;

	      var _scale = (0, _math.scale)((0, _math.normalize)([4, 0, 0]), distance),
	          _scale2 = _slicedToArray(_scale, 3),
	          x = _scale2[0],
	          y = _scale2[1],
	          z = _scale2[2];

	      var x0 = 0,
	          y0 = 0,
	          z0 = 0;

	      var _direction$slice = this.direction.slice(),
	          _direction$slice2 = _slicedToArray(_direction$slice, 3),
	          dx = _direction$slice2[0],
	          dy = _direction$slice2[1],
	          dz = _direction$slice2[2];

	      var f = function f(t) {
	        return [distance * Math.cos(t), distance * Math.sin(t)];
	      };

	      // Push initial
	      points.push([x, y, z]);
	      slopes.push([dx, dy, dz]);

	      for (var i = 1; i < 230; i++) {

	        var p0 = f(theta);
	        var p1 = f(theta + delta);

	        // Update step
	        x0 = x;
	        y0 = y;
	        z0 = z;
	        x = x + dx;
	        y = y + dy;
	        z = z + dz;

	        var _scale3 = (0, _math.scale)((0, _math.normalize)([x, y, z]), distance);

	        var _scale4 = _slicedToArray(_scale3, 3);

	        x = _scale4[0];
	        y = _scale4[1];
	        z = _scale4[2];


	        var randomness = (0, _math.scale)((0, _math.normalize)([Math.random(), Math.random(), Math.random()]), 0.05);

	        var _sub = (0, _math.sub)([x, y, z], [x0, y0, z0]);

	        var _sub2 = _slicedToArray(_sub, 3);

	        dx = _sub2[0];
	        dy = _sub2[1];
	        dz = _sub2[2];

	        // Push
	        var _scale5 = (0, _math.scale)((0, _math.normalize)((0, _math.sub)([dx, dy, dz], randomness)), 0.3);

	        var _scale6 = _slicedToArray(_scale5, 3);

	        dx = _scale6[0];
	        dy = _scale6[1];
	        dz = _scale6[2];
	        points.push([x, y, z]);
	        slopes.push([dx, dy, dz]);

	        // Move
	        theta += delta;
	        // distance = 2 + Math.cos(0.5*theta);
	        distance += 0.015;
	      }

	      this.points = points;
	      this.slopes = slopes;
	    }
	  }, {
	    key: 'disturbVertices',
	    value: function disturbVertices() {
	      this.vertices.forEach(function (v) {
	        var s = 0.1;
	        v[0] += s * (Math.random() - 0.5);
	        v[1] += s * (Math.random() - 0.5);
	        v[2] += s * (Math.random() - 0.5);
	        v[3] += s * (Math.random() - 0.5);
	      });
	    }
	  }]);

	  return Ribbon;
	}();

	var RibbonApp = function (_App) {
	  _inherits(RibbonApp, _App);

	  function RibbonApp(params) {
	    _classCallCheck(this, RibbonApp);

	    var _this = _possibleConstructorReturn(this, (RibbonApp.__proto__ || Object.getPrototypeOf(RibbonApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};

	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(RibbonApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 10000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      this.camera.position.set(0, 0, 40);
	      this.camera.position.up = new THREE.Vector3(0, 1, 0);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	      // Create scene
	      this.scene = new THREE.Scene();

	      // Lights
	      this.pointLight1 = new THREE.PointLight(0x446666);
	      this.pointLight2 = new THREE.PointLight(0x664444);
	      this.ambientLight = new THREE.AmbientLight(0x999999);

	      this.scene = new THREE.Scene();
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
	      var wireframe = new THREE.WireframeGeometry(geometry);
	      var material = new THREE.LineBasicMaterial({
	        color: 0xffffff, opacity: 1, linewidth: 3, vertexColors: THREE.VertexColors
	      });
	      this.lines = new THREE.LineSegments(wireframe);
	      this.lines.position.x = 0;
	      this.lines.position.y = 0;
	      this.lines.position.z = 0;
	      this.scene.add(this.lines);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setClearColor(new THREE.Color(0xEEFFFF));

	      var ribbon = new Ribbon(0, 0, 0);

	      ribbon.computePoints();

	      if (ribbon.points.length != ribbon.slopes.length) {
	        throw "Fuck this";
	      }

	      var points = 120;
	      var delta = 2 * Math.PI / points;

	      var r = new _Ribbon2.default();

	      var ribbonLength = ribbon.points.length;

	      for (var i = 0; i < ribbonLength; i++) {
	        var _ribbon$points$i = _slicedToArray(ribbon.points[i], 3),
	            x = _ribbon$points$i[0],
	            y = _ribbon$points$i[1],
	            z = _ribbon$points$i[2];

	        var _ribbon$slopes$i = _slicedToArray(ribbon.slopes[i], 3),
	            dx = _ribbon$slopes$i[0],
	            dy = _ribbon$slopes$i[1],
	            dz = _ribbon$slopes$i[2];

	        var v = (0, _math.sub)((0, _math.normalize)([x, y, z]), (0, _math.normalize)(ribbon.center));

	        var u = (0, _math.normalize)(ribbon.slopes[i]);
	        var w = (0, _math.cross)(u, v);

	        var _add = (0, _math.add)([x, y, z], (0, _math.scale)(w, +0.1)),
	            _add2 = _slicedToArray(_add, 3),
	            a = _add2[0],
	            b = _add2[1],
	            c = _add2[2];

	        var _add3 = (0, _math.add)([x, y, z], (0, _math.scale)(w, -0.1)),
	            _add4 = _slicedToArray(_add3, 3),
	            d = _add4[0],
	            e = _add4[1],
	            f = _add4[2];

	        r.addPoint([x, y, z], w);
	      }

	      this.scene.add(this.toLineSegments(r.build()));

	      this.t = 0;
	    }
	  }, {
	    key: 'toLineSegments',
	    value: function toLineSegments(g) {
	      return new THREE.LineSegments(new THREE.WireframeGeometry(g));
	    }
	  }, {
	    key: 'getDot',
	    value: function getDot(x, y, z, color) {
	      color = color || 0x000000;
	      var dotGeometry = new THREE.Geometry();
	      dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
	      var dotMaterial = new THREE.PointsMaterial({ size: 2, sizeAttenuation: false, color: color });
	      return new THREE.Points(dotGeometry, dotMaterial);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      // Rotate
	      this.lines.rotation.x += 0.01;
	      this.lines.rotation.y -= 0.05;
	      this.lines.rotation.z += 0.02;

	      this.t += 0.01;

	      this.camera.x = Math.cos;
	      this.camera.position.set(30 * Math.sin(-0.7 * this.t), 0, 30 * Math.cos(+0.7 * this.t));

	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	      /*
	      this.ribbon.rotation.x -= 0.05;
	      this.ribbon.rotation.y -= 0.01;
	      this.ribbon.rotation.z += 0.02;
	      */
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return RibbonApp;
	}(_App3.default);

	exports.default = RibbonApp;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _simplexNoise = __webpack_require__(34);

	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

	var _Grass = __webpack_require__(28);

	var _Grass2 = _interopRequireDefault(_Grass);

	var _GrassyField = __webpack_require__(30);

	var _Land = __webpack_require__(33);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Generative objects


	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	function stringToHex(str) {
	  return parseInt(str.substring(1), 16);
	}

	var ShadyHillApp = function (_QuentinLike) {
	  _inherits(ShadyHillApp, _QuentinLike);

	  function ShadyHillApp(params) {
	    _classCallCheck(this, ShadyHillApp);

	    var _this = _possibleConstructorReturn(this, (ShadyHillApp.__proto__ || Object.getPrototypeOf(ShadyHillApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(ShadyHillApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 1000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.ambientLight = new THREE.AmbientLight(0xCCCCCC);
	      this.directionalLight = new THREE.DirectionalLight(0x333333, 0.5);
	      this.pointLight1 = new THREE.PointLight(0x333333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x333333, 2, 800);

	      this.directionalLight.position.set(0, 0, -1);
	      this.pointLight1.position.set(0, 10, -10);
	      this.pointLight2.position.set(0, 10, -10);

	      this.directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      this.scene.add(this.directionalLight);
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setPixelRatio(1.2);
	      this.renderer.setClearColor(0xFFFFFF);

	      // Helper setup functions
	      this.setupTrack();

	      // Add visible components
	      this.addFloor();

	      /*
	      for (let i=-8; i <= 8; i++) {
	        let x = 8*i;
	        this.addTombstone(x, 0);
	      }
	      //*/

	      var start = (0, _utils.getElapsedTime)();
	      this.addGrassyField();
	      console.log("Create grassy field time:", (0, _utils.getElapsedTime)() - start);

	      this.force = new THREE.Vector3(0, 0, 1);
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);

	      this.loadObjs();
	    }

	    // Setup a camera track... but in this case actually do nothing

	  }, {
	    key: 'setupTrack',
	    value: function setupTrack() {
	      this.camera.position.set(0, 30, 80);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }

	    /**
	     * Create the Force ArrowHelper and Update
	     */

	  }, {
	    key: 'addForceArrow',
	    value: function addForceArrow() {
	      this.forceArrow = new THREE.ArrowHelper(this.force, this.dest, norm(this.force), 0x000000);
	      this.scene.add(this.forceArrow);
	      // this.updateForceArrow();
	    }

	    /**
	     * Update Force ArrowHelper
	     */

	  }, {
	    key: 'updateForceArrow',
	    value: function updateForceArrow() {
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	      this.forceArrow.setLength(norm(this.force));
	      this.forceArrow.position.x = this.force.x;
	      this.forceArrow.position.y = this.force.y;
	      this.forceArrow.position.z = this.force.z;
	      this.forceArrow.position.multiplyScalar(-1);
	    }

	    /**
	     * ...
	     */

	  }, {
	    key: 'addGrassyField',
	    value: function addGrassyField() {
	      this.field = new _GrassyField.GrassyField(90, 90, 5.0, 30, this.floor.f);
	      this.fieldMesh = new THREE.Mesh(this.field.geometry(), this.grassMaterial);
	      this.scene.add(this.fieldMesh);
	    }
	  }, {
	    key: 'setPhong',
	    value: function setPhong(_ref) {
	      var color = _ref.color,
	          emissive = _ref.emissive,
	          specular = _ref.specular,
	          shininess = _ref.shininess,
	          reflectivity = _ref.reflectivity;

	      this.grassMaterial = new THREE.MeshPhongMaterial({
	        color: stringToHex(color),
	        emissive: stringToHex(emissive),
	        specular: stringToHex(specular),
	        shininess: shininess,
	        reflectivity: reflectivity,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });
	      this.fieldMesh.material = this.grassMaterial;
	      // this.fieldMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
	    }
	  }, {
	    key: 'addTombstone',
	    value: function addTombstone(x, z) {
	      var geometry = new THREE.BoxGeometry(4, 8, 1);
	      var material = new THREE.MeshPhongMaterial({
	        color: 0x333333,
	        emissive: 0x777777,
	        specular: 0x000000,
	        reflectivity: 0,
	        shininess: 0,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });
	      var cube = new THREE.Mesh(geometry, material);
	      cube.position.x = x;
	      cube.position.y = 4;;
	      cube.position.z = z;
	      // cube.rotation.y = Math.PI/4;
	      this.scene.add(cube);
	    }
	  }, {
	    key: 'loadObjs',
	    value: function loadObjs() {
	      var loader = new THREE.OBJLoader();
	      var scene = this.scene;
	      loader.load('obj/Tombstone.obj', function (obj) {
	        scene.add(obj);
	      }, function (xhr) {}, function (err) {
	        console.error(err);
	      });
	    }
	  }, {
	    key: 'addTombstones',
	    value: function addTombstones() {}

	    // Just draw a simple floor

	  }, {
	    key: 'addFloor',
	    value: function addFloor() {
	      var mat = new THREE.MeshPhongMaterial({
	        color: 0x33333,
	        emissive: 0x000000,
	        specular: 0x000000,
	        shininess: 0.0,
	        shading: THREE.SmoothShading,
	        side: THREE.DoubleSide
	      });

	      var _abc = function () {
	        var s = 80.0;
	        var simplex = new _simplexNoise2.default("whatever");
	        return function (x, y) {
	          return 4.0 * simplex.noise2D(x / s, y / s);
	        };
	      }();

	      this.floor = new _Land.Land({
	        height: 50,
	        width: 50,
	        floor: _abc
	      });

	      // this.addGrid();
	      // let geo = this.floor.getMesh();

	      // this.scene.add(new THREE.Mesh(geo, mat));
	    }
	  }, {
	    key: 'addGrid',
	    value: function addGrid() {
	      var mat = new THREE.LineBasicMaterial({ color: 0xB7B7BA });
	      var VALS = 100;
	      for (var i = -VALS; i <= VALS; i++) {
	        var geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(i, 0, -80));
	        geo.vertices.push(new THREE.Vector3(i, 0, 80));
	        this.scene.add(new THREE.Line(geo, mat));
	        geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(-80, 0, i));
	        geo.vertices.push(new THREE.Vector3(80, 0, i));
	        this.scene.add(new THREE.Line(geo, mat));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      var t = +new Date() / 100000.0;
	      var r = 90;
	      var x = r * Math.cos(t);
	      var z = r * Math.sin(t);
	      var y = params.y;

	      var a = r * Math.cos(t),
	          b = y,
	          c = r * Math.sin(t);

	      // ...

	      this.camera.position.set(a, b, c);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	  }, {
	    key: 'setupCamera',
	    value: function setupCamera() {
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);
	    }
	  }, {
	    key: 'setSize',
	    value: function setSize(width, height) {
	      this.app.width = width;
	      this.app.height = height;
	      this.app.aspect = width / height;
	      this.setupCamera();
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(this.app.width, this.app.height);
	    }
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this.setSize(width, height);
	    }
	  }, {
	    key: 'updateForce',
	    value: function updateForce(n) {
	      this.force.normalize();
	      this.force.multiplyScalar(n);
	      this.updateForceArrow();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return ShadyHillApp;
	}(_Quentin2.default);

	exports.default = ShadyHillApp;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Smile = __webpack_require__(51);

	var _Smile2 = _interopRequireDefault(_Smile);

	var _utils = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SmileApp = function (_App) {
	  _inherits(SmileApp, _App);

	  function SmileApp(params) {
	    _classCallCheck(this, SmileApp);

	    var _this = _possibleConstructorReturn(this, (SmileApp.__proto__ || Object.getPrototypeOf(SmileApp)).call(this, params));

	    _this.el = params.el;
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;
	    _this.ctx = _this.el.getContext('2d');
	    _this.color = "rgb(0, 200, 100)";

	    _this.smile = new _Smile2.default({
	      position: [_this.width / 2., _this.height / 2.],
	      size: 30
	    });
	    return _this;
	  }

	  _createClass(SmileApp, [{
	    key: 'update',
	    value: function update(params) {
	      this.color = params.color || "#000000";
	      this.smile.update(params);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.ctx.save();
	      this.ctx.clearRect(0, 0, this.width, this.height);
	      this.ctx.restore();

	      this.ctx.save();
	      this.ctx.lineWidth = 3;
	      this.ctx.fillStyle = this.ctx.strokeStyle = this.color;
	      this.smile.draw(this.ctx);
	      this.ctx.restore();
	    }
	  }]);

	  return SmileApp;
	}(_App3.default);

	exports.default = SmileApp;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Smile = function () {
	  function Smile(params) {
	    _classCallCheck(this, Smile);

	    this.position = params.position;
	    this.faceSize = params.faceSize;
	    this.eyeSize = this.faceSize / 9.;
	    this.eyeDistance = this.faceSize / 3.;
	    this.eyeSpacing = this.faceSize / 1.3;
	  }

	  _createClass(Smile, [{
	    key: "update",
	    value: function update(params) {
	      this.faceSize = params.faceSize;
	      this.eyeSize = params.eyeSize || this.faceSize / 9.;
	      this.eyeSpacing = params.eyeSpacing || this.faceSize / 1.3;
	      this.eyeDistance = params.eyeDistance || this.faceSize / 3.;
	      this.mouthDistance = params.mouthDistance;
	      this.mouthWidth = params.mouthWidth;
	      this.mouthCrookedFactor = params.mouthCrookedFactor || 0.;
	    }
	  }, {
	    key: "drawFace",
	    value: function drawFace(ctx) {
	      ctx.save();
	      ctx.beginPath();
	      ctx.arc(this.position[0], this.position[1], this.faceSize, 0, 2 * Math.PI);
	      ctx.stroke();
	      ctx.restore();
	    }
	  }, {
	    key: "drawEyes",
	    value: function drawEyes(ctx) {
	      ctx.save();
	      var x = this.position[0];
	      var y = this.position[1] - this.eyeDistance;
	      ctx.beginPath();
	      ctx.arc(x - this.eyeSpacing / 2., y, this.eyeSize, 0, 2 * Math.PI);
	      ctx.fill();
	      ctx.closePath();

	      ctx.beginPath();
	      ctx.arc(x + this.eyeSpacing / 2., y, this.eyeSize, 0, 2 * Math.PI);
	      ctx.fill();
	      ctx.closePath();
	      ctx.restore();
	    }
	  }, {
	    key: "drawMouth",
	    value: function drawMouth(ctx) {
	      ctx.save();
	      var x = this.position[0] - this.mouthWidth / 2.;
	      var y = this.position[1] + this.mouthDistance;
	      var kink = this.mouthCrookedFactor;
	      ctx.beginPath();
	      ctx.moveTo(x, y);
	      ctx.quadraticCurveTo(x + this.mouthWidth / 2. + kink, y + 10, x + this.mouthWidth, y + kink);
	      ctx.stroke();
	      ctx.restore();
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      this.drawFace(ctx);
	      this.drawEyes(ctx);
	      this.drawMouth(ctx);
	    }
	  }]);

	  return Smile;
	}();

	exports.default = Smile;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Splotch = function () {
	  function Splotch(x, y, size) {
	    _classCallCheck(this, Splotch);

	    this.x = x;
	    this.y = y;
	    this.r = size;
	    this.dots = [];
	    this.addEdge();
	    this.addEdge();
	    this.addEdge();
	    this.addEdge();
	  }

	  _createClass(Splotch, [{
	    key: 'addEdge',
	    value: function addEdge() {
	      var lastDot = this.dots.slice(-1);
	      lastDot = lastDot.length ? lastDot[0] : false;

	      if (!lastDot) {
	        this.dots = [{ x: this.x, y: this.y, r: this.r / 3 }];
	      } else {
	        var randomAngle = Math.random() * 2 * Math.PI;
	        this.dots.push({
	          x: lastDot.x + lastDot.r * Math.cos(randomAngle),
	          y: lastDot.y + lastDot.r * Math.sin(randomAngle),
	          r: this.r / 3.
	        });
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw(ctx, callback) {
	      var self = this;
	      var colors = ['cyan', 'yellow', 'magenta'];
	      var i = 0;
	      this.dots.forEach(function (dot) {
	        ctx.save();

	        ctx.globalCompositeOperation = 'lighter';
	        i++;
	        ctx.fillStyle = colors[i % colors.length];
	        ctx.beginPath();
	        ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
	        ctx.fill();
	        ctx.restore();

	        if (callback) {
	          callback.call(self, ctx);
	        }
	      });
	    }
	  }, {
	    key: 'nudged',
	    value: function nudged(dx, dy, dr) {
	      return new Splotch(this.x + dx, this.y + dy, this.r + dr);
	    }
	  }]);

	  return Splotch;
	}();

	var SplotchApp = function (_App) {
	  _inherits(SplotchApp, _App);

	  function SplotchApp(params) {
	    _classCallCheck(this, SplotchApp);

	    var _this = _possibleConstructorReturn(this, (SplotchApp.__proto__ || Object.getPrototypeOf(SplotchApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(SplotchApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.splotches = [];

	      for (var i = 0; i < 100; i++) {
	        var x = Math.random() * this.width;
	        var y = Math.random() * this.height;
	        var r = 10 + Math.random() * 20;
	        this.splotches.push(new Splotch(x, y, r));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      this.splotches.forEach(function (s) {
	        s.draw(ctx);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return SplotchApp;
	}(_App3.default);

	exports.default = SplotchApp;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	var _Quentin = __webpack_require__(11);

	var _Quentin2 = _interopRequireDefault(_Quentin);

	var _math = __webpack_require__(13);

	var _utils = __webpack_require__(24);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	var _StarrySky = __webpack_require__(40);

	var _RibbonPath = __webpack_require__(16);

	var _RibbonPath2 = _interopRequireDefault(_RibbonPath);

	var _Ribbon = __webpack_require__(17);

	var _Ribbon2 = _interopRequireDefault(_Ribbon);

	var _simplexNoise = __webpack_require__(34);

	var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

	var _GrassyField = __webpack_require__(30);

	var _Land = __webpack_require__(33);

	var _TriangleSurface = __webpack_require__(26);

	var _TriangleSurface2 = _interopRequireDefault(_TriangleSurface);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Generative objects


	function norm(v) {
	  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
	}

	function stringToHex(str) {
	  return parseInt(str.substring(1), 16);
	}

	var NORTH = new THREE.Vector3(-1, 0, 0);
	var EAST = new THREE.Vector3(0, 0, -1);
	var SOUTH = new THREE.Vector3(+1, 0, 0);
	var WEST = new THREE.Vector3(0, 0, +1);

	var StarfieldApp = function (_QuentinLike) {
	  _inherits(StarfieldApp, _QuentinLike);

	  function StarfieldApp(params) {
	    _classCallCheck(this, StarfieldApp);

	    var _this = _possibleConstructorReturn(this, (StarfieldApp.__proto__ || Object.getPrototypeOf(StarfieldApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.app = {};
	    _this.width = _this.el.offsetWidth;
	    _this.height = _this.el.offsetHeight;
	    return _this;
	  }

	  _createClass(StarfieldApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.app.width = this.width;
	      this.app.height = this.height;
	      this.app.view_angle = 15;
	      this.app.aspect = this.width / this.height;
	      this.app.near = 0.1;
	      this.app.far = 2000;
	      this.app.iterations = 0;
	      this.app.time = 0;

	      // Renderer
	      this.renderer = new THREE.WebGLRenderer({
	        antialias: true,
	        canvas: this.el
	      });

	      // Scene
	      this.scene = new THREE.Scene();

	      // Camera
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);

	      // Lights
	      this.ambientLight = new THREE.AmbientLight(0xCCCCCC);
	      this.directionalLight = new THREE.DirectionalLight(0x333333, 0.5);
	      this.pointLight1 = new THREE.PointLight(0x333333, 2, 800);
	      this.pointLight2 = new THREE.PointLight(0x333333, 2, 800);

	      this.directionalLight.position.set(0, 0, -1);
	      this.pointLight1.position.set(0, 10, -10);
	      this.pointLight2.position.set(0, 10, -10);

	      this.directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
	      this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

	      this.scene.add(this.directionalLight);
	      this.scene.add(this.pointLight1);
	      this.scene.add(this.pointLight2);
	      this.scene.add(this.ambientLight);

	      this.renderer.setSize(this.width, this.height);
	      this.renderer.setPixelRatio(1.2);
	      this.renderer.setClearColor(0xFFFFFF);

	      // Sky
	      this.sky = this.getSky();
	      this.scene.add(this.sky.sky);
	      this.setTheta(0.0);

	      // Helper setup functions
	      this.setupTrack();

	      // Add visible components

	      var start = (0, _utils.getElapsedTime)();
	      this.fieldMesh = {};

	      this.addFloor();

	      // Add obelisks
	      // console.log("Adding obelisks");
	      this.addObelisk([-20, 0], 0xFF0000); // N
	      this.addObelisk([0, -20], 0x00FFFF);
	      this.addObelisk([+20, 0], 0xFF00FF);
	      this.addObelisk([0, +20], 0x00FF00);
	      // this.addObelisk(EAST, 0xFF00FF);
	      // this.addObelisk(WEST, 0x00FF00);

	      // console.log("Create grassy field time:", getElapsedTime()-start);

	      this.force = new THREE.Vector3(0, 0, 1);
	      this.dest = this.force.clone();
	      this.dest.multiplyScalar(-1);
	    }

	    // Setup a camera track... but in this case actually do nothing

	  }, {
	    key: 'setupTrack',
	    value: function setupTrack() {
	      this.camera.position.set(0, 30, 80);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }

	    /**
	     * Return a sky [and helper objects]
	     */

	  }, {
	    key: 'getSky',
	    value: function getSky() {
	      var g = new THREE.Group();

	      var stars = [];
	      var starSize = 700;
	      var STAR_COUNT = 90000;

	      for (var i = 0; i < STAR_COUNT; i++) {
	        var r = starSize;

	        var t = 2 * Math.random() - 1;
	        var u = 2 * Math.random() - 1;

	        var x = t;
	        var y = u;
	        var z = 2 * Math.random() - 1.0;
	        stars.push([x, y, z]);
	      }

	      return new _StarrySky.StarrySky(stars, starSize);
	    }

	    /**
	     * Create the Force ArrowHelper and Update
	     */

	  }, {
	    key: 'addForceArrow',
	    value: function addForceArrow() {
	      this.forceArrow = new THREE.ArrowHelper(this.force, this.dest, norm(this.force), 0x000000);
	      this.scene.add(this.forceArrow);
	      // this.updateForceArrow();
	    }

	    /**
	     * ...
	     */

	  }, {
	    key: 'addGrassyField',
	    value: function addGrassyField() {
	      this.field = new _GrassyField.GrassyField(20, 20, 9.0, 30, this.floor.f);
	      this.fieldMesh = new THREE.Mesh(this.field.geometry(), this.grassMaterial);
	      this.scene.add(this.fieldMesh);
	    }
	  }, {
	    key: 'setPhong',
	    value: function setPhong(_ref) {
	      var color = _ref.color,
	          emissive = _ref.emissive,
	          specular = _ref.specular,
	          shininess = _ref.shininess,
	          reflectivity = _ref.reflectivity;

	      this.grassMaterial = new THREE.MeshPhongMaterial({
	        color: stringToHex(color),
	        emissive: stringToHex(emissive),
	        specular: stringToHex(specular),
	        shininess: shininess,
	        reflectivity: reflectivity,
	        // shading: THREE.SmoothShading,
	        flatShading: true,
	        side: THREE.BackSide
	      });
	      this.fieldMesh.material = this.grassMaterial;
	      // this.fieldMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
	    }

	    // Set the theta of the sky

	  }, {
	    key: 'setTheta',
	    value: function setTheta(theta) {
	      this.skyTheta = theta;
	      this.skyAxis = new THREE.Vector3(Math.cos(-theta), Math.sin(-theta), 0.0);
	    }

	    // Add a tombstone

	  }, {
	    key: 'addTombstone',
	    value: function addTombstone(x, z) {
	      var geometry = new THREE.BoxGeometry(4, 8, 1);
	      var material = new THREE.MeshPhongMaterial({
	        color: 0x333333,
	        emissive: 0x777777,
	        specular: 0x000000,
	        reflectivity: 0,
	        shininess: 0,
	        // shading: THREE.SmoothShading,
	        flatShading: true,
	        side: THREE.DoubleSide
	      });
	      var cube = new THREE.Mesh(geometry, material);
	      cube.position.x = x;
	      cube.position.y = 0;
	      cube.position.z = z;
	    }

	    // Just draw a simple floor

	  }, {
	    key: 'addFloor',
	    value: function addFloor() {
	      var mat = new THREE.MeshPhongMaterial({
	        color: 0x33333,
	        emissive: 0x000000,
	        specular: 0x000000,
	        shininess: 0.0,
	        // shading: THREE.SmoothShading,
	        flatShading: true,
	        side: THREE.DoubleSide
	      });

	      var _abc = function () {
	        var s = 80.0;
	        var simplex = new _simplexNoise2.default("whatever");
	        return function (x, y) {
	          return 4.0 * simplex.noise2D(x / s, y / s);
	        };
	      }();

	      this.floor = new _Land.Land({
	        height: 900,
	        width: 900,
	        floor: _abc
	      });

	      console.log(this.sky.textures);

	      var images = [];

	      this.sky.textures.forEach(function (v, i) {
	        images.push(v.image);
	      });

	      var cubeTex = new THREE.CubeTexture(images, THREE.CubeReflectionMapping);
	      cubeTex.wrapS = THREE.RepeatWrapping;
	      cubeTex.wrapT = THREE.RepeatWrapping;
	      cubeTex.repeat.set(4, 4);

	      this.cubeCamera = new THREE.CubeCamera(100, 1000, Math.pow(2, 11));
	      this.scene.add(this.cubeCamera);

	      var floorMat = new THREE.MeshPhongMaterial({
	        color: 0xCCCCCC,
	        envMap: this.cubeCamera.renderTarget,
	        reflectivity: 0.95,
	        side: THREE.BackSide
	      });

	      // let geo = this.floor.getMesh();

	      var surface = new _TriangleSurface2.default(this.floor.f, 1, 900, 900);

	      this.scene.add(new THREE.Mesh(surface.build(), floorMat));
	      var geo = new THREE.BoxGeometry(1, 5, 1);

	      this.mirrorBox = new THREE.Mesh(geo, floorMat);
	      this.scene.add(this.mirrorBox);

	      // 
	      this.addGrassyField();
	    }
	  }, {
	    key: 'addObelisk',
	    value: function addObelisk(_ref2, c) {
	      var _ref3 = _slicedToArray(_ref2, 2),
	          x = _ref3[0],
	          z = _ref3[1];

	      var geo = new THREE.BoxGeometry(1, 5, 1);
	      var mat = new THREE.MeshBasicMaterial({ color: c });
	      var mesh = new THREE.Mesh(geo, mat);
	      var y = this.floor.f(x, z);
	      var pos = new THREE.Vector3(x, y, z);
	      mesh.position.set(pos.x, pos.y + 2.5, pos.z);
	      mesh.rotation.y = Math.PI / 4.0;
	      this.scene.add(mesh);
	    }

	    /**
	     * What is this?
	     */

	  }, {
	    key: 'addGrid',
	    value: function addGrid() {
	      var mat = new THREE.LineBasicMaterial({ color: 0x999999 });
	      var VALS = 100;
	      for (var i = -VALS; i <= VALS; i++) {
	        var geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(i, 0, -80));
	        geo.vertices.push(new THREE.Vector3(i, 0, 80));
	        this.scene.add(new THREE.Line(geo, mat));
	        geo = new THREE.Geometry();
	        geo.vertices.push(new THREE.Vector3(-80, 0, i));
	        geo.vertices.push(new THREE.Vector3(80, 0, i));
	        this.scene.add(new THREE.Line(geo, mat));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      var t = +new Date() / 200.0 / 1.0;
	      var f = Math.PI / 4.0;
	      var r = 90;
	      f = t / 10000.0;
	      var x = r * Math.cos(f);
	      var z = r * Math.sin(f);
	      var y = params.y;

	      // ...
	      var a = 100,
	          b = y,
	          c = 100;

	      // ...

	      var TWOPI = 2 * Math.PI;
	      var theta = f % 2 * Math.PI;
	      this.sky.sky.setRotationFromAxisAngle(this.skyAxis, theta);

	      // ...
	      this.camera.position.set(a, b, c);
	      this.camera.lookAt(0, 0, 0);

	      var pos = SOUTH.clone();
	      pos.multiplyScalar(20.0);
	      pos.y = y;
	      // this.camera.lookAt(pos);

	      // Move skybox around camera position
	      this.sky.sky.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);

	      this.cubeCamera.position.copy(this.mirrorBox.position);
	      this.cubeCamera.update(this.renderer, this.scene);
	    }
	  }, {
	    key: 'setupCamera',
	    value: function setupCamera() {
	      this.camera = new THREE.PerspectiveCamera(this.app.view_angle, this.app.aspect, this.app.near, this.app.far);
	    }
	  }, {
	    key: 'setSize',
	    value: function setSize(width, height) {
	      this.app.width = width;
	      this.app.height = height;
	      this.app.aspect = width / height;
	      this.setupCamera();
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(this.app.width, this.app.height);
	    }
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this.setSize(width, height);
	    }
	  }, {
	    key: 'updateForce',
	    value: function updateForce(n) {
	      this.force.normalize();
	      this.force.multiplyScalar(n);
	      this.updateForceArrow();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return StarfieldApp;
	}(_Quentin2.default);

	exports.default = StarfieldApp;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Line = __webpack_require__(19);

	var _Line2 = _interopRequireDefault(_Line);

	var _TriGrid = __webpack_require__(3);

	var _TriGrid2 = _interopRequireDefault(_TriGrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TriGridApp = function (_App) {
	  _inherits(TriGridApp, _App);

	  function TriGridApp(params) {
	    _classCallCheck(this, TriGridApp);

	    return _possibleConstructorReturn(this, (TriGridApp.__proto__ || Object.getPrototypeOf(TriGridApp)).call(this, params));
	  }

	  _createClass(TriGridApp, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'clear',
	    value: function clear() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }]);

	  return TriGridApp;
	}(_App3.default);

	exports.default = TriGridApp;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tri = function () {
	  function Tri(x, y, rad) {
	    _classCallCheck(this, Tri);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	  }

	  _createClass(Tri, [{
	    key: 'randomEdge',
	    value: function randomEdge() {
	      var randomAngle = Math.random() * 2 * Math.PI;
	      return [this.x + this.rad * Math.cos(randomAngle), this.y + this.rad * Math.sin(randomAngle)];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.strokeStyle = 'cyan';
	      ctx.lineWidth = "1";

	      ctx.moveTo(this.x + this.rad, this.y);

	      for (var i = 1; i < 3; i++) {
	        var theta = i * 2 * Math.PI / 3;
	        var u = this.x + this.rad * Math.cos(theta);
	        var v = this.y + this.rad * Math.sin(theta);
	        ctx.lineTo(u, v);
	      }

	      ctx.closePath();
	      ctx.stroke();
	    }
	  }]);

	  return Tri;
	}();

	var TriangleOverlapApp = function (_App) {
	  _inherits(TriangleOverlapApp, _App);

	  function TriangleOverlapApp(params) {
	    _classCallCheck(this, TriangleOverlapApp);

	    var _this = _possibleConstructorReturn(this, (TriangleOverlapApp.__proto__ || Object.getPrototypeOf(TriangleOverlapApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(TriangleOverlapApp, [{
	    key: 'addOverlap',
	    value: function addOverlap() {
	      if (!this.overlaps) {
	        this.overlaps = [new Tri(150, 150, 30)];
	        return;
	      }

	      var newPos = this.overlaps.slice(-1)[0].randomEdge();
	      var rad = 10 + Math.random() * 10;

	      this.overlaps.push(new Tri(newPos[0], newPos[1], rad));
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');

	      for (var i = 0; i < 4000; i++) {
	        this.addOverlap();
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      this.overlaps.forEach(function (val) {
	        val.draw(ctx);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return TriangleOverlapApp;
	}(_App3.default);

	exports.default = TriangleOverlapApp;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _utils = __webpack_require__(24);

	var _TriangleMesh = __webpack_require__(22);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function drawTransfer(ctx, image, destTri, _ref) {
	  var _ref2 = _slicedToArray(_ref, 4),
	      sx = _ref2[0],
	      sy = _ref2[1],
	      sw = _ref2[2],
	      sh = _ref2[3];

	  var points = destTri.getPointList();
	  var box = destTri.getBoundingBox();

	  ctx.save();
	  ctx.beginPath();
	  ctx.fillStyle = 'black';
	  ctx.strokeStyle = 'black';
	  ctx.imageSmoothingEnabled = true;

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  ctx.lineTo(points[1].x, points[1].y);
	  ctx.lineTo(points[2].x, points[2].y);

	  ctx.clip();

	  for (var i = 0; i < 3; i++) {
	    ctx.drawImage(image, sx, sy, sw, sh, box.x, box.y, box.w, box.h);
	  }

	  ctx.restore();
	}

	/**
	 *
	 */
	function drawTriangle(ctx, tri, style) {
	  var points = tri.getPointList();
	  ctx.save();
	  ctx.beginPath();
	  ctx.fillStyle = style || 'black';
	  ctx.strokeStyle = style || 'white';
	  ctx.lineWidth = 1;
	  ctx.moveTo(points[0].x, points[0].y);
	  ctx.lineTo(points[1].x, points[1].y);
	  ctx.lineTo(points[2].x, points[2].y);
	  ctx.fill();
	  ctx.fill();
	  ctx.fill();
	  ctx.fill();
	  ctx.stroke();
	  ctx.restore();
	}

	var TriangleClipGridApp = function (_App) {
	  _inherits(TriangleClipGridApp, _App);

	  function TriangleClipGridApp(params) {
	    _classCallCheck(this, TriangleClipGridApp);

	    var _this = _possibleConstructorReturn(this, (TriangleClipGridApp.__proto__ || Object.getPrototypeOf(TriangleClipGridApp)).call(this, params));

	    _this.el = params.el;
	    _this.ctx = _this.el.getContext('2d');
	    _this.size = params.size || 30;
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;
	    _this.mesh = new _TriangleMesh2.default(_this.size, { x: 0, y: 0 });
	    _this.colors = params.colors;
	    _this.image = params.image;
	    return _this;
	  }

	  _createClass(TriangleClipGridApp, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      for (var i = 0; i < 11; i++) {
	        for (var j = 0; j < 21; j++) {
	          var tri = this.mesh.get(i, j);
	          var style = (0, _utils.select)(this.colors);

	          var coinFlip = Math.floor(3 * Math.random()) == 0;

	          var bounds = tri.getBoundingBox();
	          if (!coinFlip) {
	            drawTriangle(this.ctx, tri, style);
	          } else {
	            drawTransfer(this.ctx, this.image, tri, [bounds.x, bounds.y, bounds.w, bounds.h]);
	          }
	        }
	      }
	    }
	  }]);

	  return TriangleClipGridApp;
	}(_App3.default);

	exports.default = TriangleClipGridApp;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Grid = __webpack_require__(58);

	var _Grid2 = _interopRequireDefault(_Grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WaveApp = function (_App) {
	  _inherits(WaveApp, _App);

	  function WaveApp(params) {
	    _classCallCheck(this, WaveApp);

	    var _this = _possibleConstructorReturn(this, (WaveApp.__proto__ || Object.getPrototypeOf(WaveApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(WaveApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.grid3 = new _Grid2.default(this.el, 6, 6, 'red');
	      this.grid4 = new _Grid2.default(this.el, 6, 6, 'blue');
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      ctx.save();
	      ctx.globalCompositeOperation = 'darken';
	      this.grid3.draw(ctx);
	      this.grid4.draw(ctx);
	      ctx.restore();
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "white";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return WaveApp;
	}(_App3.default);

	exports.default = WaveApp;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Piece = __webpack_require__(59);

	var _Piece2 = _interopRequireDefault(_Piece);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Grid = function () {
	  function Grid(el, x, y, col) {
	    _classCallCheck(this, Grid);

	    this.width = el.width;
	    this.height = el.height;
	    this.x = x;
	    this.y = y;
	    this.grid = null;
	    this.col = col;
	    this.setupGrid();
	  }

	  _createClass(Grid, [{
	    key: 'setupGrid',
	    value: function setupGrid() {
	      var self = this;
	      this.grid = new Array(this.x);
	      for (var j = 0; j < this.x; j++) {
	        this.grid[j] = new Array(this.y);
	      }

	      var w = this.width / this.x;
	      var h = this.height / this.y;

	      for (var x = 0; x < this.x; x++) {
	        for (var y = 0; y < this.y; y++) {
	          self.grid[x][y] = new _Piece2.default(x * w, y * h, w, h, self.col);
	        }
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      this.grid.forEach(function (row, x) {
	        row.forEach(function (val, y) {
	          val.draw(ctx);
	        });
	      });
	    }
	  }]);

	  return Grid;
	}();

	exports.default = Grid;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function random(x, y) {
	  return Math.random() * (y - x) + x;
	}

	var Piece = function () {
	  function Piece(x, y, w, h, color) {
	    _classCallCheck(this, Piece);

	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.col = color;
	    this.image = new Image();
	    this.image.src = 'img/wave-3.jpg';
	    this.box = this.randomSlice(100, 100);
	  }

	  _createClass(Piece, [{
	    key: 'randomSlice',
	    value: function randomSlice(w, h) {
	      var sx = Math.floor(random(0, this.image.width - w));
	      var sy = Math.floor(random(0, this.image.height - h));
	      return {
	        'sx': sx,
	        'sy': sy,
	        'sw': w,
	        'sh': h
	      };
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var box = this.box;

	      ctx.save();
	      ctx.drawImage(this.image, box.sx, box.sy, box.sw, box.sh, this.x, this.y, this.w, this.h);
	      ctx.globalCompositeOperation = 'lighten';

	      ctx.fillStyle = this.col;
	      ctx.rect(this.x, this.y, this.w, this.h);
	      ctx.fill();
	      ctx.restore();
	    }
	  }]);

	  return Piece;
	}();

	exports.default = Piece;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WillApp = function (_App) {
	  _inherits(WillApp, _App);

	  function WillApp(params) {
	    _classCallCheck(this, WillApp);

	    var _this = _possibleConstructorReturn(this, (WillApp.__proto__ || Object.getPrototypeOf(WillApp)).call(this, params));

	    _this.el = params.el;
	    _this.ctx = params.el.getContext("2d");
	    var width = _this.el.width;
	    var height = _this.el.height;

	    _this.cols = params.x || 10;
	    _this.rows = params.y || 10;

	    _this.dx = width / _this.cols;
	    _this.dy = height / _this.rows;
	    _this.el.onmousemove = _this.drawGridPoints.bind(_this);
	    return _this;
	  }

	  _createClass(WillApp, [{
	    key: 'setup',
	    value: function setup() {
	      console.log(this.el);
	      console.log('changbe');
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      console.log('changbe updated');
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      console.log(this.el, '>> draw');
	      this.clear("white");
	      this.drawGridPoints();
	    }
	  }, {
	    key: 'clear',
	    value: function clear(color) {
	      this.ctx.fillStyle = color;
	      this.ctx.fillRect(0, 0, this.el.width, this.el.height);
	    }
	  }, {
	    key: 'generateRandomColor',
	    value: function generateRandomColor() {
	      var r = Math.floor(Math.random() * 256);
	      var g = Math.floor(Math.random() * 256);
	      var b = Math.floor(Math.random() * 256);
	      return "rgb(" + r + "," + g + "," + b + ")";
	    }
	  }, {
	    key: 'getBox',
	    value: function getBox(i, j) {
	      return [Math.floor(i * this.dx), // nw-x
	      Math.floor(j * this.dy), // nw-y
	      Math.ceil(this.dx), // rectWidth
	      Math.ceil(this.dy)];
	    }
	  }, {
	    key: 'drawGridPoints',
	    value: function drawGridPoints() {
	      for (var i = 0; i < this.cols; i++) {
	        for (var j = 0; j < this.rows; j++) {
	          this.ctx.fillStyle = this.generateRandomColor();

	          var _getBox = this.getBox(i, j),
	              _getBox2 = _slicedToArray(_getBox, 4),
	              nw_x = _getBox2[0],
	              nw_y = _getBox2[1],
	              rectWidth = _getBox2[2],
	              rectHeight = _getBox2[3];

	          this.ctx.fillRect(nw_x, nw_y, rectWidth, rectHeight);
	        };
	      };
	    }
	  }]);

	  return WillApp;
	}(_App3.default);

	exports.default = WillApp;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GoldGridApp = exports.FlatApp = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App3 = __webpack_require__(2);

	var _App4 = _interopRequireDefault(_App3);

	var _FlatTriangleMesh = __webpack_require__(21);

	var _THREE = __webpack_require__(8);

	var THREE = _interopRequireWildcard(_THREE);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlatApp = exports.FlatApp = function (_App) {
	  _inherits(FlatApp, _App);

	  function FlatApp(params) {
	    _classCallCheck(this, FlatApp);

	    var _this = _possibleConstructorReturn(this, (FlatApp.__proto__ || Object.getPrototypeOf(FlatApp)).call(this, params));

	    _this.el = params.el;
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;

	    _this.mesh = new _FlatTriangleMesh.FlatTriangleMesh(_this.width, _this.height, 11, 10);
	    _this.ctx = _this.el.getContext('2d');
	    return _this;
	  }

	  _createClass(FlatApp, [{
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'drawTriangle',
	    value: function drawTriangle(points, color) {
	      var ctx = this.ctx;
	      ctx.save();
	      ctx.beginPath();
	      ctx.fillStyle = color;
	      ctx.moveTo(points[0][0], points[0][1]);
	      ctx.lineTo(points[1][0], points[1][1]);
	      ctx.lineTo(points[2][0], points[2][1]);
	      ctx.fill();
	      ctx.fill();
	      ctx.fill();
	      ctx.fill();
	      ctx.closePath();
	      ctx.restore();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.drawTriangle(this.mesh.get(0, 0), "black");
	      this.drawTriangle(this.mesh.get(0, 1), "magenta");
	      this.drawTriangle(this.mesh.get(0, 2), "cyan");

	      this.drawTriangle(this.mesh.get(1, 0), "yellow");
	      this.drawTriangle(this.mesh.get(1, 1), "black");
	      this.drawTriangle(this.mesh.get(1, 2), "gray");

	      this.drawTriangle(this.mesh.get(0, 22), "gray");
	      this.drawTriangle(this.mesh.get(1, 22), "gray");
	      this.drawTriangle(this.mesh.get(2, 22), "gray");

	      this.drawTriangle(this.mesh.get(9, 0), "gray");
	      this.drawTriangle(this.mesh.get(9, 1), "black");
	      this.drawTriangle(this.mesh.get(9, 2), "gray");
	      this.drawTriangle(this.mesh.get(10, 2), "gray");
	    }
	  }]);

	  return FlatApp;
	}(_App4.default);

	/**
	 * Grid with disconnected (unsmoothed) faces.
	 * xy-coordinates follow this layout
	 *  +---*---*---*---*---*
	 *   \ / \ / \ / \ / \ / \
	 *    *---*---*---*---*---*
	 *   / \ / \ / \ / \ / \ /
	 *  *---*---*---*---*---*
	 *   \ / \ / \ / \ / \ / \
	 *    *---*---*---*---*---*
	 *   / \ / \ / \ / \ / \ /
	 *  *---*---*---*---*---*
	 */

	var GoldGridApp = exports.GoldGridApp = function (_App2) {
	  _inherits(GoldGridApp, _App2);

	  function GoldGridApp(params) {
	    _classCallCheck(this, GoldGridApp);

	    var _this2 = _possibleConstructorReturn(this, (GoldGridApp.__proto__ || Object.getPrototypeOf(GoldGridApp)).call(this, params));

	    _this2.el = params.el;
	    var REGULAR_TRIANGLE_RATIO = Math.sqrt(3) / 2.0;
	    _this2.geometry = null;
	    _this2.triMesh = new _FlatTriangleMesh.FlatTriangleMesh(11, // Width
	    11 * REGULAR_TRIANGLE_RATIO, // Height
	    4, // Number of columns
	    4 // Number of rows
	    );

	    _this2.setup();
	    return _this2;
	  }

	  _createClass(GoldGridApp, [{
	    key: 'asVectors',
	    value: function asVectors(points) {
	      var vectors = [];
	      points.forEach(function (val) {
	        vectors.push(new THREE.Vector2(val[0], val[1]));
	      });
	      return vectors;
	    }
	  }, {
	    key: 'buildGeometry',
	    value: function buildGeometry() {
	      var geometry = new THREE.Geometry();

	      for (var i = -this.triMesh.rows; i <= this.triMesh.rows; i++) {
	        for (var j = -2 * this.triMesh.cols; j <= 2 * this.triMesh.cols; j++) {
	          var points = this.asVectors(this.triMesh.get(i, j));

	          // Add vertices
	          points.forEach(function (p) {
	            var x = 0.9 * p.x;
	            var y = 0.1 * p.y;
	            var z = 0.1 * Math.sin(x + y);
	            var vector = new THREE.Vector3(p.x, p.y, z);
	            geometry.vertices.push(vector);
	          });

	          var h = geometry.vertices.length - 3;
	          var face = void 0;

	          if ((i + j) % 2 == 0) {
	            face = new THREE.Face3(h + 0, h + 1, h + 2);
	          } else {
	            face = new THREE.Face3(h + 2, h + 1, h + 0);
	          }

	          geometry.faces.push(face);
	        }
	      }

	      return geometry;
	    }

	    /**
	     * Setup ...
	     */

	  }, {
	    key: 'setup',
	    value: function setup() {
	      // Camera
	      this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
	      //this.camera = new THREE.OrthographicCamera(-40, +40, -40, +40);
	      this.camera.position.x = 0;
	      this.camera.position.y = 0;
	      this.camera.position.z = 10;
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	      // Scene and rengerer
	      this.scene = new THREE.Scene();

	      var backgroundLenna = new THREE.CubeTextureLoader().setPath('img/').load(['lenna.png', 'lenna.png', 'lenna.png', 'lenna.png', 'lenna.png', 'lenna.png']);

	      var backgroundOil = new THREE.CubeTextureLoader().setPath('img/').load(['oil-2.png', 'oil-2.png', 'oil-2.png', 'oil-2.png', 'oil-2.png', 'oil-2.png']
	      // 'lenna.png', 'lenna.png',
	      );

	      this.geometry = this.buildGeometry();
	      this.geometry.computeFaceNormals();
	      // this.geometry = new THREE.SphereGeometry(3, 32, 32);

	      // this.material = new THREE.MeshPhongMaterial({
	      this.material = new THREE.MeshBasicMaterial({
	        color: 0xFFFFFF,
	        reflectivity: 0.8,
	        envMap: backgroundLenna
	      });
	      this.mesh = new THREE.Mesh(this.geometry, this.material);

	      this.renderer = new THREE.WebGLRenderer({
	        canvas: this.el
	      });

	      // Whatever work
	      this.renderer.setClearColor(0x00FFFF, 1);
	      this.scene.add(this.mesh);
	    }

	    /**
	     * Update ...
	     */

	  }, {
	    key: 'update',
	    value: function update(params) {}

	    /**
	     * Draw ...
	     */

	  }, {
	    key: 'draw',
	    value: function draw(params) {
	      this.renderer.clear();
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return GoldGridApp;
	}(_App4.default);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(63);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_React$Component) {
	  _inherits(Loading, _React$Component);

	  function Loading() {
	    _classCallCheck(this, Loading);

	    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
	  }

	  _createClass(Loading, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        'Fuck'
	      );
	    }
	  }]);

	  return Loading;
	}(_react2.default.Component);

	exports.default = Loading;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Flow = __webpack_require__(65);

	var _utils = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var THREE = __webpack_require__(8);

	var FLOW_STATES = new _Flow.FlowBuilder().addState("starting").addState("thinking").addState("success").addState("failure").addConnection("starting", "thinking").addConnection("thinking", "success").addConnection("thinking", "failure").build();

	var SplittableCube = function () {
	  function SplittableCube(position, cubeSize, spacing) {
	    _classCallCheck(this, SplittableCube);

	    this.position = position || new THREE.Vector3(0, 0, 0);
	    this.smallCubeSize = cubeSize || 1;
	    this.spacing = spacing || 0.1 * cubeSize;

	    this.isSplit = true;
	    this.group = new THREE.Group();
	    this._setupSmallCubes(this.smallCubeSize);

	    this._forCubes(function (cube) {
	      this.group.add(cube);
	    });

	    this.group.rotation.x += 1.0;
	    this.group.rotation.y += 1.6;
	    this.group.rotation.z -= 2.0;
	  }

	  _createClass(SplittableCube, [{
	    key: '_newCube',
	    value: function _newCube() {
	      var geometry = new THREE.BoxGeometry(this.smallCubeSize, this.smallCubeSize, this.smallCubeSize);
	      var material = new THREE.MeshNormalMaterial();
	      return new THREE.Mesh(geometry, material);
	    }

	    /**
	     * Worst function ever
	     */

	  }, {
	    key: '_setupSmallCubes',
	    value: function _setupSmallCubes(cubeSize) {
	      this.cubes = (0, _utils.makeArray3)(3, 3, 3);

	      this._forCubes(function (_, i, j, k) {
	        var x = this.position.x + (j - 1) * (this.smallCubeSize + this.spacing);
	        var y = this.position.y + (i - 1) * (this.smallCubeSize + this.spacing);
	        var z = this.position.z + (k - 1) * (this.smallCubeSize + this.spacing);

	        this.cubes[i][j][k] = this._newCube();
	        cube = this.cubes[i][j][k];
	        cube.position.x = x;
	        cube.position.y = y;
	        cube.position.z = z;
	      });
	    }
	  }, {
	    key: '_forCubes',
	    value: function _forCubes(callback) {
	      for (var i = 0; i < 3; i++) {
	        for (var j = 0; j < 3; j++) {
	          for (var k = 0; k < 3; k++) {
	            callback.call(this, this.cubes[i][j][k], i, j, k);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_positionSmallCubes',
	    value: function _positionSmallCubes() {}
	  }, {
	    key: 'split',
	    value: function split(distance) {}
	  }, {
	    key: 'unsplit',
	    value: function unsplit() {}
	  }]);

	  return SplittableCube;
	}();

	var LoadingCube = function () {
	  function LoadingCube(params) {
	    _classCallCheck(this, LoadingCube);

	    this.el = params.el;
	    this.apect = this.el.width / this.el.height;

	    var geometry = new THREE.BoxGeometry(1, 1, 1);
	    var material = new THREE.MeshBasicMaterial({
	      // wireframe: true,
	      color: 0x000000
	    });
	    this.singleCube = new THREE.Mesh(geometry, material);

	    this.cubeList = [];

	    // this.camera.position.x = 5;
	    // this.camera.position.y = 5;
	    this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);

	    this.camera.position.z = 5;
	    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	    this.state = 'starting';
	    this.scene = new THREE.Scene();

	    // ...
	    this.splittableCube = new SplittableCube(new THREE.Vector3(0, 0, 0), 1);
	    this.scene.add(this.splittableCube.group);

	    // Setup renderer
	    this.isRunning = true;

	    // ....
	    this.renderer = new THREE.WebGLRenderer();
	    this.renderer.setPixelRatio(window.devicePixelRatio);
	    this.renderer.setSize(300, 300);
	    this.renderer.setClearColor(0xFFFFFF, 1);

	    // Attach canvas
	    this.el.appendChild(this.renderer.domElement);

	    this.currentState = FLOW_STATES.getState("starting");
	  }

	  _createClass(LoadingCube, [{
	    key: 'getStates',
	    value: function getStates() {
	      throw new Error("Implement getStates");
	    }
	  }, {
	    key: 'setState',
	    value: function setState(stateId) {
	      var newState = FLOW_STATES.getState(stateId);
	      FLOW_STATES.hasConnection(this.currentState, newState);
	      this.currentState = newState;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      // Do nothing
	      if (!this.isRunning) {
	        return;
	      }

	      this._draw();
	    }
	  }, {
	    key: '_draw',
	    value: function _draw() {
	      this.renderer.clear();
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return LoadingCube;
	}();

	exports.default = LoadingCube;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Node of a Graph
	 */
	var FlowState = exports.FlowState = function () {
	  function FlowState(idName, props) {
	    _classCallCheck(this, FlowState);

	    this.idName = idName;
	    this.connected = {};
	    this.props = props;
	  }

	  _createClass(FlowState, [{
	    key: "connect",
	    value: function connect(state) {
	      this.connected[state.idName] = state;
	    }
	  }, {
	    key: "disconnect",
	    value: function disconnect(state) {
	      delete this.connected[state.idName];
	    }
	  }, {
	    key: "hasConnection",
	    value: function hasConnection(state) {
	      return this.connected.hasOwnProperty(state.idName);
	    }
	  }]);

	  return FlowState;
	}();

	/**
	 * Digraph
	 * Maybe this should be immutable... and we should just use the builder/make
	 * make function to make these.
	 */


	var Flow = exports.Flow = function () {
	  function Flow() {
	    _classCallCheck(this, Flow);

	    this.lookup = {};
	  }

	  _createClass(Flow, [{
	    key: "addState",
	    value: function addState(flowState) {
	      this.lookup[flowState.idName] = flowState;
	    }
	  }, {
	    key: "connectStates",
	    value: function connectStates(startState, endState) {
	      var start = this.lookup[startState.idName];
	      var end = this.lookup[endState.idName];
	      start.connect(end);
	    }
	  }, {
	    key: "getState",
	    value: function getState(idName) {
	      return this.lookup[idName];
	    }

	    /**
	     * Return a list of nodes
	     */

	  }, {
	    key: "getNodes",
	    value: function getNodes() {
	      return Object.values(this.lookup);
	    }

	    /**
	     * Return a list of edges
	     */

	  }, {
	    key: "getEdges",
	    value: function getEdges() {
	      throw new Error("getEdges is Unimplemented");
	      return undefined;
	    }
	  }, {
	    key: "hasState",
	    value: function hasState(id) {
	      return this.lookup.hasOwnProperty(id);
	    }
	  }, {
	    key: "hasConnection",
	    value: function hasConnection(startId, endId) {
	      var start = this.getState(startId);
	      var end = this.getState(endId);
	      if (start == undefined || end == undefined) {
	        return false;
	      } else {
	        return start.hasConnection(end);
	      }
	    }
	  }]);

	  return Flow;
	}();

	var FlowBuilder = exports.FlowBuilder = function () {
	  function FlowBuilder() {
	    _classCallCheck(this, FlowBuilder);

	    this.flow = new Flow();
	  }

	  _createClass(FlowBuilder, [{
	    key: "addState",
	    value: function addState(idName, props) {
	      this.flow.addState(new FlowState(idName, props));
	      return this;
	    }
	  }, {
	    key: "addConnection",
	    value: function addConnection(startId, endId) {
	      var start = this.flow.getState(startId);
	      var end = this.flow.getState(endId);
	      this.flow.connectStates(start, end);
	      return this;
	    }
	  }, {
	    key: "build",
	    value: function build() {
	      return this.flow;
	    }
	  }]);

	  return FlowBuilder;
	}();

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TriangleClip = __webpack_require__(67);

	var _TriangleClip2 = _interopRequireDefault(_TriangleClip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Construct a grid where xy-coordinates correspond to triangles instead of squares
	 * --------------------------------------
	 * \1,1 /\1,3 /\
	 *  \  /  \  /  \
	 *   \/1,2 \/1,4 \
	 *  ---------------
	 *   /\2,2 /\    /
	 *  /  \  /  \  /
	 *   2,1\/    \/
	 *  ---------------
	 */
	var TriangleClipGrid = function () {
	  function TriangleClipGrid(x, y, rad, image) {
	    _classCallCheck(this, TriangleClipGrid);

	    this.x = x;
	    this.y = y;
	    this.dx = this.rad;
	    this.dy = this.rad;
	    this.dots = [];
	    this.rad = rad;
	    this.image = image;

	    // This is probably round-off too much, and creating
	    // a slight overlap along the edges of the triangles
	    this.dx = 1.73 / 2. * this.rad;
	    this.dy = this.rad / 2.;

	    // Final
	    this.setup();
	  }

	  /**
	   *
	   */


	  _createClass(TriangleClipGrid, [{
	    key: 'get',
	    value: function get(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      var img = this.image;
	      this.grid = [];

	      for (var i = 0; i < 20; i++) {
	        for (var j = 0; j < 20; j++) {
	          var sig = (i + j) % 2 ? 1 : -1;
	          var theta = sig * Math.PI / 2.;
	          var p = this.get(i, j);
	          this.grid.push(new _TriangleClip2.default(p.x, p.y, this.rad, img, 'black', theta));
	        }
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var self = this;
	      ctx.save();
	      self.grid.forEach(function (tri, i) {
	        tri.draw(ctx);
	      });
	      ctx.restore();
	    }
	  }]);

	  return TriangleClipGrid;
	}();

	exports.default = TriangleClipGrid;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Construct a Triangle Clip Object
	 */
	var TriangleClip = function () {
	  function TriangleClip(x, y, rad, image, color, theta) {
	    _classCallCheck(this, TriangleClip);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	    this.color = color;
	    this.image = image;
	    this.theta = theta;
	  }

	  _createClass(TriangleClip, [{
	    key: 'getPointList',
	    value: function getPointList() {
	      var t = this.theta;
	      var points = [];

	      for (var i = 0; i < 3; i++) {
	        var theta = i * 2 * Math.PI / 3;

	        var u = this.x + this.rad * Math.cos(t + theta);
	        var v = this.y + this.rad * Math.sin(t + theta);

	        u = Math.round(u);
	        v = Math.round(v);

	        points.push({
	          'x': u,
	          'y': v
	        });
	      }

	      return points;
	    }

	    /**
	     * Return an xy-coord bounding box
	     */

	  }, {
	    key: 'getBoundingBox',
	    value: function getBoundingBox() {
	      var points = this.getPointList();
	      var x = { 'min': +Infinity, 'max': -Infinity };
	      var y = { 'min': +Infinity, 'max': -Infinity };

	      // Naive
	      points.forEach(function (val) {
	        x.min = Math.min(x.min, val.x);
	        x.max = Math.max(x.max, val.x);
	        y.min = Math.min(y.min, val.y);
	        y.max = Math.max(y.max, val.y);
	      });

	      return {
	        'x': x.min,
	        'y': y.min,
	        'w': x.max - x.min,
	        'h': y.max - y.min
	      };
	    }

	    /**
	     * Retrun the dimensions of a random slice for size w, h
	     */

	  }, {
	    key: 'getRandomImageSlice',
	    value: function getRandomImageSlice(w, h) {
	      return {
	        'sx': Math.floor((this.image.width - w) * Math.random()),
	        'sy': Math.floor((this.image.height - h) * Math.random()),
	        'sw': w,
	        'sh': h
	      };
	    }

	    /**
	     * Render a triangle onto a context
	     * @param ctx ...
	     */

	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var sig = this.up ? -1 : +1;
	      var t = this.theta;

	      ctx.save();

	      ctx.fillStyle = this.color;
	      ctx.strokeStyle = this.color;
	      ctx.lineWidth = 0.90;
	      ctx.beginPath();

	      var points = this.getPointList();

	      ctx.moveTo(points[0].x, points[0].y);
	      ctx.lineTo(points[1].x, points[1].y);
	      ctx.lineTo(points[2].x, points[2].y);

	      ctx.closePath();
	      // ctx.clip();
	      // ctx.rect(0, 0, 1000, 1000);
	      // ctx.fill();
	      // ctx.stroke();
	      // ctx.fill();


	      // ctx.fill();


	      // Draw bounding box
	      // ctx.save();
	      var size = 2 * this.rad;
	      var box = this.getRandomImageSlice(size, size);
	      var tri_box = this.getBoundingBox();

	      // ctx.beginPath();
	      ctx.clip();
	      ctx.fillStyle = 'red';
	      ctx.strokeStyle = 'black';
	      ctx.drawImage(this.image, box.sx, box.sy, box.sw, box.sh, tri_box.x, tri_box.y, tri_box.w, tri_box.h);
	      // ctx.stroke();
	      ctx.restore();
	    }
	  }]);

	  return TriangleClip;
	}();

	exports.default = TriangleClip;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Subtitle = exports.Subtitle = function () {
	  function Subtitle(text, style) {
	    _classCallCheck(this, Subtitle);

	    style = style || {};
	    this.text = text;
	    this.color = style.color || "black";
	    this.outlineColor = style.outlineColor || "white";
	    this.divWidth = style.width || "100%";
	    this.divHeight = style.height;
	    this.bottom = style.bottom || "0px";
	    this.left = style.left || "0px";

	    //
	    this.domElement = this._createDomElement();
	  }

	  _createClass(Subtitle, [{
	    key: "_createDomElement",
	    value: function _createDomElement() {
	      var div = document.createElement("DIV");
	      var span = document.createElement("SPAN");
	      div.appendChild(span);
	      span.innerHTML = this.text;

	      div.style.color = this.color;
	      div.style.position = "fixed";
	      div.style.left = this.left;
	      div.style.bottom = this.bottom;
	      div.style.zIndex = "9000";
	      div.style.textShadow = "1px 1px white, -1px -1px white, -1px 1px white, 1px -1px white";
	      div.style.width = this.divWidth;
	      if (this.divHeight) {
	        div.style.height = this.divHeight;
	      }

	      div.style.textAlign = "center";

	      return div;
	    }
	  }, {
	    key: "showFor",
	    value: function showFor(milliseconds, callback) {
	      this.show();

	      setTimeout(function () {
	        this.hide();
	        if (callback != undefined) {
	          callback.apply(this);
	        }
	      }.bind(this), milliseconds);
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      document.body.appendChild(this.domElement);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      document.body.removeChild(this.domElement);
	    }
	  }]);

	  return Subtitle;
	}();

	var SubtitleScript = exports.SubtitleScript = function () {
	  function SubtitleScript(style) {
	    _classCallCheck(this, SubtitleScript);

	    this.style = style;
	    this.functions = [];
	  }

	  _createClass(SubtitleScript, [{
	    key: "add",
	    value: function add(text, duration) {
	      var _this = this;

	      this.functions.push(function (next) {
	        var sub = new Subtitle(text, _this.style);
	        sub.showFor(duration, _this.read.bind(_this));
	      });
	      return this;
	    }
	  }, {
	    key: "read",
	    value: function read() {
	      var fn = this.functions.shift();
	      if (fn) {
	        fn.call();
	      }
	    }
	  }]);

	  return SubtitleScript;
	}();

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ]);