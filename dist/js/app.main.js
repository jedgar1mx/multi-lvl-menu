(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller() {
  _classCallCheck(this, Controller);
};

exports.default = Controller;

},{}],2:[function(require,module,exports){
'use strict';

var _controllerClass = require('./controller.class.js');

var _controllerClass2 = _interopRequireDefault(_controllerClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var menuToggle = function menuToggle(ev) {
    console.log(ev);
    if (ev.target.checked) {
      document.querySelector('.nav-container.lvl-1').className = 'active nav-container lvl-1';
    } else {
      var navContainers = document.querySelectorAll('.active.nav-container');
      console.log(navContainers);
      navContainers.forEach(function (container) {
        var tempClass = container.className.split(' ');
        var newClass = '';
        tempClass.forEach(function (str) {
          str != 'active' ? newClass += str + ' ' : 0;
        });
        console.log(newClass);
        container.className = newClass;
      });
    }
  };
  var navLevelChange = function navLevelChange(ev) {
    console.log(ev);
  };
  console.log('starting js');
  document.getElementById('menu').addEventListener('change', function (e) {
    menuToggle(e);
  });
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      navLevelChange(e);
    });
  });
})(window);

},{"./controller.class.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGpzXFxjb250cm9sbGVyLmNsYXNzLmpzIiwiYXBwXFxqc1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7OztJQUNxQixVLEdBQ25CLHNCQUFjO0FBQUE7QUFDYixDOztrQkFGa0IsVTs7O0FDRHJCOztBQUNBOzs7Ozs7QUFDQSxDQUFDLFlBQVU7QUFDVCxNQUFJLGFBQWEsU0FBUyxVQUFULENBQW9CLEVBQXBCLEVBQXVCO0FBQ3RDLFlBQVEsR0FBUixDQUFZLEVBQVo7QUFDQSxRQUFHLEdBQUcsTUFBSCxDQUFVLE9BQWIsRUFBcUI7QUFDbkIsZUFBUyxhQUFULENBQXVCLHNCQUF2QixFQUErQyxTQUEvQyxHQUEyRCw0QkFBM0Q7QUFDRCxLQUZELE1BRUs7QUFDSCxVQUFJLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLHVCQUExQixDQUFwQjtBQUNBLGNBQVEsR0FBUixDQUFZLGFBQVo7QUFDQSxvQkFBYyxPQUFkLENBQXNCLFVBQVMsU0FBVCxFQUFtQjtBQUN2QyxZQUFJLFlBQVksVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQTBCLEdBQTFCLENBQWhCO0FBQ0EsWUFBSSxXQUFXLEVBQWY7QUFDQSxrQkFBVSxPQUFWLENBQWtCLFVBQVMsR0FBVCxFQUFhO0FBQzVCLGlCQUFPLFFBQVIsR0FBb0IsWUFBWSxNQUFNLEdBQXRDLEdBQTRDLENBQTVDO0FBQ0QsU0FGRDtBQUdBLGdCQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0Esa0JBQVUsU0FBVixHQUFzQixRQUF0QjtBQUNELE9BUkQ7QUFTRDtBQUNGLEdBakJEO0FBa0JBLE1BQUksaUJBQWlCLFNBQVMsY0FBVCxDQUF3QixFQUF4QixFQUEyQjtBQUM5QyxZQUFRLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsR0FGRDtBQUdBLFVBQVEsR0FBUixDQUFZLGFBQVo7QUFDQSxXQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsZ0JBQWhDLENBQWlELFFBQWpELEVBQTJELFVBQVMsQ0FBVCxFQUFXO0FBQ3BFLGVBQVcsQ0FBWDtBQUNELEdBRkQ7QUFHQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUFmO0FBQ0EsV0FBUyxPQUFULENBQWlCLFVBQVMsSUFBVCxFQUFjO0FBQzdCLFNBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBUyxDQUFULEVBQVc7QUFDeEMscUJBQWUsQ0FBZjtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0QsQ0FoQ0QsRUFnQ0csTUFoQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuY2xhc3MuanMnO1xyXG4oZnVuY3Rpb24oKXtcclxuICBsZXQgbWVudVRvZ2dsZSA9IGZ1bmN0aW9uIG1lbnVUb2dnbGUoZXYpe1xyXG4gICAgY29uc29sZS5sb2coZXYpO1xyXG4gICAgaWYoZXYudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWNvbnRhaW5lci5sdmwtMScpLmNsYXNzTmFtZSA9ICdhY3RpdmUgbmF2LWNvbnRhaW5lciBsdmwtMSc7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGV0IG5hdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlLm5hdi1jb250YWluZXInKTtcclxuICAgICAgY29uc29sZS5sb2cobmF2Q29udGFpbmVycyk7XHJcbiAgICAgIG5hdkNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICAgIGxldCB0ZW1wQ2xhc3MgPSBjb250YWluZXIuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IG5ld0NsYXNzID0gJyc7XHJcbiAgICAgICAgdGVtcENsYXNzLmZvckVhY2goZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICAgIChzdHIgIT0gJ2FjdGl2ZScpID8gbmV3Q2xhc3MgKz0gc3RyICsgJyAnIDogMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDbGFzcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IG5ld0NsYXNzO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGxldCBuYXZMZXZlbENoYW5nZSA9IGZ1bmN0aW9uIG5hdkxldmVsQ2hhbmdlKGV2KXtcclxuICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKCdzdGFydGluZyBqcycpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBtZW51VG9nZ2xlKGUpO1xyXG4gIH0pO1xyXG4gIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xyXG4gIG5hdkl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIG5hdkxldmVsQ2hhbmdlKGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKHdpbmRvdyk7XHJcbiJdfQ==
