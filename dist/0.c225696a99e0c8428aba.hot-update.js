webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(86);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-lg bg-secondary fixed-top text-uppercase', id: 'mainNav' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              _Link2.default,
              { className: 'navbar-brand js-scroll-trigger', next: '#page-top' },
              'Maturity Matrix'
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'navbarResponsive' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav ml-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item mx-0 mx-lg-1' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#portfolio' },
                    'Portfolio'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item mx-0 mx-lg-1' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#about' },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item mx-0 mx-lg-1' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger', href: '#contact' },
                    'Contact'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ })

})
//# sourceMappingURL=0.c225696a99e0c8428aba.hot-update.js.map